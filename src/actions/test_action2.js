import {Argument,Option} from "commander";

export const test_action_argument2=new Argument("<actions>","动作类型描述").choices(["init","info"]);
export const test_action_option2=new Option("-t,--test_option <string>").default("test_option_value");

export async function test_action2(action,{test_option}){
  console.log("action",action);
  console.log("test_option",test_option);
};