## Description

Please describe the changes and enhancements made to the edge proxy worker.

---

## Security and Verification Checklist

- [ ] Zero memory buffering (readable streams piped directly).
- [ ] Protocol enforcement (HTTPS required).
- [ ] SSRF defenses and private IP validation preserved.
- [ ] Tested locally using Wrangler dev.
