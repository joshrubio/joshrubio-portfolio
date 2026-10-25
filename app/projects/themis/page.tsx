import {
    Callout,
    DataTable,
    Figure,
    Paragraph,
    ProcessSteps,
    ProjectBody,
    ProjectCTA,
    ProjectHeader,
    ProjectPage,
    Section,
    StatTiles,
    SubHeading,
    Takeaways,
    Terminal,
} from "@/components/projects/ProjectPage"

export const metadata = {
    title: "Themis - Compliance Findings Viewer | Josh D. Rubio",
    description: "An interpretation layer over LLM-generated CMMC / NIST SP 800-171 findings on infrastructure-as-code: a scanner-style log, finding detail pages and a live paste-and-scan. A Siegfried satellite, designed and built end to end.",
}

const IMG = "/assets/imgs/projects/themis"

export default function Themis() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View on GitHub", href: "https://github.com/joshrubio/Themis" }}
                status="Siegfried satellite · 3 of 5"
                title="Themis - Compliance Findings Viewer"
                summary="An LLM reads infrastructure-as-code like an auditor and cites real NIST SP 800-171 controls. Themis presents what it finds the way security engineers already read scanners, and is upfront about not being one."
                meta={[
                    { label: "Role", value: "Design & Development" },
                    { label: "Stack", value: "Next.js, Groq, TypeScript" },
                    { label: "Framework", value: "NIST SP 800-171 Rev 2" },
                    { label: "Identity", value: "Violet · JetBrains Mono" },
                ]}
                hero={{ src: `${IMG}/thumbnail.png`, alt: "Themis" }}
            />

            <ProjectBody>
                <Section title="1. Overview">
                    <Paragraph>
                        <strong>Named for the Greek goddess of law, whose scales are a classic symbol of audit</strong>, Themis weighs infrastructure files against compliance controls. It is a satellite of <a href="/projects/siegfried">Siegfried</a>.
                    </Paragraph>
                    <Paragraph>
                        It is not a static-analysis engine: there is no parser, no policy-as-code rule set and no access to real cloud accounts, unlike Checkov or tfsec. It is the interface layer over what a language model flags, held to the same honesty rule as the other satellites.
                    </Paragraph>
                </Section>

                <Callout tone="danger" title="⚠️ The Problem">
                    <p className="text-300 mb-0">
                        Teams preparing for a CMMC assessment need to know which lines of their Terraform, Dockerfiles and manifests break which control, in language they can act on. LLM output can help, but free-form text with invented control numbers is worse than nothing.
                    </p>
                </Callout>

                <Callout tone="success" title="✓ The Solution">
                    <p className="text-300 mb-0">
                        <strong>Constrain the model, then present it like a tool people trust.</strong> The prompt carries a list of real controls, a severity rubric and a strict JSON schema; the interface borrows Checkov&apos;s scan log and Wiz&apos;s finding cards.
                    </p>
                </Callout>

                <ProcessSteps
                    steps={[
                        { label: "FILES", hint: "Terraform, Docker, K8s" },
                        { label: "PROMPT", hint: "Real controls" },
                        { label: "FINDINGS", hint: "Strict JSON" },
                        { label: "REVIEW", hint: "Log and detail" },
                    ]}
                />

                <Section title="2. The Pipeline">
                    <Paragraph>
                        Five deliberately misconfigured files cover the usual mistakes: a public S3 bucket without encryption or logging, SSH and RDP open to the world, a wildcard IAM policy, secrets baked into a Dockerfile, and a privileged Kubernetes pod running as root. A script sent each one to Groq once and committed the result; the Scan page runs the same shared prompt live.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/pipeline.png`} alt="Themis pipeline" caption="One shared prompt, used offline for the log and live for the Scan page" />
                <SubHeading>Grounding the model</SubHeading>
                <Paragraph>
                    The system prompt lists ten real NIST SP 800-171 Rev 2 controls with their families and asks for the single best fit, so findings cite numbers like 3.1.20 or 3.13.16 instead of plausible inventions. Severity follows an explicit rubric, from a direct path to exposure (critical) to hygiene (low), and the model is told not to invent issues and to return an empty list when a file is clean.
                </Paragraph>

                <Section title="3. The Scan Log">
                    <Paragraph>
                        Sixteen findings across five files, in Checkov&apos;s format: the check id and title, the failed resource with its file and lines, and the control behind it. The list filters by severity and by file.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/screen-scanlog.webp`} alt="Scan log" caption="The scan log, filterable by severity and by file" />

                <Section title="4. Finding Detail">
                    <Paragraph>
                        Each finding opens a page modelled on Wiz&apos;s cards: a metadata grid with severity, control, family and language, the offending snippet with its line range, an explanation written for someone preparing for an assessment, and a concrete remediation.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/screen-finding.webp`} alt="Finding detail" caption="A critical finding: public read ACL on an S3 bucket" />

                <Section title="5. Live Scan">
                    <Paragraph>
                        Paste a Terraform file, Dockerfile or Kubernetes manifest, pick the language, and the same pipeline returns findings in a few seconds. Nothing is stored.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/screen-scan.webp`} alt="Scan a file" caption="The live scan page" />
                <Terminal
                    title="themis scan --stdin"
                    lines={[
                        { who: "you", text: "paste: aws_security_group with ingress 0.0.0.0/0 on port 22" },
                        { who: "dim", text: "language: terraform · rubric + 10 controls · strict JSON" },
                        { who: "flag", text: 'Check: THEMIS-AC-01: "Open SSH access from any IP"' },
                        { who: "dim", text: "FAILED for resource: input.tf:3-9 · Control 3.1.1 · Access Control" },
                        { who: "ok", text: "1 finding · nothing stored" },
                    ]}
                    caption="Illustrative run: the format is the app's, the input is an example."
                />

                <Section title="6. Identity">
                    <Paragraph>
                        A single monospace typeface everywhere (JetBrains Mono, with no separate UI font, because this is a terminal), zero corner radius and a violet accent for functional signals only. Severity colours are the one exception to the monochrome rule, because in this domain they are data, not decoration.
                    </Paragraph>
                    <DataTable
                        head={["Severity", "Meaning in the rubric", "Findings"]}
                        rows={[
                            ["Critical", "Direct exposure or a full compromise path", "5"],
                            ["High", "A gap an assessor would flag immediately", "6"],
                            ["Medium", "A real gap with a smaller blast radius", "4"],
                            ["Low", "Hygiene and best practice", "1"],
                        ]}
                    />
                </Section>

                <Section title="7. Outcome">
                    <StatTiles
                        items={[
                            { value: "5", label: "example files" },
                            { value: "16", label: "findings" },
                            { value: "10", label: "real controls in the prompt" },
                            { value: "1", label: "prompt, offline and live" },
                        ]}
                    />
                </Section>

                <Takeaways
                    items={[
                        { title: "Constrain before you display", text: "A list of real controls and a schema did more for credibility than any interface work." },
                        { title: "Borrow the grammar of trusted tools", text: "A scan log and finding cards made LLM output feel familiar to the people who read scanners every day." },
                        { title: "Say what it is not", text: "The docs page explains what a real assessment involves that this does not attempt." },
                    ]}
                    next="Run a deterministic policy engine next to the model and show where they agree and where they disagree."
                />

                <ProjectCTA
                    links={[
                        { label: "View Source Code", href: "https://github.com/joshrubio/Themis", icon: "ri-github-fill" },
                        { label: "Siegfried Case Study", href: "/projects/siegfried" },
                        { label: "Discuss This Project", href: "/#contact" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
