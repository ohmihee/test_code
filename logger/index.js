import express from "express";
import log from "./config/logger.js";

const app = express();

() => {
  if (type === "test") {
    const dotenv = require("dotenv");
  }
};

process.on("SIGINT", () => {
  console.log("bye");
  process.exit();
});

try {
  app.listen(3001, () => {
    log.info("server start 3001 💥");
    //log.error("server error");
    //throw new Error();
  });
} catch (e) {
  log.error(e);
}
