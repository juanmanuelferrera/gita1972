export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const key = "gita1972/audio" + decodeURIComponent(url.pathname);
    const download = url.searchParams.has("dl");

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
          "Access-Control-Allow-Headers": "Range",
        },
      });
    }

    // Parse Range header into R2 range object
    const rangeHeader = request.headers.get("range");
    let range;
    if (rangeHeader) {
      const match = rangeHeader.match(/bytes=(\d+)-(\d*)/);
      if (match) {
        const offset = parseInt(match[1]);
        if (match[2]) {
          range = { offset, length: parseInt(match[2]) - offset + 1 };
        } else {
          range = { offset };
        }
      }
    }

    const object = await env.BUCKET.get(key, range ? { range } : {});

    if (!object) {
      return new Response("Not found", { status: 404 });
    }

    const headers = new Headers();
    headers.set("Content-Type", "audio/mpeg");
    headers.set("Accept-Ranges", "bytes");
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Cache-Control", "public, max-age=31536000");
    if (download) {
      const filename = url.pathname.split("/").pop();
      headers.set("Content-Disposition", `attachment; filename="${filename}"`);
    }

    let status = 200;
    if (range && object.range) {
      const r = object.range;
      headers.set("Content-Range", `bytes ${r.offset}-${r.offset + r.length - 1}/${object.size}`);
      headers.set("Content-Length", r.length);
      status = 206;
    } else {
      headers.set("Content-Length", object.size);
    }

    return new Response(object.body, { status, headers });
  },
};
