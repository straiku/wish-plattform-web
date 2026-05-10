import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'

const spaFallback = (request) => {
  const url = new URL(request.url)
  const hasExtension = /\.[a-zA-Z0-9]+$/.test(url.pathname)
  if (!hasExtension) {
    return mapRequestToAsset(new Request(`${url.origin}/index.html`, request))
  }
  return mapRequestToAsset(request)
}

export default {
  async fetch(request, env, ctx) {
    try {
      return await getAssetFromKV(
        { request, waitUntil: ctx.waitUntil.bind(ctx) },
        {
          mapRequestToAsset: spaFallback,
        }
      )
    } catch (e) {
      return new Response(`No encontrado: ${e.message}`, { status: 404 })
    }
  },
}
