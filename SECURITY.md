# Security Policy

## Supported Versions

| Version | Supported | Security Maintenance |
| :--- | :--- | :--- |
| 1.0.x | Yes | Active maintenance |
| < 1.0.0 | No | Deprecated |

---

## Vulnerability Disclosure Protocol

If you identify a security defect, open-proxy vulnerability, or Server-Side Request Forgery (SSRF) flaw in this repository, please disclose it privately:

* **Security Contact**: goharrehmanfsd260@gmail.com
* **Repository Maintainer**: Gohar Rehman (@itsgoharrehman)
* **Response SLA**: Acknowledgment within 48 hours; resolution plan within 5 business days.

---

## Proxy Security Invariants

### 1. Protocol Validation
* The proxy must strictly enforce `https://` schemes on target destination URLs.
* Plaintext `http://`, `file://`, `gopher://`, and internal schemes are forbidden.

### 2. SSRF Mitigation
* The proxy must not resolve or fetch addresses within local loopback or private IPv4/IPv6 ranges (`127.0.0.1`, `localhost`, `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`, `169.254.169.254`).

### 3. Zero Memory Buffering
* All responses must pipe directly using standard `ReadableStream` piping. Workers must not buffer binary file bodies into memory to prevent denial-of-service via resource exhaustion.
