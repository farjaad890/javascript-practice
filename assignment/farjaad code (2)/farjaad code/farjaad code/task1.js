
let arr1=[1,2,4,5,6,7];
let arr2=[1,3,4,8,10];
//function to get value which are present in the first array but not in the second array
function getunique(array1,array2){
//empty array to store final answer
let ans=[];
//loop to traverse the first array
for(i of array1){
    //check variable to check condition element of array1 is present in array2
    let check=0;
    //loop to traverse the second array
    for(j of array2){
        //checking the value of array 1 in array2
        if(i===j){
            check=1;
            break;
        }
    }
    //this condition tells us that the element is present in array1 but not in array2
    if(check===0){
        //storing the values in ans array
        ans.push(i);
    }
}
return ans;
}


console.log("Task 1 ans : ",getunique(arr1,arr2));


//exporting getunique to use in task2
module.exports={getunique};