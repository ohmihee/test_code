const test = {
  test1: { name: "tset1" },
  test2: function () {
    return this.test1;
  },
  test3: this.test1,
};

console.log(test.test2());
console.log(test.test3);
