const axios = require("axios").default;
// function getData() {
//   return new Promise((resolve, reject) => {
//     axios
//       .get("https://dummyjson.com/users")
//       .then(function (response) {
//         resolve(response.data.users);
//       })
//       .catch(function (error) {
//         reject(error);
//       });
//   });
// }
function getData() {
  return axios
    .get("https://dummyjson.com/users")
    .then(function (response) {
      return response.data.users;
    })
    .catch(function (error) {
      return error;
    });
}
getData()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
