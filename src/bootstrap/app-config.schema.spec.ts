import { AppConfigSchema } from "./app-config.schema.ts";

describe("AppConfigSchema", () => {
  it("validates a correct config", () => {
    const validConfig = {
      printConfig: true,
      enableSwagger: false,
      bodyLimit: 1024,
      address: "127.0.0.1",
      port: 3000,
      nodeEnv: "development",
      logLevel: ["debug"],
      cors: {
        origin: "https://example.com",
        methods: "GET,POST",
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true,
        allowedHeaders: "Authorization",
      },
    };

    const { error, value } = AppConfigSchema.validate(validConfig);
    expect(error).toBeUndefined();
    expect(value.address).toBe("127.0.0.1");
  });

  it("fails if required fields are missing", () => {
    const { error } = AppConfigSchema.validate({}, { abortEarly: false });
    expect(error).toBeDefined();

    const missingFields = error?.details.map((d) => d.path[0]);
    expect(missingFields).toContain("printConfig");
    expect(missingFields).toContain("enableSwagger");
  });

  it("fails if IP address is invalid", () => {
    const { error } = AppConfigSchema.validate({
      printConfig: true,
      enableSwagger: false,
      bodyLimit: 1024,
      address: "invalid-ip",
      port: 3000,
      nodeEnv: "development",
      logLevel: ["debug"],
    });
    expect(error).toBeDefined();
    expect(error?.details.some((d) => d.message.includes("address"))).toBe(true);
  });

  it("fails if port is out of range", () => {
    const { error } = AppConfigSchema.validate({
      printConfig: true,
      enableSwagger: false,
      bodyLimit: 1024,
      address: "127.0.0.1",
      port: 70000, // invalid port
      nodeEnv: "development",
      logLevel: ["debug"],
    });
    expect(error).toBeDefined();
    expect(error?.details.some((d) => d.message.includes("port"))).toBe(true);
  });
});
