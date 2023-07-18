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
//merging two stacks
function mergeTwostacks(dataStack1,dataStack2){
    for(let i=0;i<dataStack2.stack.length;i++){
        //popping values from the second stack and pushing it into the first stack
        dataStack1.push(dataStack2.pop());
    }
}
let st1=new Stack();
st1.push(1);
st1.push(11);
st1.push(5);
st1.push(1);
let st2=new Stack();
st1.push(2);
st1.push(1);
st1.push(5);
st1.push(8);
st1.push(10);
mergeTwostacks(st1,st2);
console.log(st1.stack);