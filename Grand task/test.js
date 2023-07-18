const sr1 = ["iscreate"];
//sr1.toLowerCase();
sr1.splice()
console.log(camelize(sr1));
// function updateEmployee(tokken, key, value, id) {
//   const Action = "isUpdate";
//   const filePath = "./employee.json";
//   let keyValue = key.toLowercase();
//   if (tokken && keyValue && value && id) {
//     const requestSender = checkTokken(tokken, filePath);
//     if (requestSender) {
//       let employee = searchEmployee(id, filePath);
//       if (employee) {
//         let keys = Object.keys(employee);
//         for (i of keys) {
//           if (i === keyValue) {
//             if (typeof employee[i] === "string") {
//               if (checkStringvalidity(value)) {
//                 console.log("Invalid value send");
//               } else {
//                 employee[i] = value;
//                 updateEmployeedataHelper(employee);
//                 console.log("Data updated");
//                 return;
//               }
//             } else if (typeof employee[i] === "number") {
//               if (checkNumbervalidity(value)) {
//                 console.log("Invalid value send");
//               } else {
//                 employee[i] = value;
//                 updateEmployeedataHelper(employee);
//                 console.log("Data updated");
//                 return;
//               }
//             }
//           }
//         }
//         console.log("invalid field entered");
//         return;
//       } else {
//         console.log("Employee not found");
//         return;
//       }
//     } else {
//       console.log("Request sender not found");
//       return;
//     }
//   } else {
//     console.log("Incomplete inputs");
//   }
// }
// function updateEmployeedataHelper(data) {
//   const filePath = "./employee.json";
//   let completeData = readFile(filePath);
//   for (employee in completeData) {
//     if (completeData[i].id === data.id) {
//       completeData[i] = data;
//       break;
//     }
//   }
//   updateFile(filePath, completeData);
// }

// function updateEmployee(tokken, key, value, id) {
//   const Action = "isUpdate";
//   const filePath = "./employee.json";
//   const requestSender = checkTokken(tokken, filePath);
//   let employee = searchEmployee(id);
//   let keyValue = key.toLowercase();
//   console.log("Checking inputs");
//if (tokken && keyValue && value && id) {
//console.log("inputs complete");
// if (requestSender) {
//   console.log("Requester found");
//   if (employee) {
//     console.log("employee found");
//     if (keyValue === "name") {
//       console.log("updating name");
//       //updateName(employee, value);
//     } else if (keyValue === "age") {
//       //updateEmployeeAge(employee, value);
//     } else if (keyValue === "phone" || keyValue === "address") {
//       //updateEmployeeContactdetails(employee, value);
//     } else if (keyValue === "salary") {
//       //updateEmployeeSalary(employee, value);
//     } else if (keyValue === "department") {
//       //updateDepartment(employee, value);
//     } else {
//       console.log("invalid field entered");
//     }
//   } else {
//     console.log("employee not found");
//   }
// } else {
//   console.log("Request sender not found");
// }
//   } else {
//     console.log("Incomplete inputs");
//   }
// }
