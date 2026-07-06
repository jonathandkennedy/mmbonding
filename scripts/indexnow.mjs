#!/usr/bin/env node
/**
 * Manually submit URLs to IndexNow (Bing, Yandex, Seznam, Naver, ...).
 *
 *   npm run indexnow                 # submit every URL in the live sitemap
 *   npm run indexnow -- <url> <url>  # submit only the given URLs
 *
 * Self-contained: it reads the key from the committed key file in public/ and
 * the site URL from lib/site.ts, so it never drifts from the app. Run it right
 * after publishing new content to get an instant crawl instead of waiting for
 * the daily Vercel cron.
 *
 * Requires the site (and its key file) to be reachable at the production URL,
 * so run it after the domain is pointed and deployed.
 */
import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

async function findKey() {
  const files = await readdir(join(root, "public"));
  const keyFile = files.find((f) => /^[a-f0-9]{8,128}\.txt$/i.test(f));
  if (!keyFile) throw new Error("No IndexNow key file found in public/");
  const key = keyFile.replace(/\.txt$/i, "");
  const contents = (await readFile(join(root, "public", keyFile), "utf8")).trim();
  if (contents !== key) {
    throw new Error(`Key file ${keyFile} does not contain its own key`);
  }
  return key;
}

async function siteUrl() {
  const src = await readFile(join(root, "lib", "site.ts"), "utf8");
  const m = src.match(/url:\s*["']([^"']+)["']/);
  if (!m) throw new Error("Could not read site.url from lib/site.ts");
  return m[1].replace(/\/$/, "");
}

async function sitemapUrls(base) {
  const res = await fetch(`${base}/sitemap.xml`);
  if (!res.ok) throw new Error(`Fetching sitemap failed: ${res.status} ${res.statusText}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1].trim());
}

async function main() {
  const key = await findKey();
  const base = await siteUrl();
  const host = new URL(base).host;
  const keyLocation = `${base}/${key}.txt`;

  const argv = process.argv.slice(2).filter((a) => /^https?:\/\//.test(a));
  const urlList = (argv.length ? argv : await sitemapUrls(base)).filter(
    (u) => new URL(u).host === host,
  );

  if (urlList.length === 0) {
    console.error("Nothing to submit.");
    process.exit(1);
  }

  console.log(`Submitting ${urlList.length} URL(s) for ${host} to IndexNow...`);
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
    },
    body: JSON.stringify({ host, key, keyLocation, urlList }),
  });

  if (res.ok) {
    console.log(`IndexNow accepted the submission (HTTP ${res.status}).`);
  } else {
    console.error(`IndexNow returned HTTP ${res.status} ${res.statusText}.`);
    console.error(await res.text().catch(() => ""));
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
