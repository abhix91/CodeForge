const HttpStatus = require("../utils/statusCodes");

class AppError extends Error {
  constructor({ name, message }) {
    const statusCodes = HttpStatus[name];

    super(message);

    this.statusCodes = statusCodes;
    this.message = message;
  }
}

module.exports = AppError;
