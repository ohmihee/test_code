import { createRequire } from "module";
const require = createRequire(import.meta.url);

const _ = require("lodash");

const languages = ["c", "java", "python", "rust", "go"];

const newArr = _.without(languages, "c");

console.log(newArr);
