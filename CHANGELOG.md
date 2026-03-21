# @ehildt/ckir-helpers

## 1.2.2

### Patch Changes

- 6759329: improve README badges and add section headers

## 1.2.1

### Patch Changes

- 3d4f7bb: Fix exports field ordering to prioritize types before import

  Reordered the exports conditions in package.json so that "types" comes before "import" for all subpath exports. This fixes TypeScript module resolution issues when using `node16`, `nodenext`, or `bundler` moduleResolution settings.

## 1.2.0

### Minor Changes

- aac37f0: Enforce explicit import paths by blocking root and dist imports

### Patch Changes

- aac37f0: fixed explicit exporting path

## 1.1.0

### Minor Changes

- 85631ed: Enforce explicit import paths by blocking root and dist imports

## 1.0.1

### Patch Changes

- 3b911e2: Rename .wiki files to lowercase for consistency

## 1.0.0

### Major Changes

- aae714d: Initial release of ckir-helpers library

  Added:

  - bootstrap module with NestJS app configuration utilities
  - get-boolean-env for parsing boolean env vars
  - get-number-env for parsing numeric env vars
  - hash-payload for SHA-256/384/512 hashing
  - object-io with clone, isEmpty, merge, omit, pick utilities
  - text-to-lines for sentence splitting (Western + CJK punctuation)

  Documentation:

  - README.md with badges
  - Wiki documentation for all modules
  - depbadgerc.yml for automated badge generation
