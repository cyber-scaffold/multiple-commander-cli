#!/usr/bin/env node
const path=require("path");

require("@babel/register") ({
  exclude:/node_modules/,
  presets: [ 
    require.resolve("@babel/preset-env")
  ],
  plugins:[
    [require.resolve("@babel/plugin-transform-runtime")],
    [require.resolve("babel-plugin-module-resolver"), {
      root: [path.resolve(__dirname,"../")],
      alias: {
        "@": path.resolve(__dirname,"../"),
      }
    }]
  ]
});

require("@cyber-tools/cli-utils/initial");
require("../index");