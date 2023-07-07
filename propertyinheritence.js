// const parent = {
//   value: 5,
//   getValue() {
//     return this.value;
//   },
// };
// const child = {
//   __proto__: parent,
// };
// child.value = 10;
// console.log(child.getValue());

function Box(value) {
  this.value = value;
}
Box.prototype.getvalue = function () {
  return this.value + 1;
};

let boxes = [new Box(1), new Box(2), new Box(3)];
console.log(boxes[0].getvalue());
