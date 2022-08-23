import { createRequire } from "module";
const require = createRequire(import.meta.url);

const _ = require("lodash");

const languages = ["c", "java", "python", "rust", "go"];

const newArr = _.difference(languages, ["c", "rust"]);

console.log(newArr);
// [ 'java', 'python', 'go' ]

const objInArr = [
  { region: "seoul" },
  { region: "tokyo" },
  { region: "london" },
  { region: "la" },
];

const filteredRegion = _.filter(objInArr, function (ele) {
  return ele.region !== "tokyo";
});

console.log(filteredRegion);

const filters = objInArr.filter((ele) => ele.region !== "tokyo");
console.log(filters);
