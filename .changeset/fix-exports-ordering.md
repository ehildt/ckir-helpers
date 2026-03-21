---
"@ehildt/ckir-helpers": patch
---

Fix exports field ordering to prioritize types before import

Reordered the exports conditions in package.json so that "types" comes before "import" for all subpath exports. This fixes TypeScript module resolution issues when using `node16`, `nodenext`, or `bundler` moduleResolution settings.
