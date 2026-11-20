// Usage: node shot.mjs <jobs.json>
// Job: { url, out, w=1440, h=900, mobile=false, full=false, scrollY=0, wait=2500, dark=false, clip, clicks:[selector], hide:[selector], cookie:[{name,value}] }
import puppeteer from "puppeteer-core";
import { readFileSync } from "node:fs";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const jobs = JSON.parse(readFileSync(process.argv[2], "utf8"));
const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
for (const j of jobs) {
  const page = await browser.newPage();
  await page.setViewport({ width: j.w ?? 1440, height: j.h ?? 900, deviceScaleFactor: j.dpr ?? 1, isMobile: !!j.mobile, hasTouch: !!j.mobile });
  await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: j.dark ? "dark" : "light" }]);
  if (j.cookie) await page.setCookie(...j.cookie.map((c) => ({ ...c, url: j.url })));
  if (j.storage) await page.evaluateOnNewDocument((s) => { for (const [k, v] of Object.entries(s)) localStorage.setItem(k, v); }, j.storage);
  try {
    await page.goto(j.url, { waitUntil: "networkidle2", timeout: 60000 });
  } catch (e) { console.log("goto warn", j.url, e.message); }
  await new Promise((r) => setTimeout(r, j.wait ?? 2500));
  // never publish personal contact details: blank out emails and phone numbers in visible text
  await page.evaluate(() => {
    const mail = /[\w.+-]+@[\w-]+\.[\w.]+/g, tel = /\+\d[\d\s]{8,}/g;
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let n = w.nextNode(); n; n = w.nextNode()) n.nodeValue = n.nodeValue.replace(mail, "hello@example.com").replace(tel, "+31 6 •• •• •• ••");
  });
  if (j.hide) for (const s of j.hide) await page.$$eval(s, (els) => els.forEach((e) => (e.style.display = "none"))).catch(() => {});
  for (const c of j.clicks ?? []) { await page.click(c).catch((e) => console.log("click fail", c, e.message)); await new Promise((r) => setTimeout(r, 800)); }
  if (j.scrollY) { await page.evaluate((y) => window.scrollTo(0, y), j.scrollY); await new Promise((r) => setTimeout(r, 1500)); }
  if (j.wheel) {
    await page.mouse.move(j.wheel.x, j.wheel.y);
    for (let i = 0; i < j.wheel.times; i++) { await page.mouse.wheel({ deltaY: j.wheel.delta }); await new Promise((r) => setTimeout(r, 120)); }
    await new Promise((r) => setTimeout(r, 2500));
  }
  if (j.scrollThrough) {
    // trigger reveal-on-scroll animations
    await page.evaluate(async () => {
      const h = document.documentElement.scrollHeight;
      for (let y = 0; y < h; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 150)); }
      window.scrollTo(0, 0);
    });
    await new Promise((r) => setTimeout(r, 1200));
  }
  const opts = { path: j.out, fullPage: !!j.full };
  if (j.clip) { opts.clip = j.clip; opts.fullPage = false; }
  await page.screenshot(opts);
  console.log("saved", j.out);
  await page.close();
}
await browser.close();
