# Home

A shared utility library providing helper functions for the CKIR project.

## Modules

| Module                                         | Description                                                           |
| ---------------------------------------------- | --------------------------------------------------------------------- |
| [Bootstrap](Bootstrap)                         | NestJS app configuration, validation pipeline, swagger setup, logging |
| [Environment Variables](Environment-Variables) | Parse environment variables as boolean or number values               |
| [Hash Payload](Hash-Payload)                   | Generate cryptographic hashes (SHA-256, SHA-384, SHA-512)             |
| [Object I/O](Object-IO)                        | Clone, merge, pick, omit, and check objects for emptiness             |
| [Text To Lines](Text-To-Lines)                 | Split text into sentences (supports Western and CJK punctuation)      |

## Installation

```bash
npm install @ehildt/ckir-helpers
```

## Peer Dependencies

This library requires the following peer dependencies:

```bash
npm install @nestjs/common @nestjs/swagger joi
```
