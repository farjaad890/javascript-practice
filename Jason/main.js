// const customer = require("./customer.json");
// console.log(customer.name);

const fs = require("fs");
const path = require("path");
//Read file through readFile asynchronus

// fs.readFile(
//   path.resolve(__dirname, "./customer.json"),
//   "utf8",
//   (error, data) => {
//     console.log(data);
//   }
// );

//Read file readFileSync synchronus

// let customer = fs.readFileSync(
//   path.resolve(__dirname, "./customer.json"),
//   "utf-8"
// );
// console.log(customer);
//-------------------------------------------------------------------------------------------------------------
const customer = {
  name: "zain",
  id: 1234,
};

function readFile(filePath, callback) {
  fs.readFile(filePath, "utf-8", (error, data) => {
    if (error) {
      callback("error reading file");
    } else {
      try {
        let customer = JSON.parse(data);
        callback(customer);
      } catch (error) {
        callback("Error parsing file");
      }
    }
    //console.log(error);
  });
}
function writeFile(filePath, data, callback) {
  fs.writeFile(filePath, JSON.stringify(data, null, 2), (error) => {
    if (error) {
      callback("error writing file");
    } else {
      callback("file successfull written");
    }
  });
}
function updateFile(filePath, customer) {
  readFile(filePath, function (data) {
    data.push(customer);
    writeFile(filePath, data, function (message) {
      console.log(message);
    });
  });
}
updateFile(path.resolve(__dirname, "./customer.json"), customer);
// writeFile(
//   path.resolve(__dirname, "./customer2.json"),
//   { name: "ali", id: 123 },
//   function (data) {
//     console.log(data);
//   }
// );
// readFile(path.resolve(__dirname, "./customer.json"), function (data) {
//   console.log(data);
// });
