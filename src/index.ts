import { jsonMapper } from "./converters/jsonMapper.js";
import { MvnoResponse } from "./types/mvnoResponse.js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, "data", "mvno_rest_spec.json");
const json_data = readFileSync(jsonPath, "utf8");
const mvnoResponse: MvnoResponse = JSON.parse(json_data);
const internalApiFormat = jsonMapper(mvnoResponse);

console.log("Transformed Internal Response", internalApiFormat);
