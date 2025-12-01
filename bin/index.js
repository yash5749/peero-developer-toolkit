#!/usr/bin/env node

import { createProject } from "../src/actions/createProject.js";

const args = process.argv.slice(2);
const projectName = args[0];

createProject(projectName);
