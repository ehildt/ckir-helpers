# Bootstrap

Bootstrap utilities for NestJS applications.

## Constants

### API_DOCS

Swagger UI path constant.

```typescript
export const API_DOCS = "api-docs";
```

### API_DOCS_JSON

Swagger JSON endpoint path constant.

```typescript
export const API_DOCS_JSON = "api-docs-json";
```

### DEFAULT_BODY_LIMIT

Default body limit for request parsing (16777216 bytes / 16MB).

```typescript
export const DEFAULT_BODY_LIMIT = 16777216;
```

### DEFAULT_LOG_LEVELS

Default NestJS log levels array.

```typescript
export const DEFAULT_LOG_LEVELS: Array<LogLevel> = [
  "warn",
  "error",
  "debug",
  "log",
  "verbose",
  "fatal",
];
```

---

## Functions

### getBodyLimit

Parses a body limit value from an environment variable string. Returns the default if the value is null/undefined or cannot be parsed.

```typescript
export const getBodyLimit = (value?: string | null): number;
```

**Parameters:**

- `value` - Environment variable value (optional)

**Returns:** Parsed integer or DEFAULT_BODY_LIMIT

---

### getLogLevel

Parses a comma-separated string of log levels into a NestJS LogLevel array.

```typescript
export const getLogLevel = (value?: string): Array<LogLevel>;
```

**Parameters:**

- `value` - Comma-separated log levels (e.g., "error,warn,log")

**Returns:** Array of LogLevel values, or DEFAULT_LOG_LEVELS if value is falsy

---

### logConfigObject

Logs configuration object keys if printConfig is enabled. Strips the leading underscore from environment variable keys.

```typescript
export function logConfigObject(
  logger: Logger,
  factory: Record<string, unknown>,
  printConfig = false
): void;
```

**Parameters:**

- `logger` - NestJS Logger instance
- `factory` - Object with environment variable keys (e.g., `{ _port: 3000 }`)
- `printConfig` - Whether to actually log the config

---

### logServerPath

Logs the server URL with a "REST API" label.

```typescript
export function logServerPath(logger: Logger, appConfig: AppConfig): void;
```

**Parameters:**

- `logger` - NestJS Logger instance
- `appConfig` - Application configuration object

---

### logSwaggerPath

Logs the Swagger JSON and UI paths if swagger is enabled in appConfig.

```typescript
export function logSwaggerPath(logger: Logger, appConfig: AppConfig): void;
```

**Parameters:**

- `logger` - NestJS Logger instance
- `appConfig` - Application configuration object

---

### readPackageJsonFromRoot

Reads and parses package.json from the current working directory.

```typescript
export function readPackageJsonFromRoot(): PackageConfig;
```

**Returns:** Object containing `name`, `version`, and `description`

---

## Pre-built Instances

### VALIDATION_PIPE

Pre-configured NestJS ValidationPipe with the following options:

```typescript
export const VALIDATION_PIPE = new ValidationPipe({
  whitelist: true,
  transform: true,
  forbidUnknownValues: true,
  forbidNonWhitelisted: true,
});
```

---

### SWAGGER_DOCUMENT

Pre-built Swagger document using values from package.json:

```typescript
export const SWAGGER_DOCUMENT = new DocumentBuilder()
  .setTitle(PACKAGE_JSON.name.toUpperCase())
  .setDescription(PACKAGE_JSON.description)
  .setVersion(PACKAGE_JSON.version)
  .build();
```

---

## Types

### AppConfig

```typescript
interface AppConfig {
  port: number;
  nodeEnv: string;
  address: string;
  printConfig: boolean;
  bodyLimit: number;
  enableSwagger: boolean;
  logLevel?: Array<LogLevel>;
  cors?: {
    origin?: string;
    methods?: string;
    preflightContinue?: boolean;
    optionsSuccessStatus?: number;
    credentials?: boolean;
    allowedHeaders?: string;
  };
}
```

---

### AppConfigSchema

Joi validation schema for AppConfig with the following rules:

| Field           | Validation                                                  |
| --------------- | ----------------------------------------------------------- |
| `printConfig`   | Required boolean                                            |
| `enableSwagger` | Required boolean                                            |
| `bodyLimit`     | Required number, minimum 1                                  |
| `address`       | Required valid IPv4 or IPv6 address                         |
| `port`          | Required integer, 1-65535                                   |
| `nodeEnv`       | Required, one of: development, production, test, local      |
| `logLevel`      | Optional array of log level strings, defaults to all levels |
| `cors`          | Optional object with CORS configuration                     |
