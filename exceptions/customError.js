class CustomError extends Error {
  constructor(message, staatusCode = 500) {
    super(message);
    this.staatusCode = staatusCode;
    this.name = "Custom Error";
  }
}

module.exports = CustomError;
