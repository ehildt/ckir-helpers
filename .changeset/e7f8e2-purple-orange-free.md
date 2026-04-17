---
"@ehildt/ckir-helpers": minor
---

Add findUp helper and enhance readPackageJsonFromRoot

- Added `findUp()` helper function that recursively searches for a file by traversing up the directory tree
- Enhanced `readPackageJsonFromRoot()` to accept optional `filename` and `startDir` parameters for custom file discovery
- `readPackageJsonFromRoot()` now throws an error if the file is not found
- Updated exports to include the new `findUp` helper
