const writeXlsxFile = require("write-excel-file/node");
const fs = require("fs");

const HEADER_ROW = [
  {
    value: "Name",
    fontWeight: "bold",
  },
  {
    value: "Birth",
    fontWeight: "bold",
  },
  {
    value: "phone",
    fontWeight: "bold",
  },
  {
    value: "region",
    fontWeight: "bold",
  },
];

const DATA_ROW_1 = [
  // "Name"
  {
    type: String,
    value: "oh",
  },

  // "Birth"
  {
    type: Date,
    value: new Date(),
    format: "mm/dd/yyyy",
  },

  // "Phone"
  {
    type: Number,
    value: 1012345678,
  },

  // "Region"
  {
    type: String,
    value: "Seoul",
  },
];

const data = [HEADER_ROW, DATA_ROW_1];

const makeExcel = async () => {
  if (!fs.existsSync("./excel")) {
    // excel 폴더가 존재하지 않는 경우 excel 폴더를 생성한다.
    fs.mkdirSync("./excel");
  }
  await writeXlsxFile(data, {
    filePath: "./excel/member.xlsx",
  });
};

makeExcel();
