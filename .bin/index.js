#!/usr/bin/env node
require("@babel/register")({
  cwd:path.resolve(__dirname,"../")
});
require("@cyber-tools/cli-utils/initial");
require("../index");