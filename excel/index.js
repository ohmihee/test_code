const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");

// readXlsxFile("./member.xlsx").then((rows) => {
//   console.log(rows);
//   let jsonData = [];
//   for (let i = 0; i < rows.length; i++) {
//     if (i !== 0) {
//       const inputData = {
//         number: rows[i][0],
//         name: rows[i][1],
//         team: rows[i][2],
//         phone: rows[i][3],
//       };
//       jsonData.push(inputData);
//     }
//   }
//   const jsonDataToString = JSON.stringify(jsonData);
//   fs.writeFileSync("./dataToJSon.json", jsonDataToString);
// });

readXlsxFile("./member.xlsx", { sheet: 1 }).then((rows) => {
  let jsonData = [];
  console.log(rows);
  //   for (let i = 0; i < rows.length; i++) {
  //     if (i !== 0) {
  //       const inputData = {
  //         number: rows[i][0],
  //         name: rows[i][1],
  //         team: rows[i][2],
  //         phone: rows[i][3],
  //       };
  //       const jsonData = JSON.stringify(inputData);
  //       if (!fs.existsSync("./json")) {
  //         // json 폴더가 존재하지 않는 경우 json 폴더를 생성한다.
  //         fs.mkdirSync("./json");
  //       }
  //       fs.writeFileSync(`./json/member${rows[i][0]}.json`, jsonData);
  //     }
  //   }
});
