// const numbers = { one: 1, two: 2 };
// const { one, two } = numbers;

// console.log(`one: ${one} | two: ${two}`);
// // one: 1 | two: 2

// const { one: number1, two: number2 } = numbers;
// console.log(`number1: ${number1} | number2: ${number2}`);
// // number1: 1 | number2: 2

// const me = { myName: "me", hobby: "sleep" };
// const { myName = "hee", hobby = "eat", like = "snack" } = me;

// console.log(`name: ${myName} | hobby: ${hobby} | like: ${like}`);
// // name: me | hobby: sleep | like: snack

const me = { myName: "me", hobby: "sleep" };
const { myName: newName = "hee", hobby = "eat", like = "snack" } = me;

console.log(`newName: ${newName} | hobby: ${hobby} | like: ${like}`);
// newName: me | hobby: sleep | like: snack
