// Cloudflare Worker - CORS Proxy (FREE, No Size Limit!)
// Deploy at: https://workers.cloudflare.com/

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const url = new URL(request.url)
    const targetUrl = url.searchParams.get('url')

    if (!targetUrl) {
        return new Response('Missing url parameter', { status: 400 })
    }

    try {
        // Fetch the file
        const response = await fetch(targetUrl)

        // Return with CORS headers
        return new Response(response.body, {
            status: response.status,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Content-Type': response.headers.get('Content-Type') || 'application/pdf',
                'Content-Disposition': 'attachment'
            }
        })
    } catch (error) {
        return new Response(`Proxy error: ${error.message}`, { status: 502 })
    }
}
