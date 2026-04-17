export { findUp } from '../find-up/index.js';
import { LogLevel, ValidationPipe, Logger } from '@nestjs/common';
import Joi from 'joi';
import * as _nestjs_swagger from '@nestjs/swagger';

type AppConfig = {
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
    health?: {
        memoryHeap?: number;
        memoryRSS?: number;
        diskPath?: string;
        diskThresholdPercent?: number;
    };
};

declare const AppConfigSchema: Joi.ObjectSchema<AppConfig>;

declare const API_DOCS = "api-docs";
declare const API_DOCS_JSON = "api-docs-json";
declare const DEFAULT_BODY_LIMIT = 16777216;
declare const DEFAULT_LOG_LEVELS: Array<LogLevel>;
declare const getBodyLimit: (value?: string | null) => number;
declare const getLogLevel: (value?: string) => Array<LogLevel>;

declare const VALIDATION_PIPE: ValidationPipe;

declare function logConfigObject(logger: Logger, factory: Record<string, unknown>, printConfig?: boolean): void;

declare function logServerPath(logger: Logger, appConfig: AppConfig): void;

declare function logSwaggerPath(logger: Logger, appConfig: AppConfig): void;

interface PackageConfig {
    name: string;
    version: string;
    description: string;
}
declare function readPackageJsonFromRoot(filename?: string, startDir?: string): PackageConfig;

declare const SWAGGER_DOCUMENT: Omit<_nestjs_swagger.OpenAPIObject, "paths">;

export { API_DOCS, API_DOCS_JSON, type AppConfig, AppConfigSchema, DEFAULT_BODY_LIMIT, DEFAULT_LOG_LEVELS, SWAGGER_DOCUMENT, VALIDATION_PIPE, getBodyLimit, getLogLevel, logConfigObject, logServerPath, logSwaggerPath, readPackageJsonFromRoot };
