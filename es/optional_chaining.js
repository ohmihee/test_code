const users = [
  {
    name: "user1",
    like: {
      what: "snack",
      why: "delicliout",
    },
  },
  {
    name: "user2",
    like: {
      what: "cake",
      why: "delicliout",
    },
  },
  {
    name: "user3",
    like: {
      what: "milk",
      why: "delicliout",
    },
  },
  {
    name: "user3",
  },
];

const whatLike = (ele) => {
  return ele.like?.what === undefined ? "anything" : ele.like.what;
  // 옵셔널 체이닝을 추가하여 주었다.
};

const likes = users.map((ele) => {
  return whatLike(ele);
});

console.log(likes);
