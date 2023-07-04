const students = [
  { name: "Sara", age: 24, subject: ["math", "science", "urdu"] },
  { name: "John", age: 24, subject: ["science", "urdu"] },
  { name: "Jack", age: 25, subject: ["math", "urdu"] },
];

const sentences = [
  "a b c d e f f f f f f f f f f f",
  "This is the first sentence.",
  "The second sentence is shorter.",
  "This is the third and longest sentence in the array.",
];

//This function is to find the student name of the given subject using filter
function findStudentswithFilter(students, subject) {
  let studentArray = [];
  //This is to traverse each student in the arry
  students.filter(function (stu) {
    //This is to traverse each element of the subject array in each selected student
    stu.subject.filter(function (sub) {
      //the condition to match the subject
      if (sub === subject) {
        //if condition true pushing the student name into student array
        return studentArray.push(stu.name);
      }
    });
  });
  console.log(studentArray);
}

//This function is to find the student name of the given subject using for Each
function findStudents(students, subject) {
  let studentsArray = [];
  //This is to traverse each student in the arry
  students.forEach((student) => {
    //This is to traverse each element of the subject array in each selected student
    for (subject of student.subject) {
      //the condition to match the subject
      if (subject === "math") {
        //if condition true pushing the student name into student array
        studentsArray.push(student.name);
      }
    }
  });
  console.log(studentsArray);
}

// fubction to find the information about the array of sentences
function sentenceInformation(sentences) {
  let information = {}; //empty object to store information
  information["totalLength"] = sentences.length; //number of sentences in the array
  let totalWords = 0; //variable
  let maxSentence = {}; //variable object
  let minSentence = {}; //variable object

  //loop to traverse each element of the sentence array
  sentences.forEach((sentence, index) => {
    //splitting each sentence by words
    let eachSentence = sentence.split(" ");
    //console.log(eachSentence);
    //calculating the total length of sentences by words
    totalWords = totalWords + eachSentence.length;
    //to find the shortest and the longest sentence
    //if index is zero set default values
    if (index == 0) {
      //setting default value of maxSentence[length] with length of the first sentence
      maxSentence["length"] = eachSentence.length;
      console.log(maxSentence["length"]);
      //setting default value of maxSentence[index] with index of the first sentence
      maxSentence["index"] = index;
      //setting default value of minSentence[length] with length of the first sentence
      minSentence["length"] = eachSentence.length;
      //setting default value of maxSentence[index] with index of the first sentence
      minSentence["index"] = index;
    } else {
      //condition to find the longest sentence
      if (maxSentence["length"] < eachSentence.length) {
        maxSentence["length"] = eachSentence.length;
        maxSentence["index"] = index;
      }
      //condition to find the shortest sentence
      if (minSentence["length"] > eachSentence.length) {
        minSentence["length"] = eachSentence.length;
        minSentence["index"] = index;
      }
    }
  });
  //storing values in the infomation object
  information["averageLength"] = totalWords / information.totalLength;
  information["maxSentence"] = `The longest sentence is sentence number ${
    maxSentence.index + 1
  } `;
  information["minSentence"] = `The shortest sentence is sentence number ${
    minSentence.index + 1
  } `;
  console.log(information);
}

//function calls
sentenceInformation(sentences);
findStudentswithFilter(students, "math");
findStudents(students, "math");
