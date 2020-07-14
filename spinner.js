const ora = require("ora");

exports.create = (message) => {
  if (global.spinner) {
    global.spinner.succeed();
  }
  global.spinner = ora(message).start();
};
