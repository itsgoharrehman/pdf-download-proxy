# Contributing Guidelines

Thank you for contributing to pdf-download-proxy. We welcome contributions that improve streaming throughput, enhance header validation, or optimize edge performance.

---

## Architectural Principles

1. **Zero Memory Buffering**: Never buffer entire file streams into `ArrayBuffer` or memory arrays. Always pipe the `response.body` stream directly to preserve unbounded file transfer capability.
2. **Strict SSRF Checks**: Any changes to target URL parsing must preserve loopback and private subnet request blocking.
3. **No Heavy Dependencies**: Keep the worker pure vanilla JavaScript using standard Web Fetch and Service Worker APIs.

---

## Code of Conduct

All contributors and participants must adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Pull Request Guidelines

1. Test changes locally using `npm run dev`.
2. Confirm that binary stream piping is preserved without buffering.
3. Open a Pull Request targeting the `main` branch and complete the security checklist.
