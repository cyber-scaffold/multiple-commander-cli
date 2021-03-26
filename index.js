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
  .requiredOption("-e, --env <string>", "环境变量",(value)=>{
    const allow_values=["test","prod"];
    if(allow_values.includes(value)){
      process.env.TRANSFORM_ENV=value;
    }else{
      console.log("参数env的值",value,"应该为",allow_values.join(","));
      process.exit(0);
    };
  })
  .action(require("@/actions/index"));

program.parse();


