import {program} from "commander";
import {name,version} from "@@/package.json";

import {test_action_argument1,test_action_option1,test_action1} from "@/actions/test_action1";
import {test_action_argument2,test_action_option2,test_action2} from "@/actions/test_action2";

program
  .usage(name)
  .version(version);

program
  .command("test1")
  .description("多类型测试命令1")
  .addArgument(test_action_argument1)
  .addOption(test_action_option1)
  .action(test_action1);

program
  .command("test2")
  .description("多类型测试命令2")
  .addArgument(test_action_argument2)
  .addOption(test_action_option2)
  .action(test_action2);

program.parse();


