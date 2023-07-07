async function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve({
          name: "Bilal",
          age: 20,
          Gender: "male",
        });
      } else {
        reject("User not found");
      }
    }, 2000);
  });
}
function getRepo() {
  let check = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (check) {
        resolve({
          name: "Repo",
          age: 20,
          Gender: "male",
        });
      } else {
        reject("User not found");
      }
    }, 2000);
  });
}

async function displayUser() {
  try {
    let user = await getUser(0);
    console.log(user);
    let Repo = await getRepo(user);
    console.log(Repo);
  } catch (error) {
    console.log(error);
  }
  //   if (user) {
  //     let Repo = await getRepo(user);
  //     console.log(Repo);
  //   } else {
  //     console.log("Repo not found");
  //   }
}

displayUser();
