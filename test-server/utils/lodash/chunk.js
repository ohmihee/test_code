import { createRequire } from "module";
const require = createRequire(import.meta.url);

const _ = require("lodash");

const myList = ["apple", "lemon", "banana", "mongo", "watermelon", "peach"];

const newArr = _.chunk(myList, 3);

console.log(newArr);
// [ [ 'apple', 'lemon', 'banana' ], [ 'mongo', 'watermelon', 'peach' ] ]
