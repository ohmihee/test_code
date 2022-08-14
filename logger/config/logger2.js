import winston from "winston";
import wistonDaily from "winston-daily-rotate-file";

const { combine, printf, label, timestamp } = winston.format;

const logFormat = printf((level, message, label, timestamp) => {
  return `${timestamp} [${label}] ${level} : ${timestamp}`;
});

const logDir = "logs";

const logger = winston.createLogger({
  format: combine(),
  transports: [],
  exceptionHandlers: [],
});

export default logger;
