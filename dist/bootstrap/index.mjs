import Joi from 'joi';
import { ValidationPipe } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { DocumentBuilder } from '@nestjs/swagger';

// src/bootstrap/app-config.schema.ts
var AppConfigSchema = Joi.object({
  printConfig: Joi.boolean().required(),
  enableSwagger: Joi.boolean().required(),
  bodyLimit: Joi.number().min(1).required(),
  address: Joi.string().ip({ version: ["ipv4", "ipv6"] }).required(),
  port: Joi.number().integer().min(1).max(65535).required(),
  nodeEnv: Joi.string().valid("development", "production", "test", "local").required(),
  logLevel: Joi.array().items(Joi.string().valid("warn", "error", "debug", "log", "verbose", "fatal")).default(["warn", "error", "debug", "log", "verbose", "fatal"]),
  cors: Joi.object({
    origin: Joi.string().optional(),
    methods: Joi.string().optional(),
    preflightContinue: Joi.boolean().optional(),
    optionsSuccessStatus: Joi.number().optional(),
    credentials: Joi.boolean().optional(),
    allowedHeaders: Joi.string().allow(null).optional()
  }).optional()
});

// src/bootstrap/bootstrap.constants.ts
var API_DOCS = "api-docs";
var API_DOCS_JSON = "api-docs-json";
var DEFAULT_BODY_LIMIT = 16777216;
var DEFAULT_LOG_LEVELS = ["warn", "error", "debug", "log", "verbose", "fatal"];
var getBodyLimit = (value) => {
  if (value == null) return DEFAULT_BODY_LIMIT;
  const parsed = parseInt(value, 10);
  return Number.isNaN(parsed) ? DEFAULT_BODY_LIMIT : parsed;
};
var getLogLevel = (value) => {
  if (!value) return DEFAULT_LOG_LEVELS;
  return value.split(",").filter(Boolean);
};
var VALIDATION_PIPE = new ValidationPipe({
  whitelist: true,
  transform: true,
  forbidUnknownValues: true,
  forbidNonWhitelisted: true
});

// src/bootstrap/log-config-object.helper.ts
function logConfigObject(logger, factory, printConfig = false) {
  if (printConfig)
    logger.log(Object.keys(factory).reduce((obj, key) => Object.assign(obj, { [key.slice(1)]: factory[key] }), {}));
}

// src/bootstrap/log-server-path.helper.ts
function logServerPath(logger, appConfig) {
  logger.log(`http://localhost:${appConfig.port}`, "REST API");
}

// src/bootstrap/log-swagger-path.helper.ts
function logSwaggerPath(logger, appConfig) {
  if (!appConfig.enableSwagger) return;
  const baseUrl = `http://localhost:${appConfig.port}`;
  logger.warn(`${baseUrl}/${API_DOCS_JSON}`, "Swagger JSON");
  logger.warn(`${baseUrl}/${API_DOCS}`, "Swagger UI");
}
function readPackageJsonFromRoot() {
  const rootPath = process.cwd();
  const packageJsonPath = path.join(rootPath, "package.json");
  const fileContent = fs.readFileSync(packageJsonPath, "utf8");
  return JSON.parse(fileContent);
}
var PACKAGE_JSON = readPackageJsonFromRoot();
var SWAGGER_DOCUMENT = new DocumentBuilder().setTitle(PACKAGE_JSON.name.toUpperCase()).setDescription(PACKAGE_JSON.description).setVersion(PACKAGE_JSON.version).build();

export { API_DOCS, API_DOCS_JSON, AppConfigSchema, DEFAULT_BODY_LIMIT, DEFAULT_LOG_LEVELS, SWAGGER_DOCUMENT, VALIDATION_PIPE, getBodyLimit, getLogLevel, logConfigObject, logServerPath, logSwaggerPath, readPackageJsonFromRoot };
