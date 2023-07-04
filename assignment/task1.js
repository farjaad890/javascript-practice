const person = [
  {
    name: "Alice",
    age: 30,
    religion: "Islam",
    courses: [
      {
        title: "Science",
        pages: 50,
      },
      {
        title: "Science-1",
        pages: 50,
        topics: ["topic-1", "topic-2"],
      },
    ],
  },
  {
    name: "Bob",
    age: 40,
    religion: "Hindu",
    courses: [
      {
        title: "Biology",
        pages: 50,
      },
      {
        title: "Biology-1",
        pages: 50,
        topics: ["topic-1", "topic-2"],
      },
    ],
  },
  {
    name: "Ahmed",
    age: 50,
    religion: "Islam",
    courses: [
      {
        title: "Maths",
        pages: 50,
      },
      {
        title: "Maths-1",
        pages: 50,
        topics: ["topic-1", "topic-2"],
      },
    ],
  },
];
let finalData = {};
// filter the person of name Ahmed
let personData = person.filter(function (current) {
  if (current.name == "Ahmed") {
    return current;
  }
});

//console.log(personData);
// getting the personcourses
for (let i = 0; i < personData[0].courses.length; i++) {
  finalData["title" + i] = personData[0].courses[i].title;
}
//console.log(finalData);

personData[0].courses.forEach(function (course) {
  if (course.topics) {
    course.topics.forEach(function (topic, index) {
      finalData["topics" + `${index + 1}`] = topic;
    });
    //console.log(course.topics);
  }
});

console.log(finalData);
//getting the person topics
