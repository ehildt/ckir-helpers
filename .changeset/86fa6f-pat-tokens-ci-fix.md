---
"@ehildt/ckir-helpers": patch
---

Fixed CI/CD workflows across sibling projects:
- Added CICD_ACTIONS PAT token to ncu-update workflows for automated PR creation
- Added missing actions:read permissions to release workflows for artifact downloads