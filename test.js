// function swapnumbers(value1,value2){
//     value1=value1+value2;
//     value2=value1-value2;
//     value1=value1-value2;

//     console.log(value1,value2);
// }
// swapnumbers(5,10)
// ----------------------------------------------------------------------
//check occurences of an element in an array
// let obj = {};
// const array = ["apples", "banana", "apples"];
// for (let i in array) {
//   if (obj[array[i]]) {
//     obj[array[i]] += 1;
//   } else {
//     obj[array[i]] = 1;
//   }
// }
// console.log(obj);
//-----------------------------------------------------------------------------
// function checksubstring(arr, target) {
//   let indexarray = [];
//   for (let index1 = 0; index1 < arr.length; index1++) {
//     let sum = arr[index1];
//     indexarray.push(index1);
//     for (let index2 = 0; index2 < arr.length; index2++) {
//       if (index1 == index2) {
//         continue;
//       } else {
//         sum = sum + arr[index2];
//         if (sum > target) {
//           break;
//         } else if (sum < target) {
//           indexarray.push(index2);
//         } else if (sum == target) {
//           indexarray.push(index2);
//           return indexarray;
//         }
//       }
//     }
//     indexarray = [];
//   }
// }
// const arr = [5, 6, 7, 1, 3, 4];
// console.log(checksubstring(arr, 8));
//------------------------------------------------------------------------------
//callback function
// async function display(result) {
//   console.log("Hello from the display function");
//   console.log(result);
// }
// async function calculator(callback) {
//   let result = null;
//   let num = 10;
//   let num2 = 20;
//   result = num + num2;
//   //   console.log("Hello form the calculator");
//   await callback(result);
//   console.log("Hello form the calculator");
// }
// calculator(display);
//=------------,-,---------------------------------------------------
//mappin examples
// let numbers = [2, 4, 6, 7, 9, 10, 85, 45, 75, 100];

// let multiplearray = numbers.map((currentnumber)=>  currentnumber * 2);
// console.log(multiplearray);
// let multiplearray = numbers.map(function (currentnumber) {
//   return currentnumber * 2;
// });
// console.log(multiplearray);
//-------------------------------------------------------------------------
//desturcturing of an object
// function displayinfo() {
//   const { name, age, address } = person;
//   console.log(
//     `Hello the person information is the name is ${name} and age is ${age} and the address is ${address.latitude}`
//   );
// }

// let person = {
//   name: "John",
//   age: 20,
//   address: {
//     long: 3.14525,
//     lat: 3.789,
//   },
// };
// displayinfo();
//----------------------------------------------------------------------------------------------------------
//shifting an array
// let arr=[2,0,5,4,6,0,21,0,46,0,22]
// function shiftleft(index,arr){
//     for (let i=index; i<arr.length-1;i++){
//         arr[i]=arr[i+1];
//     }
//     }
// for (let i=0; i<arr.length;i++){
//     if(arr[i]===0){
//         let temp=arr[i];
//         shiftleft(i,arr);
//         arr[arr.length-1]=temp;
//     }
// }
// console.log(arr);
//=-----------------------------------------------------------------------------------------------
// let person = {
//   akram: 20,
//   ali: 10,
//   rehman: 7,
//   salman: 78,
// };
// let sortedperson={};
// let sortkey=[];
// for (let key in person) {
//   sortkey.push(key);
// }
// sortkey.sort();
//------------------------------------------------------
// let arr = [10, 100, 45, 89, 99];
// // arr.sort((a, b) => a - b);
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr);
//------------------------------------------------------------------------------------------------------
// class Bilal {
//   constructor() {
//     this.name = null;
//     this.age = 0;
//   }
//   //   constructor(name, age) {
//   //     this.name = name;
//   //     this.age = age;
//   //   }
//   getname() {
//     console.log(this.name);
//   }
//   setname(name) {}
// }
// // const Farjaad = new Bilal("Farjaad", 20);
// const ali = new Bilal;
// ali.getname();
// // Farjaad.getname();
//----------------------------------------------------------------------------------------------------------------------
// let message =
//   "There are 9 people in the room, we all are ready to learn new things, sometimes our moral get down, but we are still hustling for learning. After 2 months, there will be change in our way of coding";

//   //Task 3
// let result = message.split(" ");
// console.log(result);
// for (let i = 0; i < result.length; i++) {
//   if (Number(result[i])) {
//     console.log(result[i]);
//   }
// }
// //Task 1
// console.log(message.split(","));

