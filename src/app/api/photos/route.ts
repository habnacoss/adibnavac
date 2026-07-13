import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  if (!url) return NextResponse.json({ photos: [] });
  console.log("URL: ", url);

  try {
    // Follow redirects (photos.app.goo.gl → photos.google.com/share/...)
    const res = await fetch(url, {
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "es-CO,es;q=0.8,en-US;q=0.5",
      },
    });
    

    const html = await res.text();

    // Google Photos embeds photo data in the HTML.
    // Photo thumbnails are served from lh3.googleusercontent.com.
    // They appear in the form: ["https://lh3.googleusercontent.com/...","...",width,height,...]
    const pattern =
      /https:\/\/lh3\.googleusercontent\.com\/[A-Za-z0-9\-_=]+/g;
    const found = html.match(pattern) ?? [];

    // Deduplicate and filter out tiny icons (keep only full photos)
    const seen = new Set<string>();
    const photos: string[] = [];
    for (const raw of found) {
      // Append =w800-h600 to get a reasonably sized thumbnail
      const base = raw.split("=")[0];
      if (!seen.has(base)) {
        seen.add(base);
        photos.push(base + "=w800");
      }
    }

    return NextResponse.json({ photos: photos.slice(0, 60) });
  } catch (err) {
    console.error("[photos API]", err);
    return NextResponse.json({ photos: [] });
  }
}
