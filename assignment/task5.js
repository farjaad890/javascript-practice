function getUser(id, callback) {
  setTimeout(() => {
    callback({
      id: id,
      name: "Hfeez",
      age: 23,
    });
  }, 2000);
}
function getRepos(id, repocallback) {
  setTimeout(() => {
    repocallback({
      repo_id: id,
      name: "repo",
    });
  }, 2000);
}
function getCommits(commitCallback) {
  setTimeout(() => {
    commitCallback(["commit1", "commit2"]);
  }, 2000);
}

function displayCommit(commit) {
  console.log(commit);
}
function displayRepo(repo) {
  console.log(repo);
  getCommits(displayCommit);
}
function displayUser(user) {
  console.log(user);
  getRepos(user.id, displayRepo);
}
console.log("Before");
getUser(1, displayUser);
console.log("After");
