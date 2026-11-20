import puppeteer from "puppeteer-core";
import { CSS } from "./diagram-lib.mjs";
const OUT = process.env.OUT_FILE ?? "./thumbnail.png";
const html = `<!doctype html><meta charset=utf-8><style>${CSS}
body{width:1440px;height:810px;overflow:hidden}
#c{display:flex;height:810px;padding:84px 90px;gap:70px;align-items:center;background:#faf9f5}
.l{flex:1}
.l h1{font-size:76px;line-height:1.05;margin-bottom:28px}
.l .sub{font-size:27px;margin-bottom:0;max-width:560px}
.file{width:600px;background:#fff;border:2px solid #efede6;border-radius:26px;padding:30px 34px;font-family:ui-monospace,Consolas,monospace;font-size:21px;line-height:1.62;color:#4a4943;box-shadow:0 18px 50px rgba(60,50,30,.07)}
.file .fn{font-family:Inter;font-size:16px;letter-spacing:.12em;text-transform:uppercase;color:#a29f94;font-weight:500;margin-bottom:14px}
.k{color:#d9694a}.v{color:#1f1e1b}.dim{color:#a29f94}
.file h2{font-family:'Source Serif 4',Georgia,serif;font-weight:500;font-size:30px;line-height:1.25;color:#1f1e1b;margin:18px 0 10px}
.file p{font-family:'Source Serif 4',Georgia,serif;font-size:22px;line-height:1.5;color:#4a4943}
.chips{display:flex;gap:10px;margin-top:22px;flex-wrap:wrap}
.chips span{font-family:Inter;font-size:17px;border:2px solid #f3dccf;background:#fffcfa;color:#b5492b;border-radius:99px;padding:5px 15px}
</style>
<div id="c"><div class="l"><div class="kicker">Automation</div><h1>Press releases that remember</h1><div class="sub">Dutch drafts from a dump of photos and notes, with a memory of every contact.</div></div>
<div class="file"><div class="fn">releases / 2026-11-03-licht-en-water.md</div>
<div><span class="dim">---</span><br><span class="k">subject:</span> <span class="v">expo-licht-en-water</span><br><span class="k">outlet:</span> <span class="v">rtv-rijnmond</span><br><span class="k">beat:</span> <span class="v">cultura</span><br><span class="k">language:</span> <span class="v">nl</span><br><span class="k">status:</span> <span class="v">draft</span><br><span class="k">assets:</span> <span class="v">[expo-flyer]</span><br><span class="dim">---</span></div>
<h2># Rotterdamse galerie toont werk van Anna Voorbeeld</h2>
<p>Galerie Voorbeeld opent op 14 november de tentoonstelling <i>Licht en Water</i>.</p>
<div class="chips"><span>Outlet</span><span>Subject</span><span>Person</span><span>Thread</span><span>Action</span></div></div></div>`;
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--no-sandbox"] });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 810 });
await p.setContent(html, { waitUntil: "networkidle0" });
await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: OUT });
await b.close();
console.log("ok");
