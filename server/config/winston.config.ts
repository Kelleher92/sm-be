import * as appRoot from 'app-root-path';
import * as winston from 'winston';

// define the custom settings for each transport (file, console)
const options = {
  file: {
    level: 'silly',
    filename: `${appRoot}/logs/combined.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
  error: {
    filename: `${appRoot}/logs/errors.log`,
    level: 'info',
  },
};

// instantiate a new Winston Logger with the settings defined above
export const winstonLogger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
    new winston.transports.File(options.error),
  ],
  exceptionHandlers: [
    new winston.transports.Console(), // ({ json: false, timestamp: true }),
    new winston.transports.File({ filename: `${appRoot}/logs/errors.log` }),  // json: false
  ],
  exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
// logger.stream = {
//   write: (message: string, encoding: any) => {
//     logger.info(message);   // use the 'info' log level so the output will be picked up by both transports (file and console)
//   },
// };

export class WinstonStream {
  write(text: string) {
    winstonLogger.info(text);
  }
}
