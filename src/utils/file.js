import fs from "fs";

export function validateName(name) {
  const isValid = /^[a-zA-Z0-9-_]+$/.test(name);

  if (!name || !isValid) {
    console.error("❌ Invalid project name. Use only letters, numbers, - and _");
    process.exit(1);
  }

  if (fs.existsSync(name)) {
    console.error("❌ Folder already exists:", name);
    process.exit(1);
  }

  return true;
}
