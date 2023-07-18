class Stack{
    constructor(){
        this.stack=[];
    }
    push(value){
        this.stack[this.stack.length]=value;
    }
    pop(){
        if(this.stack.length===0){
            console.log("The stack is empty");
        }
        else{
            return this.stack.splice(this.stack.length-1,1);
        }
    }
}
//findind maximum and minimum value in a stack
function findMaximumminimum(data){
    //initializing the values
    let max=data.stack[0];
    let min=data.stack[0];
    for(let i=0;i<data.stack.length;i++){
        //check for max value
        if(data.stack[i]>max){
            max=data.stack[i];
        }
        //check for min value
        else if(data.stack[i]<min){
            min=data.stack[i];
        }
    }
    console.log(max);
    console.log(min);
}
let st1=new Stack();
st1.push(1);
st1.push(11);
st1.push(5);
st1.push(1);
findMaximumminimum(st1);