import { NextResponse } from "next/server";
import { submitToIndexNow, sitemapUrls, indexNowHost } from "@/lib/indexnow";

// Always run on request; never cache. Each call performs an external POST.
export const dynamic = "force-dynamic";

/**
 * Optional protection. If CRON_SECRET (Vercel Cron's convention) or
 * INDEXNOW_TOKEN is set, callers must present it as `Authorization: Bearer <t>`
 * or `?token=<t>`. If neither is set, the endpoint is open — it only ever
 * submits our own sitemap URLs, so the blast radius is small, but setting a
 * secret is recommended in production to avoid needless re-submissions.
 */
function authorized(req: Request): boolean {
  const token = process.env.CRON_SECRET || process.env.INDEXNOW_TOKEN;
  if (!token) return true;
  if (req.headers.get("authorization") === `Bearer ${token}`) return true;
  return new URL(req.url).searchParams.get("token") === token;
}

/** GET — submit every sitemap URL. This is what Vercel Cron calls. */
export async function GET(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const result = await submitToIndexNow(sitemapUrls());
  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}

/**
 * POST — submit a specific list, e.g. { "urlList": ["https://mmbonding.com/x"] }.
 * Falls back to the full sitemap when no list is given. URLs off our host are
 * dropped by submitToIndexNow.
 */
export async function POST(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  let urls = sitemapUrls();
  try {
    const body = await req.json();
    if (Array.isArray(body?.urlList) && body.urlList.length > 0) {
      urls = body.urlList.filter((u: unknown): u is string => typeof u === "string");
    }
  } catch {
    // No/invalid JSON body — fall back to the full sitemap.
  }

  const result = await submitToIndexNow(urls);
  return NextResponse.json(
    { ...result, note: `host ${indexNowHost()}` },
    { status: result.ok ? 200 : 502 },
  );
}
