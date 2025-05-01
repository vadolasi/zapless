import openapiTS, { astToString } from "openapi-typescript";

const jsonData = await Bun.file(new URL("../../../docs-evolution/openapi/openapi-v2.json", import.meta.url)).json()

for (const [pathKey, pathValue] of Object.entries(jsonData.paths)) {
  for (const [methodKey, methodValue] of Object.entries(pathValue as object)) {
    jsonData.paths[pathKey][methodKey].operationId = `${(methodValue as { operationId: string }).operationId}-${Math.random().toString(36).substring(2, 15)}`
  }
}

const ast = await openapiTS(jsonData);
const contents = astToString(ast);

Bun.file(new URL("./src/backend/evolution.d.ts", import.meta.url)).write(contents)
