
//importing from task 1. when importing the whole file of task 1 will run so while running task 2 it will also show the answer to task1 as well
const {getunique}=require("./task1");
let arr1=[1,2,4,5,6,7];
let arr2=[1,3,4,8,10];

//function to get values which are in array1 or in array2 but not in both
function getUniqueinBotharrays(array1,array2){
    //to get the value which are in aaray1 and not in array2
    let ans1=getunique(array1,array2);
    //console.log(ans1);
    //to get the value which are in array2 but not in array1
    let ans2=getunique(array2,array1);
    //console.log(ans2);
    //finally joining the two arrays
    let finalResult=ans1.concat(ans2);
    console.log(finalResult);
}

getUniqueinBotharrays(arr1,arr2);