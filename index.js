const { program } = require("commander");
require("@cyber-tools/cli-utils/initial");
require("module-alias").addAlias("@", __dirname);
const json = require("@/package.json");


program
  .usage(json.name)
  .version(json.version);

program
  .command("")
  .description("")
  .action(require("@/actions/index"));

program.parse(process.argv);


