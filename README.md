# PDF Download Proxy

A lightweight, high-performance [Cloudflare Worker](https://workers.cloudflare.com/) that acts as a CORS proxy to allow cross-origin fetching and forced downloads of PDF files (and other document types) directly from web applications.

## 🚀 Features

- **CORS Support**: Adds `Access-Control-Allow-Origin: *` to enable standard browser `fetch` requests across origins.
- **Forced Downloads**: Sets `Content-Disposition: attachment` to trigger a file download dialog in the browser instead of inline rendering.
- **Content-Type Preservation**: Preserves original header `Content-Type` or defaults to `application/pdf`.
- **Zero-Server Overhead**: Built for Cloudflare Workers—serverless, edge-computed, fast, and free to host.

## 🛠️ Usage

### API Endpoint

```
GET https://<your-worker-subdomain>.workers.dev/?url=<ENCODED_TARGET_URL>
```

#### Query Parameters

| Parameter | Type   | Required | Description |
| --------- | ------ | -------- | ----------- |
| `url`     | String | Yes      | The URL-encoded target file link to proxy and download. |

---

### Code Examples

#### JavaScript (Fetch & Trigger Download)

```javascript
const proxyUrl = "https://your-worker.workers.dev/?url=";
const pdfUrl = encodeURIComponent("https://example.com/sample.pdf");

// Option 1: Direct link in HTML
const downloadLink = document.createElement("a");
downloadLink.href = proxyUrl + pdfUrl;
downloadLink.download = "document.pdf";
document.body.appendChild(downloadLink);
downloadLink.click();
```

#### cURL Command

```bash
curl -i "https://your-worker.workers.dev/?url=https%3A%2F%2Fexample.com%2Fsample.pdf"
```

---

## ⚡ Deployment

### Method 1: Cloudflare Dashboard (Quickest)

1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** > **Create Application** > **Create Worker**.
3. Name your worker (e.g., `pdf-download-proxy`).
4. Click **Deploy**.
5. Click **Edit Code**, replace the contents of `index.js` with [worker.js](file:///c:/Users/Gohar%20Rehman/Desktop/pdf-download-proxy/worker.js), and click **Save and Deploy**.

### Method 2: Wrangler CLI

1. Clone or download this repository.
2. Install Wrangler if you haven't already:
   ```bash
   npm install -g wrangler
   ```
3. Authenticate with Cloudflare:
   ```bash
   wrangler login
   ```
4. Deploy the worker:
   ```bash
   npx wrangler deploy worker.js --name pdf-download-proxy
   ```

---

## 🛡️ Customization & Security

- **Restricting Origins**: By default, `Access-Control-Allow-Origin` is set to `*`. If you want to restrict proxy access to your specific domain only, update [worker.js](file:///c:/Users/Gohar%20Rehman/Desktop/pdf-download-proxy/worker.js):
  ```javascript
  'Access-Control-Allow-Origin': 'https://yourwebsite.com'
  ```

---

## 📄 License

This project is licensed under the MIT License