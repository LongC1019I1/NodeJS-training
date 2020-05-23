const fs = require("fs");

exports.loadEmployees = function () {
  try {
    let data = fs.readFileSync("employees.json");
    return data;
  } catch (err) {
    console.log(err);
  }
  return null;
};
