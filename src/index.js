import { program } from "commander";
import {name,version} from "@@/package.json";

program
  .usage(name)
  .version(version);

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
  .action(require("@/actions/index").default);

program.parse();


