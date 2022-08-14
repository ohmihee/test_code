const str = "    hiiii  ";

console.log(`${str.trimStart()} length: ${str.trimStart().length}`);
// hiiii   length: 7

console.log(`${str.trimEnd()} length: ${str.trimEnd().length}`);
//     hiiii length: 9

console.log(`${str.trim()} length: ${str.trim().length}`);
// hiiii length: 5
