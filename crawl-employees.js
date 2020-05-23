//require('es6-promise').polyfill();
require("isomorphic-fetch");
const fs = require("fs");

//http://dummy.restapiexample.com/

exports.crawlEmployees = async function () {
  let isOk = true;
  try {
    const response = await fetch(
      "http://dummy.restapiexample.com/api/v1/employees"
    );
    let json = await response.json();
    let data = JSON.stringify(json.data);
    fs.writeFileSync("employees.json", data);
  } catch (err) {
    isOk = false;
    console.log(err);
  }
  return isOk;
};
