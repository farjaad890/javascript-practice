
//function to check if a number is prime number
function isPrime(value){
    //1 is not a prime number
    if(value===1){
        return false;
    }
    //2 is a prime number
    else if(value===2){
        return true;
    }
    else{
        //loop from the 2 till the value given
        for(let i=2;i<value;i++){
            //checking to see if the value is dividible by any other number
            if(value%i===0){
                return false;
            }
        }
        return true;
    }
}

function getSumfirstHundred(){
    let check=0;
    let number=1;
    let sum=0;
    let primeNumber=[];
    //infinite loop uniti the value of check reaches 100
    while(true){
        if(check<100){
            if(isPrime(number)){
                //console.log(number);
                primeNumber.push(number);
                //calculating the sum of prime numbers
                sum=sum+number;
                check++;
            }
            number++;
        }
        else{
            break;
        }
    }
    console.log("Sum of first 100 prime numbers : ",sum);
    return primeNumber;

}
console.log("The first hundred prime numbers are : ",getSumfirstHundred());