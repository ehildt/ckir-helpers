---
"@ehildt/ckir-helpers": minor
---

Add getByteSizeEnv helper for parsing byte size environment variables.

- Add getByteSizeEnv function with support for B, KB, MB, GB, TB units
- Support decimal values (e.g. 1.5MB)
- Handle case insensitivity
- Add graceful fallback handling
- Fix getBooleanEnv to handle case insensitivity
