import { validateName } from "../utils/file.js";
import { copyTemplate } from "./copyTemplate.js";
import { installDependencies } from "./installDependencies.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createProject(projectName) {
  if (!projectName) {
    console.error("Error: No project name provided.");
    process.exit(1);
  }

  const projectPath = path.join(process.cwd(), projectName);

  try {
    await fs.mkdir(projectPath);
  } catch (err) {
    console.error("Error: Folder already exists or cannot be created.");
    process.exit(1);
  }

  await copyTemplate(projectPath);
  await installDependencies(projectPath);

  console.log(`\n✔ Project created successfully`);
  console.log(`👉 cd ${projectName}`);
  console.log(`👉 npm run dev\n`);
}
