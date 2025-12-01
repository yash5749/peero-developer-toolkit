import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyRecursive(src, dest, projectName) {
  await fs.mkdir(dest, { recursive: true });

  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);

    // rename package.json.template → package.json
    let destName = entry.name === "package.json.template"
      ? "package.json"
      : entry.name;

    const destPath = path.join(dest, destName);

    if (entry.isDirectory()) {
      await copyRecursive(srcPath, destPath, projectName);
    } else {
      let content = await fs.readFile(srcPath, "utf-8");
      content = content.replace(/{{projectName}}/g, projectName);

      await fs.writeFile(destPath, content);
    }
  }
}

export async function copyTemplate(projectPath) {
  const templatePath = path.join(__dirname, "../templates/default");
  const projectName = path.basename(projectPath);

  try {
    // COPY ALL FILES
    await copyRecursive(templatePath, projectPath, projectName);

    // CREATE .env FROM .env.example
    const examplePath = path.join(projectPath, ".env.example");
    const envPath = path.join(projectPath, ".env");

    // THIS MUST EXIST
    const exampleContent = await fs.readFile(examplePath, "utf-8");

    const finalContent = exampleContent.replace(/{{projectName}}/g, projectName);

    await fs.writeFile(envPath, finalContent);

  } catch (err) {
    console.error("Error copying template:", err);
    process.exit(1);
  }
}
