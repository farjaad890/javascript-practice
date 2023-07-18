class Stack{
    constructor(){
        this.stack=[];
    }
    push(value){
        //adding the value into the array
        this.stack[this.stack.length]=value;
    }
    pop(){
        //check to see if the stack is empty 
        if(this.stack.length===0){
            console.log("The stack is empty");
        }
        else{
            //removing the last value of the array
            return this.stack.splice(this.stack.length-1,1);
        }
    }
}
//using selection sort to sort the data in decending order
function decendingOrder(data){
    for(let i=0;i<data.stack.length;i++){
        for(let j=i;j<data.stack.length;j++){
            if(data.stack[j]<data.stack[i]){
                let temp=data.stack[i];
                data.stack[i]=data.stack[j];
                data.stack[j]=temp;
            }
        }
    }
}
let st1=new Stack();
st1.push(10);
st1.push(11);
st1.push(5);
st1.push(7);
decendingOrder(st1);
console.log(st1.stack);