// //Task 2
// //let result = message.split(" ");
// for (let i = 0; i < result.length; i++) {
//   if (result[i].startsWith("T")) {
//     console.log(result[i]);
//   }
// }

// // console.log(message.replace("hustling for learning", "hustling-learning"));

// // let var1 = message.match(/hustling/);
// // let var2 = message.match(/learning/);
// // console.log(var1[0].join(var2[0], "-"));
//-----------------------------------------------------------------------------------------------
//map versus filter
// const myArray = [
//   {
//     name: "Asad",
//     type: "abc",
//   },
//   {
//     name: "Ali",
//     type: "abc",
//   },
//   {
//     name: "Naeem",
//     type: "ab",
//   },
// ];
// // let result=myArray.map((currentitem) => {
// //   if (currentitem.type === "abc") {
// //      return currentitem;
// //   }
// // });
// // console.log(result);

// let result = myArray.filter((currentitem) => {
//   if (currentitem.type === "abc") {
//     return currentitem;
//   }
// });
// console.log(result);
//-------------------------------------------------------------------------------------------------
// let obj = {
//   name: "Ali",
//   age: 20,
//   bankdetails: {
//     accountnumber: 1234567890,
//     accountname: "ali",
//   },
// };
// // let obj2 = obj
// // let obj2 = { ...obj };//deep copy of obj
// // obj2.age = 30;
// // console.log(obj2);
// let obj2 = { ...obj };
// obj2.age = 30;
// obj2.bankdetails.accountnumber = 78966325;
// console.log(obj2);
// console.log(obj);
//-------------------------------------------------------------------------------------------------
// let d = new Date("2015-03-25");
// console.log(d);
// d.setFullYear(2010);
// console.log(d);
//-------------------------------------------------------------------------------------------------
// let check;
// if (check) {
//   console.log("true");
// }
//-------------------------------------------------------------------------------------------------------
// let arr=[1,5,8,7,9,10,20];
// arr.filter(function(current){
//     if(current>=8){
//         console.log(current);
//     }
// })
//--------------------------------------------------------------------------------------------------------
// let obj = {
//   name: "ahmad",
//   age: 20,
//   address: "adaqeer",
//   phone: "1234567890",
//   email: "hzdkv@example.com",
//   password: "1234567890",
//   gender: "male",
//   dob: "2015-03-25",
// };

// let x = this;
// console.log(x);
// let obj2 = Object.keys(obj);
// console.log(obj2);
// let myArray = Object.values(obj);
// console.log(myArray);
// for (i in obj) {
//   console.log(i);
// }
// obj.forEach((element) => {
//   console.log(element);
// });
// obj.gender = "female";
// obj.sign = "leo";
// console.log(obj);
//-----------------------------------------------------------------------------------------------------------
// 'use strict';

// let person = {};

// Object.defineProperty(person, 'ssn', {
//     configurable: false,
//     value: '012-38-9119'
// });

// delete person.ssn;
//----------------------------------------------------------------------------------------------------------------
// let person = {};
// person.age = 25;
// person.ssn = "012-38-9119";

// Object.defineProperty(person, "ssn", {
//   enumerable: false,
// });

// for (let prop in person) {
//   console.log(prop);
// }
// function getPromise(i) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve({ data: i });
//     }, 2000);
//   });
// }

// function queryPromiseChain() {
//   let promiseOneResult;
//   let promiseTwoResult;
//   getPromise(1)
//     .then(function (result) {
//       promiseOneResult = result.data;
//       return getPromise(result.data + 1);
//     })
//     .then(function (result) {
//       promiseTwoResult = result.data;
//       return getPromise(result.data + 1);
//     })
//     .then(function (result) {
//       console.log("First result ", promiseOneResult);
//       console.log("Second result ", promiseTwoResult);
//       console.log("Third result ", result.data);
//     });
// }

// queryPromiseChain();
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

console.log(parent.method()); // 3
// When calling parent.method in this case, 'this' refers to parent

// child is an object that inherits from parent
const child = {
  __proto__: parent,
};
console.log(child.method()); // 3
// When child.method is called, 'this' refers to child.
// So when child inherits the method of parent,
// The property 'value' is sought on child. However, since child
// doesn't have an own property called 'value', the property is
// found on the [[Prototype]], which is parent.value.

child.value = 4; // assign the value 4 to the property 'value' on child.
// This shadows the 'value' property on parent.
// The child object now looks like:
// { value: 4, __proto__: { value: 2, method: [Function] } }
console.log(child.method()); // 5
// Since child now has the 'value' property, 'this.value' means
// child.value instead
