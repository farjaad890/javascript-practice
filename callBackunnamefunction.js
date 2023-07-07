function getUser(id, callback) {
  setTimeout(() => {
    callback({
      id: id,
      name: "Hfeez",
      age: 23,
    });
  }, 2000);
}
console.log("Before");
getUser(1, function (user) {
  console.log(user);
});
console.log("After");
