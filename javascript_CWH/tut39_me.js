console.log(`L-39 Practice for promises`);

let students = [
  { name: "Harry", subject: "Python" },
  { name: "Mike", subject: "Javascript" },
];

function enrollStudent(student) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      students.push(student);
      console.log(`Student enrolled successfully`);

      let error = true;
      if (!error) {
        resolve();
      } else {
        reject("error happened");
      }
    }, 5000);
  });
}

function getStudents() {
  setTimeout(() => {
    let str = "";
    let studentList = document.getElementById("students");
    students.forEach(function (student) {
      str += `<li>${student.name}</li>`;
    });
    studentList.innerHTML = str;
  }, 3000);
}

let newStudent = { name: "sunny", subject: "go" };
enrollStudent(newStudent)
  .then(getStudents)
  //   .then(function (message) {
  //     getStudents();
  //     console.log("Resolve method", message);
  //   })
  .catch(function (error) {
    console.log(`Reject method`, error);
  });
// getStudents();
