//__dirname:path to current directory
//__filename:file name
//require:function to use moules
//module:info about current module
//process:info about the environment where the program is being executed

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
