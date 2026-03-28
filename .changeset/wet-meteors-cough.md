---
"@ehildt/ckir-helpers": patch
---

Fix ESM export by removing `".": null` from package.json exports. This resolves ERR_PACKAGE_PATH_NOT_EXPORTED error in Node.js v24+.
