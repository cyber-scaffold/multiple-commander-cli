#!/usr/bin/env node
require("./utils/initial");
const { program } = require("commander");
const json = require("@/package.json");


program
  .usage("")
  .version(json.version);

program
  .command("")
  .description("")
  .action(require("@/actions/index"));

program.parse(process.argv);


