
function getRandomuniqueNumbers(value){
    let ans=[];
    for(let i=0;i<value;i++){
        //inbuilt function to get a random value
        let x=Math.floor(Math.random()*value);
        //if length is 0 simply push the random number
        if(ans.length===0){
            ans.push(x);
        }
        else{
            //checking to see if the random number already exists in the ans array or not
            if(!ans.includes(x)){
                ans.push(x);
            }
            else i--
        }
    }
    console.log(ans);
}

getRandomuniqueNumbers(10);