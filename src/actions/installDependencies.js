import { spawn } from "child_process";

export async function installDependencies(projectPath) {
  console.log("\n📦 Installing dependencies...");

  const deps = [
    "express",
    "mongoose",
    "dotenv",
    "cors",
    "morgan",
    "bcryptjs",
    "jsonwebtoken",
    "express-async-handler"
  ];

  const devDeps = ["nodemon"];

  await runCommand("npm", ["install", ...deps], projectPath);
  await runCommand("npm", ["install", "-D", ...devDeps], projectPath);
}

function runCommand(cmd, args, cwd) {
  return new Promise((resolve, reject) => {
    const process = spawn(cmd, args, {
      cwd,
      stdio: "inherit",
      shell: true
    });

    process.on("close", (code) => {
      if (code !== 0) reject(new Error(`Command failed: ${cmd} ${args}`));
      else resolve();
    });
  });
}
