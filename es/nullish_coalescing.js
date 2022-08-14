const myName = null;
console.log(myName);
// null

// const whatName = () => {
//   console.log(true || "me");
//   // true
//   console.log("my" || "me");
//   // my
//   console.log(2 || "me");
//   // 2
//   console.log(false || "me");
//   // me
//   console.log(undefined || "me");
//   // me
//   console.log(myName || "me");
//   // me
//   console.log(0 || "me");
//   // me
// };

// const whatName = () => {
//   console.log(true && "me");
//   // me
//   console.log("my" && "me");
//   // me
//   console.log(2 && "me");
//   // me
//   console.log(false && "me");
//   // false
//   console.log(undefined && "me");
//   // undefined
//   console.log(myName && "me");
//   // null
//   console.log(0 && "me");
//   // 0
// };

const whatName = () => {
  console.log(true ?? "me");
  // true
  console.log("my" ?? "me");
  // my
  console.log(2 ?? "me");
  // 2
  console.log(false ?? "me");
  // false
  console.log(undefined ?? "me");
  // me
  console.log(myName ?? "me");
  // me
  console.log(0 ?? "me");
  // 0
};

whatName();
