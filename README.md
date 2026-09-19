# pdf-download-proxy

A lightweight Cloudflare Worker reverse proxy designed to enable cross-origin fetching and forced downloads of PDF documents. Solves browser inline PDF rendering restrictions and cross-origin resource sharing (CORS) header limitations by rewriting HTTP response headers at the edge.

## Architecture and Stack

* **Runtime**: Cloudflare Workers (V8 JavaScript runtime)
* **Standard**: Service Worker API / Fetch API
* **Edge Network**: Cloudflare Global Anycast Network

## Key Features

* **Forced Content-Disposition**: Appends `Content-Disposition: attachment; filename="..."` headers to enforce instant file download dialogs.
* **Wildcard CORS Management**: Injects `Access-Control-Allow-Origin: *` and standard preflight handling.
* **Stream Piping**: Streams binary PDF chunks directly from source to client without buffering in worker memory.

## Getting Started

### Prerequisites
* Node.js v18+
* Cloudflare Wrangler CLI (`npm install -g wrangler`)

### Deployment
```bash
git clone https://github.com/itsgoharrehman/pdf-download-proxy.git
cd pdf-download-proxy
wrangler login
wrangler deploy
```

### Usage
```text
https://pdf-download-proxy.<your-subdomain>.workers.dev/?url=https://example.com/document.pdf&filename=custom.pdf
```

## Security Policy

Report any proxy abuse or security issues to `goharrehmanfsd260@gmail.com`.

## Maintainer

* **Gohar Rehman**
* GitHub: [@itsgoharrehman](https://github.com/itsgoharrehman)
* Email: `goharrehmanfsd260@gmail.com`
* Website: [itsgoharrehman.netlify.app](https://itsgoharrehman.netlify.app/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
