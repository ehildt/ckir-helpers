import * as fs from "fs";
import * as path from "path";

interface PackageConfig {
  name: string;
  version: string;
  description: string;
}

export function readPackageJsonFromRoot(): PackageConfig {
  const rootPath = process.cwd();
  const packageJsonPath = path.join(rootPath, "package.json");
  const fileContent = fs.readFileSync(packageJsonPath, "utf8");
  return JSON.parse(fileContent) as PackageConfig;
}
