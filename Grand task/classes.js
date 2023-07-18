//const { randomStringgenerator, getCurrentdate } = require("./functions");
//const { readFile } = require("./functions");
const fs = require("fs");
const path = require("path");
class person {
  constructor(name, age, phoneNumber, addr = null) {
    this.name = name;
    this.age = age;
    this.contactDetails = [
      {
        phone: phoneNumber,
        address: addr,
      },
    ];
  }
}
class employee extends person {
  constructor(
    name,
    age,
    phone = null,
    address = null,
    salary,
    departmentid = null
  ) {
    super(name, age, phone, address);
    this.id = findTotalemployees() + 1;
    this.tokken = randomStringgenerator();
    this.salary = salary;
    this.permissions = [];
    this.departmentid = departmentid;
    this.createdAt = getCurrentdate();
    this.updatedAt = this.createdAt;
  }
}
class Department {
  constructor(name, contact = null, permission = null) {
    this.id = findTotalDepartment() + 1;
    this.departmentName = name;
    this.contactNo = contact;
    this.createdAt = getCurrentdate();
    this.updatedAt = this.createdAt;
    this.employees = 0;
    if (permission != null) {
      this.permissions = permission;
    } else {
      this.permissions = [];
    }
  }
}
//----------------------------------------------------------------------------
function readFile(filePath) {
  let readData = fs.readFileSync(path.resolve(__dirname, filePath), "utf-8");
  return JSON.parse(readData);
}
//---------------------------------------------------------------------------
function findTotalDepartment() {
  const filePath = "./department.json";
  let completeData = readFile(filePath);
  let total = completeData.length;
  return total;
}
//---------------------------------------------------------------------------
function findTotalemployees() {
  const filePath = "./employee.json";
  let completeData = readFile(filePath);
  let total = completeData.length;
  return total;
}
//--------------------------------------------------------------------------
function randomStringgenerator() {
  let randomstr = "";
  let characstr = "123456789abcdefg";
  for (let str of characstr) {
    randomstr += characstr.charAt(Math.random() * characstr.length);
  }
  return randomstr;
}
//--------------------------------------------------------------------------------------
function getCurrentdate() {
  let date = new Date();
  return date.toISOString();
}
module.exports = { employee, person, Department, getCurrentdate };
