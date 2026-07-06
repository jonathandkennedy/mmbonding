/**
 * IndexNow submission. IndexNow lets us tell participating search engines
 * (Bing, Yandex, Seznam, Naver, and others) the moment a URL is added or
 * changed, instead of waiting to be crawled. A single POST to api.indexnow.org
 * is shared across every participating engine.
 *
 * The URL list is derived from the sitemap, so IndexNow always mirrors exactly
 * what we publish, with no second list to keep in sync.
 *
 * Docs: https://www.indexnow.org/documentation
 */
import sitemap from "@/app/sitemap";
import { site } from "@/lib/site";

/** api.indexnow.org fans a submission out to all participating engines. */
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

/** IndexNow accepts at most 10,000 URLs per request. */
const MAX_URLS_PER_REQUEST = 10_000;

/** Bare host for the `host` field, e.g. "mmbonding.com". */
export function indexNowHost(): string {
  return new URL(site.url).host;
}

/** Public location of the key file, e.g. "https://mmbonding.com/<key>.txt". */
export function indexNowKeyLocation(): string {
  return `${site.url}/${site.indexNowKey}.txt`;
}

/** Every canonical URL we publish, taken straight from the sitemap. */
export function sitemapUrls(): string[] {
  return sitemap().map((entry) => entry.url);
}

export type IndexNowResult = {
  ok: boolean;
  status: number | null;
  statusText: string;
  submitted: number;
  endpoint: string;
  host: string;
  keyLocation: string;
  /** Present when the request could not be completed at all. */
  error?: string;
};

/**
 * Submit a batch of URLs to IndexNow. All URLs must belong to `indexNowHost()`;
 * IndexNow rejects the whole request otherwise. Returns a structured result
 * instead of throwing so callers (route handler, script) can report cleanly.
 */
export async function submitToIndexNow(
  urls: string[],
): Promise<IndexNowResult> {
  const host = indexNowHost();
  const keyLocation = indexNowKeyLocation();

  // Keep only same-host, absolute http(s) URLs, de-duplicated.
  const urlList = Array.from(
    new Set(
      urls.filter((u) => {
        try {
          return new URL(u).host === host;
        } catch {
          return false;
        }
      }),
    ),
  ).slice(0, MAX_URLS_PER_REQUEST);

  const base = { endpoint: INDEXNOW_ENDPOINT, host, keyLocation };

  if (urlList.length === 0) {
    return {
      ...base,
      ok: false,
      status: null,
      statusText: "No same-host URLs to submit",
      submitted: 0,
    };
  }

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
      },
      body: JSON.stringify({
        host,
        key: site.indexNowKey,
        keyLocation,
        urlList,
      }),
    });

    return {
      ...base,
      // 200 OK and 202 Accepted are both success per the spec.
      ok: res.ok,
      status: res.status,
      statusText: res.statusText,
      submitted: res.ok ? urlList.length : 0,
    };
  } catch (err) {
    return {
      ...base,
      ok: false,
      status: null,
      statusText: "Request failed",
      submitted: 0,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
