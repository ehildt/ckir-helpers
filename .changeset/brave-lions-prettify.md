---
'@ehildt/ckir-helpers': patch
---

fix: add prettier as a direct devDependency so `changeset version` can format the CHANGELOG in CI (pnpm 10 does not link binaries of auto-installed peer dependencies into `node_modules/.bin`)

Also: pin the pnpm version via `packageManager`, and update the GitHub Actions workflows to the same action versions used by ckir.io-visions (checkout v7, pnpm/action-setup v6, setup-node v7, codecov v7, upload-artifact v7, download-artifact v8, git-auto-commit v7), including a reusable `ci.yml` and a lockfile-sync step in the ncu-update workflow.
