function getUser(){
    let check=true;
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(check){
                resolve(
                    user={
                        name:"farjaad",
                        id:123
                    }
                )
            }
            else{
                reject("user not found");
            }
        },2000)
    })
}
function getRepo(user){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(user){
                resolve(
                    repo={
                        name1:"repo1",
                        name2:"repo2",
                        id:123
                    }
                )
            }
            else{
                reject("repo not found");
            }
        },2000)
    })
}
function getCommit(repo){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(repo){
                resolve(
                    commit={
                        commits:["commit1","commit2"]
                    }
                )
            }
            else{
                reject("commits not found");
            }
        },2000)
    })
}

async function displayData(){

    try {
        let user=await getUser();
        console.log(user);
        let repo=await getRepo(0);
        console.log(repo);
        let commit=await getCommit(repo);
        console.log(commit);
    } catch (error) {
        console.log(error);
        
    }
}

console.log("Before");
displayData();
console.log("After")