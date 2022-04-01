import {program} from "commander";
import {name,version} from "@@/package.json";

import {create_config_file} from "@/actions/create_config_file";
import {test_command_argument,test_command_option,test_command} from "@/actions/test_command";

program
  .usage(name)
  .version(version)

program
  .command("init")
  .description("创建运行时配置文件")
  .action(create_config_file);

program
  .command("test")
  .description("这是测试命令")
  .addArgument(test_command_argument)
  .addOption(test_command_option)
  .action(test_command);

program.parse();





