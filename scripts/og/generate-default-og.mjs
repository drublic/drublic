/**
 * Renders the site-wide default social card (1200×630) to public/img/og-default.png.
 * Uses the Satori/resvg renderer bundled with Next.js — no extra dependencies.
 *
 *   node scripts/og/generate-default-og.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { ImageResponse } = require("next/dist/compiled/@vercel/og/index.node.js");

const root = process.cwd();
const portrait = fs.readFileSync(path.join(root, "public/img/me.jpg")).toString("base64");

const h = (type, style, children) => ({ type, props: { style, children } });

const card = h(
  "div",
  {
    width: "100%",
    height: "100%",
    display: "flex",
    background:
      "radial-gradient(circle at 85% 90%, #a526eb 0%, #1c0c96 35%, #0a0814 70%)",
    color: "#fff",
    padding: "64px 72px",
    fontFamily: "Geist",
  },
  [
    h(
      "div",
      {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        paddingRight: 48,
      },
      [
        h("div", { display: "flex", alignItems: "flex-end", fontSize: 34, letterSpacing: -1 }, [
          "Hans Reinl",
          h("div", { display: "flex", width: 22, height: 5, marginLeft: 10, marginBottom: 8, background: "#fff" }, ""),
        ]),
        h(
          "div",
          { display: "flex", fontSize: 62, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 },
          "Every Team Has AI Tools. Few Master Production Systems."
        ),
        h(
          "div",
          { display: "flex", fontSize: 23, color: "rgba(255,255,255,0.78)" },
          "AI-Native Systems Architect & Engineering Advisor · Cologne"
        ),
      ]
    ),
    {
      type: "img",
      props: {
        src: `data:image/jpeg;base64,${portrait}`,
        width: 300,
        height: 300,
        style: {
          alignSelf: "center",
          borderRadius: 9999,
          border: "6px solid rgba(255,255,255,0.9)",
          objectFit: "cover",
        },
      },
    },
  ]
);

const response = new ImageResponse(card, { width: 1200, height: 630 });
const buffer = Buffer.from(await response.arrayBuffer());
const out = path.join(root, "public/img/og-default.png");
fs.writeFileSync(out, buffer);
console.log(`wrote ${path.relative(root, out)} (${buffer.length} bytes)`);
