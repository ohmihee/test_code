const age = (birth) => {
  return birth === 1996 ? "we are friends" : "we are not friedns";
};

const user1 = age(1996);
console.log(user1);
// we are friends

const user2 = age(2002);
console.log(user2);
// we are not friedns
