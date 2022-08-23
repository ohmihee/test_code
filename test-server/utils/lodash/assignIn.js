import { createRequire } from "module";
const require = createRequire(import.meta.url);

const _ = require("lodash");

const obj1 = { name: "me", age: "27", want: "money" };
const obj2 = { like: "snack", hobby: "sleep" };

console.log(_.assignIn({}, obj1, obj2));
// { name: 'me', age: '27', want: 'money', like: 'snack', hobby: 'sleep' }
