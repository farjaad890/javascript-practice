//get user function which returns a promise after some time
function getUser(){
    let check=true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(check){
                resolve(
                    user={
                        name:"farjaad",
                        gender:"male",
                        id:1234,
                    }
                )
            }else{
                reject("no user found");
            }
        }, 2000);
    })
}
//function to request user information from getuser
function makeGetrequest(){
    //returning a promise when getuser sends the value
    return new Promise((resolve, reject) => {
        getUser().then(function(arg){
            resolve(arg);
        }).catch(function(message){
            reject(message);
        });
    })
}

makeGetrequest().then(function(value){
    console.log(value);
}).catch(function(message){
    console.log(message);
})