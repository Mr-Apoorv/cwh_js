console.log(`L-37 Practice for callback function`);

let students = [
  { name: "Harry", subject: "Python" },
  { name: "Mike", subject: "Javascript" },
];

function enrollStudent(student, callback) {
  setTimeout(() => {
    students.push(student);
    console.log(`Student enrolled successfully`);
    callback();
  }, 5000);
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
enrollStudent(newStudent, getStudents);
// getStudents();
