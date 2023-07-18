const fs = require("fs");
const path = require("path");
const { employee, person, Department, getCurrentdate } = require("./classes");
const { table } = require("console");
//------------------------------------------------------------------------------------------
function readFile(filePath) {
  let readData = fs.readFileSync(path.resolve(__dirname, filePath), "utf-8");
  return JSON.parse(readData);
}
//----------------------------------------------------------------------------------------------------
function writeFile(filePath, data) {
  //console.log("writing file");
  //console.log(data);
  fs.writeFileSync(
    path.resolve(__dirname, filePath),
    JSON.stringify(data, null, 2)
  );
  //console.log("Writing file complete");
}
//--------------------------------------------------------------------------------------------------------
function updateFile(filePath, data) {
  //console.log("in update file function");
  writeFile(filePath, data);
}
//--------------------------------------------------------------------------------------------------------
function createEmployee(tokkenid, name, age, phonenumber, address, salary) {
  const Action = "isCreate";
  const filePath = "./employee.json";
  if (tokkenid && name && age && salary) {
    //console.log("first condition true");
    if (!checkStringvalidity(name)) {
      console.log("Invalis name input");
      return;
    }
    if (!checkNumbervalidity(age)) {
      console.log("Invalid age input");
      return;
    }
    if (!checkNumbervalidity(salary)) {
      console.log("Invalid salary input");
      return;
    }
    //console.log("First three conditions false");
    const requestSender = checkTokken(tokkenid);
    if (requestSender) {
      //console.log("Request sender found");
      if (checkPermissions(requestSender.permissions, Action)) {
        //console.log("Permissions granted");
        let newEmployee = new employee(name, age, phonenumber, address, salary);
        let completeData = readFile(filePath);
        completeData.push(newEmployee);
        updateFile(filePath, completeData);
        return newEmployee;
      } else {
        console.log("Permission denied");
      }
    } else {
      console.log("Request sender invalid");
    }
  } else {
    console.log("input invalid");
  }
}
//----------------------------------------------------------------------------------------------------
function updateEmployee(tokken, key, value, id) {
  const Action = "isUpdate";
  const filePath = "./employee.json";
  const requestSender = checkTokken(tokken);
  let employee = searchEmployee(id, filePath);
  let keyValue = key.toLowerCase();
  return new Promise((resolve, reject) => {
    console.log("Updating Data............");
    setTimeout(() => {
      if (tokken && keyValue && value && id) {
        //console.log("inputs complete");
        if (requestSender) {
          //console.log("Requester found");
          if (checkPermissions(requestSender.permissions, Action)) {
            if (employee) {
              //console.log("employee found");
              if (keyValue === "name") {
                //check number validity
                //console.log("updating name");
                if (updateName(employee, value)) {
                  // let completeData = readFile(filePath);
                  // console.table(completeData);
                  resolve("Name updated successfully");
                } else {
                  reject("invalid input");
                }
              } else if (keyValue === "age") {
                //check age validity
                if (updateEmployeeAge(employee, value)) {
                  //let completeData = readFile(filePath);
                  //console.table(completeData);
                  resolve("Age updated successfully");
                } else {
                  reject("Invalid input");
                }
              } else if (keyValue === "phone" || keyValue === "address") {
                //phone number or address validity
                if (updateEmployeeContactdetails(employee, keyValue, value)) {
                  //let completeData = readFile(filePath);
                  //console.table(completeData);
                  resolve("Contact details updated successfully");
                } else {
                  reject("invalid input");
                }
              } else if (keyValue === "salary") {
                //check salary validity
                if (updateEmployeeSalary(employee, value)) {
                  //let completeData = readFile(filePath);
                  //console.table(completeData);
                  resolve("Salary updated successfully");
                } else {
                  reject("invalid input");
                }
              } else if (keyValue === "department") {
                //check department name validity

                if (updateEmployeeDepartment(employee, value)) {
                  let completeData = readFile(filePath);
                  console.table(completeData);
                  resolve("Department updated successfully");
                } else {
                  reject("invalid input");
                }
              } else {
                reject("invalid field entered");
              }
            } else {
              reject("employee not found");
            }
          } else {
            reject("Requester do not have permission");
          }
        } else {
          reject("Request sender not found");
        }
      } else {
        reject("Incomplete inputs");
      }
    }, 2000);
  });
}
//--------------------------------------------------------------------------------------------------------
function updateName(employee, value) {
  //console.log("In name function");
  const filePath = "./employee.json";
  let completeData = readFile(filePath);
  if (checkStringvalidity(value)) {
    for (i in completeData) {
      if (completeData[i].id === employee.id) {
        //console.log("Found employee in complete data");
        completeData[i].name = value;
        break;
      }
    }
    console.table(employee);
    updateFile(filePath, completeData);
    return true;
  } else {
    return false;
  }
}
//--------------------------------------------------------------------------------------------------------------
function updateEmployeeAge(employee, value) {
  const filePath = "./employee.json";
  let completeData = readFile(filePath);
  if (checkNumbervalidity(value)) {
    for (i in completeData) {
      if (completeData[i].id === employee.id) {
        //console.log("Found employee in complete data");
        completeData[i].age = value;
        break;
      }
    }
    console.table(employee);
    updateFile(filePath, completeData);
    //console.log("Dat successfully updated");
    return true;
  } else {
    //console.log("Invalid input");
    return false;
  }
}
//-------------------------------------------------------------------------------------------------------------------------
function updateEmployeeContactdetails(employee, key, value) {
  //this function will get the value and the employee object.
  //first we will check the validity of the value entered
  //if the value is valid then we will update the value and then return true .
  //if the value is not valid then return false so.
  const filePath = "./employee.json";
  let completeData = readFile(filePath);
  if (key === "phone") {
    if (checkPhonenumbervalidity(value)) {
      employee.contactDetails[0].phone = value;
      for (i in completeData) {
        if (completeData[i].id === employee.id) {
          //console.log("Found employee in complete data");
          completeData[i] = employee;
          break;
        }
      }
      console.table(employee);
      updateFile(filePath, completeData);
      //console.log("Data successfully updated");
      return true;
    } else {
      console.log("Invalid input");
      return false;
    }
  } else if (key === "address") {
    if (checkStringvalidityAddress(value)) {
      employee.contactDetails[0].address = value;
      for (i in completeData) {
        if (completeData[i].id === employee.id) {
          //console.log("Found employee in complete data");
          completeData[i] = employee;
          break;
        }
      }
      console.table(employee);
      updateFile(filePath, completeData);
      return true;
    } else {
      //console.log("Invalid input");
      return false;
    }
  }
}
//-----------------------------------------------------------------------------------------------------------------------
function deleteEmplyee(tokken, employeeid) {
  //authenticate the request sender.
  //if the request sender is present.
  //check the employee which has to be deleted through id.
  //if employee found the check the permissions of the request sender.
  //if permissions are available to request sender then proceed.
  //read complete file from the read file function.
  //then search the employee in the array with (for in) method to get index.
  //when index found use splice method to remove the employee from the complete data.
  //when employee successful removed call update file command.
  //when file updated show message of successfull.
  const filePath = "./employee.json";
  const requestSender = checkTokken(tokken);
  const employee = searchEmployee(employeeid, filePath);
  const Action = "isDelete";
  let completeData = readFile(filePath);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (requestSender) {
        if (employee) {
          if (checkPermissions(requestSender.permissions, Action)) {
            if (requestSender.departmentid === 3) {
              if (employee.departmentid === 3) {
                for (i in completeData) {
                  if (completeData[i].id === employee.id) {
                    completeData.splice(i, 1);
                    resolve("Employee successfully deleted");
                    return;
                  }
                }
              } else {
                reject("A dev person canonly delete a dev person");
              }
            } else {
              //do the work
              for (i in completeData) {
                if (completeData[i].id === employee.id) {
                  completeData.splice(i, 1);
                  updateFile(filePath, completeData);
                  resolve("Employee successfully deleted");
                  return;
                }
              }
            }
          } else {
            reject("Do not have the permission");
          }
        } else {
          reject("employee not found");
        }
      } else {
        reject("Tokken Authentication failed");
      }
    }, 3000);
  });
}
//------------------------------------------------------------------------------------------------------------------------
function updateEmployeeSalary(employee, value) {
  const filePath = "./employee.json";
  let completeData = readFile(filePath);
  if (checkNumbervalidity(value)) {
    for (i in completeData) {
      if (completeData[i].id === employee.id) {
        //console.log("Found employee in complete data");
        completeData[i].salary = value;
        break;
      }
    }
    console.table(employee);
    updateFile(filePath, completeData);
    //console.log("Data successfully updated");
    return true;
  } else {
    return false;
    //console.log("invalid input");
  }
}
//------------------------------------------------------------------------------------------------------------------------
function updateEmployeeDepartment(employee, departmentid) {
  const filePath = "./employee.json";
  let completeData = readFile(filePath);
  let department = searchDepartment(departmentid);
  if (department) {
    for (i in completeData) {
      if (completeData[i].id === employee.id) {
        // console.log("Found employee in complete data");
        completeData[i].departmentid = department.id;
        completeData[i].permissions = [];
        break;
      }
    }
    console, table(employee);
    updateFile(filePath, completeData);
    //console.log("data successfully updated");
    return true;
  } else {
    return false;
    //console.log("Invalid department id");
  }
}
//--------------------------------------------------------------------------------------------------------
function addEmployeepermissions(tokken, employeeid, permission) {
  const requestSender = checkTokken(tokken);
  const Action = "isUpdate";
  const filePath = "./employee.json";
  let completeData = readFile(filePath);
  let employee = searchEmployee(employeeid, filePath);
  let department = searchDepartment(employee.departmentid);
  if (requestSender) {
    if (checkPermissions(requestSender.permissions, Action)) {
      if (employee) {
        //console.log(employee.departmentid);
        if (!(employee.departmentid === null)) {
          for (i of department.permissions) {
            if (i === permission) {
              for (j of employee.permissions) {
                if (j === permission) {
                  console.log("Permission already exists");
                  return;
                }
              }
              employee.permissions.push(permission);
              for (k in completeData) {
                if (completeData[k].id === employee.id) {
                  completeData[k] = employee;
                  updateFile(filePath, completeData);
                  console.log("permission successfully added");
                  return;
                }
              }
            }
          }
          console.log("Invalid permission entered");
          return;
        } else {
          console.log(
            "Cannot assign permissions without assigning the department first"
          );
        }
      } else {
        console.log("Employee not found");
      }
    } else {
      console.log("The requester do not have this permission");
    }
  } else {
    console.log("Request sender not authenticated");
  }
}
//--------------------------------------------------------------------------------------------------------
function removeEmployeepermissions(tokken, employeeid, permission) {
  const requestSender = checkTokken(tokken);
  const Action = "isUpdate";
  const filePath = "./employee.json";
  let completeData = readFile(filePath);
  let employee = searchEmployee(employeeid, filePath);
  if (requestSender) {
    if (checkPermissions(requestSender.permissions, Action)) {
      if (employee) {
        //console.log(employee.departmentid);
        if (
          employee.permissions === null ||
          employee.permissions.length === 0
        ) {
          console.log("The employee do not have any permission to delete");
          return;
        }
        for (i in employee.permissions) {
          if (employee.permissions[i] === permission) {
            employee.permissions.splice(i, 1);
          }
        }
        for (k in completeData) {
          if (completeData[k].id === employee.id) {
            completeData[k] = employee;
            updateFile(filePath, completeData);
            console.log("permission successfully deleted");
            return;
          }
        }
      } else {
        console.log("Employee not found");
      }
    } else {
      console.log("The requester do not have this permission");
    }
  } else {
    console.log("Request sender not authenticated");
  }
}
//---------------------------------------------------------------------------------------------------------
function createNewdepartment(tokken, name, phone, permissions) {
  Action = "isCreate";
  const filePath = "./department.json";
  const requestSender = checkTokken(tokken);
  let completeData = readFile(filePath);
  if (name) {
    if (requestSender) {
      if (checkStringvalidity(name)) {
        if (checkPhonenumbervalidity(phone)) {
          let department = new Department(name, phone, permissions);
          completeData.push(department);
          updateFile(filePath, completeData);
        } else {
          console.log("Phone number not valid");
        }
      } else {
        console.log("invalid name");
      }
    } else {
      console.log("Request sender not authenticated");
    }
  } else {
    console.log("invalid input");
  }
}
//============================================================================================================
//-------------------------------------------------------------------------------------------------------------
function checkTokken(tokken) {
  const filePath = "./employee.json";
  const employeeData = readFile(filePath);
  //console.log(employeeData);
  const requestSender = employeeData.find(function (currentemployee) {
    //console.log(currentemployee.tokken);
    if (currentemployee.tokken === tokken) {
      return currentemployee;
    }
  });
  return requestSender;
}
//--------------------------------------------------------------------------------------------------------------------
function checkPermissions(permissions, action) {
  //console.log(permissions);
  if (permissions.length === 0) {
    return false;
  }
  for (check of permissions) {
    if (check === action) {
      return true;
    }
  }
  return false;
}
//--------------------------------------------------------------------------------------------
function searchEmployee(id, filePath) {
  const employeeData = readFile(filePath);
  let employee = employeeData.find(function (currentemployee) {
    if (id === currentemployee.id) {
      return currentemployee;
    }
  });
  return employee;
}
//-----------------------------------------------------------------------------------------------------
function searchDepartment(departmentid) {
  const completeDepartmentdata = readFile("./department.json");
  let department = completeDepartmentdata.find(function (currentDepartment) {
    if (currentDepartment.id === departmentid) {
      return currentDepartment;
    }
  });
  return department;
}
//------------------------------------------------------------------------------------------------------------------------------
function checkStringvalidity(value) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (!value) {
    return false;
  } else {
    if (!typeof value === "string") {
      return false;
    }
    if (value.trim().length === 0) {
      return false;
    }
    if (specialChars.test(value)) {
      return false;
    }
    if (/[0-9]/.test(value)) {
      return false;
    }
    return true;
  }
}
//----------------------------------------------------------------------------------------------------------
function checkPhonenumbervalidity(phonenumber) {
  const specialChars = /^(?:\+923\d{9}|03\d{9})$/;
  //console.log(phonenumber);
  if (!phonenumber) {
    return false;
  } else {
    //console.log("check for number");
    if (typeof value === "number") {
      return false;
    }
    //console.log("check for empty");
    if (phonenumber.trim().length === 0) {
      return false;
    }
    //console.log("check for pattern");
    if (!specialChars.test(phonenumber)) {
      // console.log(specialChars.test(phonenumber));
      return false;
    }
    return true;
  }
}
//----------------------------------------------------------------------------------------------------------
function checkStringvalidityAddress(value) {
  const specialChars = /[`!@#$%^&*()+={};':"|.<>?~]/;
  if (!value) {
    return false;
  } else {
    if (typeof value === "number") {
      return false;
    }
    if (value.trim().length === 0) {
      return false;
    }
    if (specialChars.test(value)) {
      return false;
    }
    return true;
  }
}
//------------------------------------------------------------------------------------------------------------------------------
function checkNumbervalidity(value) {
  if (!value) {
    return false;
  }
  if (typeof value === "string") {
    return false;
  }
  if (value < 0) {
    return false;
  }
  return true;
}
module.exports = {
  createEmployee,
  updateEmployee,
  createNewdepartment,
  addEmployeepermissions,
  removeEmployeepermissions,
  deleteEmplyee,
};
