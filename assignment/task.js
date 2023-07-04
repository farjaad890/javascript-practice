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

function filterData(person) {
  let finalData = {};
  person.map(function (per) {
    // start of map to traverse the whole array
    if (per.name === "Ahmed") {
      // selecting only those person whose name is ahmad
      per.courses.map(function (course, ind) {
        // the start of map to traverse the courses of the selected person
        finalData["title" + `${ind + 1}`] = course.title;
        if (course.topics) {
          //condition to check the if there are topics
          course.topics.map(function (topic, index) {
            finalData["topic" + `${index + 1}`] = topic;
          });
        }
      });
    }
  });
  console.log(finalData, " The final data finalData");
}

filterData(person);
