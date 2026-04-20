/**
 * Pré-build: garante que paths em `public/` referenciados pelo app existem no disco.
 * - LP: strings `/assets/landings/...` em `src/content/landings/*.ts`
 * - Marca: `/assets/brand/...` em `src/shared/brand/index.ts`
 * - SEO default: `defaultImage` em `config/site.ts`
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function collectRegex(filePath, re) {
  if (!fs.existsSync(filePath)) return [];
  const src = fs.readFileSync(filePath, "utf8");
  const out = new Set();
  let m;
  while ((m = re.exec(src)) !== null) {
    out.add(m[1]);
  }
  return [...out];
}

const landingsDir = path.join(root, "src", "content", "landings");
const landingFiles = fs.readdirSync(landingsDir).filter((n) => n.endsWith(".ts") && n !== "index.ts" && n !== "base.ts");

const paths = new Set();
const landingRe = /["'](\/assets\/landings\/[^"']+)["']/g;
for (const name of landingFiles) {
  for (const p of collectRegex(path.join(landingsDir, name), landingRe)) {
    paths.add(p);
  }
}

const brandFile = path.join(root, "src", "shared", "brand", "index.ts");
const brandRe = /["'](\/assets\/brand\/[^"']+)["']/g;
for (const p of collectRegex(brandFile, brandRe)) {
  paths.add(p);
}

const siteFile = path.join(root, "config", "site.ts");
for (const p of collectRegex(siteFile, /defaultImage:\s*["'](\/assets\/[^"']+)["']/g)) {
  paths.add(p);
}

const missing = [...paths].filter((urlPath) => {
  const rel = path.join("public", urlPath.replace(/^\//, ""));
  return !fs.existsSync(path.join(root, rel));
});

if (missing.length > 0) {
  console.error("[verify-public-assets] Arquivos ausentes em public/:");
  for (const p of missing.sort()) {
    console.error(`  - ${p}`);
  }
  process.exit(1);
}

console.log(`[verify-public-assets] OK (${paths.size} caminho(s) sob /assets/...).`);
