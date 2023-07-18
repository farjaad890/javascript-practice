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
        }, 5000);
    })
}

//function to request user information from getuser
function makeGetrequest(){
    //returning a promise when getuser sends the value
    return new Promise((resolve, reject) => {
        let user;
        getUser().then(function(arg){
            user=arg;
            resolve(arg);
        }).catch(function(message){
            reject(message);
        });
        //time out for if the value is returned after a specified a time or not
        //if time out value less then the above timeout throws error. if value greater than the above time out displays user information 
        setTimeout(()=>{
            if(user){
                resolve(user);
            }
            else{
                reject("Request time out");
            }
        },3000)
    })
}

makeGetrequest().then(function(value){
    console.log(value);
}).catch(function(message){
    console.log(message);
})