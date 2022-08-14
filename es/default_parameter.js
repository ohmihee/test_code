const makeLatte = (shot = 1) => {
  return `milk1 + shot${shot}`;
};

const adult = makeLatte();
console.log(adult);
// milk1 + shot1
const child = makeLatte(0);
console.log(child);
// milk1 + shot0
const programmer = makeLatte(2);
console.log(programmer);
// milk1 + shot2
