//Constructor for person class
function Person(Name, Age, Gender) {
  this.Name = Name;
  this.Age = Age;
  this.Gender = Gender;
}
//constructor for Student class
function Student(uni, major, name, age, gender) {
  Person.call(this, name, age, gender);
  this.University = uni;
  this.Major = major;
}
//adding a introduce function to Person object
Person.prototype.introduce = function () {
  console.log(
    `Hi my name is ${this.Name} i am ${this.Age} years old my gender is ${this.Gender}`
  );
};

Student.prototype = Person.prototype;

//adding courses list to Student object
Student.prototype.courses = [];

//adding enroll courses function to Student object
Student.prototype.enrollCourses = function (course) {
  this.courses.push(course);
};
//adding get courses function to Student object
Student.prototype.getCourses = function () {
  console.log(this.courses);
};

let farjaad = new Student("UCP", "BSCS", "Farjaad", 20, "male");
farjaad.introduce();
farjaad.enrollCourses("ITC");
farjaad.getCourses();
