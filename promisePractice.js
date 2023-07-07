// function getUser(id) {
//   let check = false;
//   return new Promise((resolve, reject) => {
//     if (check) {
//       resolve([
//         {
//           id: id,
//           name: "Hfeez",
//           age: 23,
//         },
//       ]);
//     } else {
//       setTimeout(() => {
//         reject("No data to display");
//       }, 2000);
//     }
//   });
// }

// function getUser(id) {
//   setTimeout(() => {
//     var check = true;
//   }, 2000);
//   return new Promise((resolve, reject) => {
//     if (check) {
//       resolve([
//         {
//           id: id,
//           name: "Hfeez",
//           age: 23,
//         },
//       ]);
//     } else {
//       reject("No data to display");
//     }
//   });
// }
// function getdata(id) {
//   return new Promise((resolve, reject) => {
//     //data=fetch(id);
//     if (data) {
//       resolve(data);
//     } else {
//       reject("No data");
//     }
//   });
// }
// function getUser(id) {
//   let check = true;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {}, 2000);
//     if (check) {
//       setTimeout(() => {
//         resolve([
//           {
//             id: id,
//             name: "Hfeez",
//             age: 23,
//           },
//         ]);
//       }, 2000);
//     } else {
//       reject("No data to display");
//     }
//   });
// }

// function getUser(id) {
//   setTimeout(() => {
//     return [
//       {
//         id: id,
//         name: "Hfeez",
//         age: 23,
//       },
//     ];
//   }, 2000);
// }
// function displayData(user) {
//   return new Promise((resolve, reject) => {
//     if (user) {
//       resolve(user);
//     } else {
//       reject(null);
//     }
//   });
// }
// console.log("before");
// displayData(getUser(1))
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (data) {
//     console.log("No data");
//   });
// console.log("After");
// function displayData() {
//   let data = getUser(1);
//   return new Promise((resolve, reject) => {
//     if (data) {
//       resolve(data);
//     } else {
//       reject("No data to display");
//     }
//   });
// }

// displayData()
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (message) {
//     console.log(message);
//   });
// function displayData() {
//   return new Promise((resolve, reject) => {
//     let data = getUser(1);
//     if (data) {
//       resolve(data);
//     } else {
//       reject("No data to display");
//     }
//   });
// }
// displayData()
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (message) {
//     console.log(message);
//   });
// console.log("Before");
// getUser(1)
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (message) {
//     console.log(message);
//   });
// console.log("After");
function getUser(id) {
  let check = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (check) {
        resolve([
          {
            id: id,
            name: "Hfeez",
            age: 23,
          },
        ]);
      } else {
        reject("No data to display");
      }
    }, 2000);
  });
}
function getRepo(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve({
          name: "Repo1",
          id: data,
        });
      } else {
        reject("no Repo found");
      }
    }, 3000);
  });
}
function getCommit(check) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (check) {
        resolve({
          name: ["commit1", "commit2"],
        });
      } else {
        reject("No commits found");
      }
    }, 4000);
  });
}
// getUser(1)
//   .then(function (data) {
//     console.log(data);
//     return getRepo(data);
//   })
//   .then(function (data) {
//     console.log(data);
//     return getCommit(data);
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (message) {
//     console.log(message);
//   });
// getUser(1)
//   .then(function (data) {
//     console.log(data);
//     getRepo(data)
//       .then(function (repos) {
//         console.log(repos);
//         getCommit(repos)
//           .then(function (commits) {
//             console.log(commits);
//           })
//           .catch(function (message) {
//             console.log(message);
//           });
//       })
//       .catch(function (message) {
//         console.log(message);
//       });
//   })
//   .catch(function (message) {
//     console.log(message);
//   });
Promise.all([getUser(1), getRepo(1), getCommit(1)])
  .then(function (values) {
    console.log(values);
  })
  .catch(function (message) {
    console.log(message);
  });
