const {
  createEmployee,
  updateEmployee,
  createNewdepartment,
  addEmployeepermissions,
  removeEmployeepermissions,
  deleteEmplyee,
} = require("./functions");
//=================================================================================================
// createNewdepartment("xx1234xx", "HR", "03213104185", ["isCreate", "isUpdate"]);
// createNewdepartment("xx1234xx", "Admin", "03213104185", [
//   "isCreate",
//   "isUpdate,isDelete",
// ]);
// createNewdepartment("xx1234xx", "Dev", "03213104185", ["isUpdate", "isDelete"]);
//========================================================================================================
//createEmployee("xx1234xx", "Ahmad", 25, "03213104166", "Askari11", 20000);
//createEmployee("xx1234xx", "Ali", 26, "03213104182", "Askari21", 25000);
//==========================================================================================================
// updateEmployee("xx1234xx", "salary", 23000, 3)
//   .then(function (message) {
//     console.log(message);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//=========================================================================================================
//addEmployeepermissions("db79f9c5f6c4148e", 3, "isUpdate");
//addEmployeepermissions("db79f9c5f6c4148e", 3, "isDelete");
//==========================================================================================================
//removeEmployeepermissions("db79f9c5f6c4148e", 3, "isDelete");
//=========================================================================================================
// deleteEmplyee("xx1234xx", 2)
//   .then(function (message) {
//     console.log(message);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
