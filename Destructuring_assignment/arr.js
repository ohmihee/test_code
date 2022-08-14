// const numbers = ["one", "two", "three"];
// const [a, b, c] = numbers;
// console.log(`one: ${a} | two: ${b} | three: ${c}`);

// let a, b;
// [a, b] = [1, 2];
// console.log(`a: ${a} | b: ${b}`);

// let a, b;
// [a = 1, b = 2, c = 3] = ["one", "two"];
// console.log(`a: ${a} | b: ${b} | c: ${c}`);

// let a = 1;
// let b = 2;

// console.log(`a: ${a} | b: ${b}`);

// [a, b] = [b, a];

// console.log(`a: ${a} | b: ${b}`);

// const arr = () => {
//   return [1, 2, 3];
// };

// let one, two, three;

// [one, , three] = arr();

// console.log(`one: ${one} | two: ${two} | three: ${three}`);

const numbers = [1, 2, 3, 4, 5, 6];
const [one, ...rest] = numbers;

console.log(`one: ${one} | rest: ${rest}`);
console.log(rest);
