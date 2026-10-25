---
title: Mock-first integrations: building against vendors you cannot count on
description: How a telehealth platform with fourteen external integrations stayed buildable without credentials, and what a mock has to do before you can trust it.
category: Architecture
author: Josh D. Rubio
date: 2026-10-05
cover: /assets/imgs/projects/rx-library/thumbnail.png
coverAlt: The RX Library telehealth platform
---

A telehealth platform does very little on its own. It needs a provider network to supply licensed clinicians, an e-prescribing service, a pharmacy, a payment processor, identity checks, SMS, email and video. On [RX Library](/projects/rx-library), a large team project for the agency Proventheory, that list came to fourteen integration adapters, and the first thing you learn about such a list is that you will not have working access to all of it at the same time.

Some vendors take weeks to onboard. Some charge per call. Some have no usable sandbox. And when the data is regulated and health-adjacent, "just call the real thing with test data" is not an option you get to take lightly. I worked on the frontend and the business logic of that platform; the backend and the integration adapters were built by Aditya Suri. This post is about the pattern we all worked inside, seen mostly from the consuming side, and about what I think a mock-first setup has to get right.

## One interface, two implementations

The rule on RX Library was simple. Every adapter implements the same interface and, by default, runs against Mock Service Worker fixtures. Adding the environment keys for a vendor flips that adapter to live. Removing them flips it back. There is no separate "test mode" code path, so the code that runs on a laptop with no credentials is the code that runs in production, apart from where the bytes come from.

A simplified sketch of the idea, not the actual RX Library code:

```ts
interface PrescribingProvider {
  send(order: PrescriptionOrder): Promise<SendResult>
  status(id: string): Promise<PrescriptionStatus>
}

// Chosen once, at startup, from configuration.
const prescribing: PrescribingProvider = new VendorAdapter({
  apiKey: process.env.PRESCRIBING_API_KEY, // absent: requests are answered by fixtures
})
```

The detail that matters is that there is only one adapter. The mock is not a second class that someone has to keep in step with the first. The adapter is one piece of code whose network layer is either talking to the vendor or being intercepted. Mock Service Worker works at the network boundary, so the adapter's request building, response parsing and error handling all execute either way.

## What it buys you

On RX Library the practical results were these:

- A fresh clone starts a working platform with zero credentials.
- The test suite never touches a real vendor. The project has over 800 unit tests and more than 50 end-to-end specs, and none of them depends on a third party being up.
- Frontend and business logic can move without waiting for vendor access, which is the reason the pattern exists in the first place.

That last point deserves a second look. In a multi-role product (patient, provider, operator) the frontend is the part that has to represent every awkward state: an order that is stalled, a prescription that needs review, a payment that failed. A sandbox rarely produces those on demand. A fixture can return them whenever you ask.

## A mock has to be able to fail

The easiest way to waste a mock-first setup is to write fixtures that only ever succeed. Then your whole test suite is a proof that the happy path works, and your first real outage is also the first time the failure code runs.

The RX Library project page lists what hardening each adapter received: idempotency, classification of retryable errors, failure-mode tests for every adapter, and verification of signed webhooks. Here is why each of those only makes sense together with mocks:

- **Idempotency.** Anything that can be retried can arrive twice. If the fixture layer can replay a response or deliver a webhook two times, you can prove that the second delivery changes nothing.
- **Retryable versus permanent errors.** A timeout and a 429 deserve another attempt. A validation error does not. That distinction is only trustworthy if tests exercise both kinds on every adapter.
- **Failure-mode tests.** One per adapter, because every vendor fails in its own way and you want that written down as an executable fact.
- **Signed webhooks.** Verification code that is skipped in mock mode is verification code you have never run. The mock should sign its webhooks the way the vendor does, so the same check passes or fails for the same reason.

None of this is specific to health care. It is what "the mock is a real implementation of the contract" looks like once you take it seriously.

## Mocks drift

The other well-known risk is that a fixture records what the vendor did on the day someone wrote it. The vendor changes a field, the fixture does not, and your tests stay green.

I would not claim RX Library has solved this completely, and the project page does not say it has. These are the habits I reach for against drift in any project of this kind:

- Capture fixtures from real sandbox responses instead of writing them from the documentation.
- Validate responses at the adapter boundary with a schema, so an unexpected shape fails loudly where it enters rather than three layers away.
- Keep a small number of live smoke tests that run on demand with real keys, separate from the default suite.

## The trap in "keys present means live"

Flipping a vendor on by adding an environment variable is convenient, and it has an obvious failure: a production deployment that is missing a key will quietly run on mocks. A pharmacy order that is "sent" to a fixture is worse than an error.

Two cheap guards help, and both are things I would check for in any setup like this. Log, at startup, which mode each adapter is in. And in production, refuse to boot if an adapter that must be live is not. The convenience of configuration-driven switching is worth keeping; the silence is not.

## Where automation stops

One more design choice from the same project is worth mentioning because it is about automation and mocks together: the bots that react to events can only propose a prescription. A licensed practitioner turns a proposal into an order. When the whole integration layer is mocked, it is reassuring to have a boundary that no fixture or bot can cross by accident. Some decisions should not be reachable from code that is easy to run without credentials.

## When I would not do it

Mock-first has a cost: you maintain a fixture set, a fixture-loading layer and the discipline to keep both honest. For a product with one integration, a decent vendor sandbox and a small team, that cost may not pay back. It pays back when integrations are many, slow to obtain, expensive, or risky to exercise, and when more than one person needs to work at the same time without sharing a single set of credentials.

On RX Library all of those were true, which is why a platform with fourteen adapters could be cloned and run on day one with nothing but the repository. The takeaway I carry to other projects is short: put the vendor behind an interface you own, make the mock a first-class implementation that can fail, and make it impossible to ship the mock by accident.
