console.log(`L-22 Project 1: Magic Notes`);
console.log(`L-26 Project 1: Magic Notes`);
console.log(`L-29 Project 1: Magic Notes`);

//extracting notes from local storage
let notesLocalStorage = localStorage.getItem("notes");
let notesObj;
if (notesLocalStorage === null) {
  notesObj = [];
} else {
  notesObj = JSON.parse(notesLocalStorage);
}

showNotes();

//Add Notes
let addNote = document.getElementById("addNote");
addNote.addEventListener("click", (event) => {
  let inputTitle = document.getElementById("noteTitle");
  let inputContent = document.getElementById("inputNoteContent");

  //   let notesLocalStorage = localStorage.getItem("notes");
  //   let notesObj;
  //   if (notesLocalStorage === null) {
  //     notesObj = [];
  //   } else {
  //     notesObj = JSON.parse(notesLocalStorage);
  //   }
  let elementObj = {
    title: inputTitle.value,
    content: inputContent.value,
  };
  notesObj.push(elementObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  inputTitle.value = "";
  inputContent.value = "";
  console.log(`notesObj ${notesObj}`);
  showNotes();
});

//function to show notes
function showNotes() {
  //   let notesLocalStorage = localStorage.getItem("notes");
  //   let notesObj;
  //   if (notesLocalStorage === null) {
  //     notesObj = [];
  //   } else {
  //     notesObj = JSON.parse(notesLocalStorage);
  //   }

  let html = "";
  notesObj.forEach((element, index) => {
    html += `
    <div class="card my-2 mx-2" id="noteCard" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Note ${element.title}</h5>
      <p class="card-text" id="note-content">
       ${element.content}
      </p>
      <button id=${index} onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
    </div>
  </div>
    `;

    //in the onclick funtion we have passed function deleteNote with parameter "this.id" this parameter will read id of the button, which we have passed as index
  });

  let noteContainer = document.getElementById("noteContainer");
  if (notesObj.length != 0) {
    noteContainer.innerHTML = html;
  } else {
    noteContainer.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

//Delete Note
const deleteNote = (index) => {
  console.log(`deleteNote :: index ${index}`);
  //   let notesLocalStorage = localStorage.getItem("notes");
  //   let notesObj;
  //   if (notesLocalStorage === null) {
  //     notesObj = [];
  //   } else {
  //     notesObj = JSON.parse(notesLocalStorage);
  //   }

  notesObj.splice(index, 1);
  console.log(`notesObj delete ${notesObj}`);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
};

//search function
let search = document.getElementById("search");
search.addEventListener("input", () => {
  //input event is triggered when keyboard buttons are pressed
  let cardNode = document.getElementsByClassName("card");
  Array.from(cardNode).forEach((element) => {
    let contentNode = element.getElementsByTagName("p")[0];
    console.log(`search :: contentNode :: ${contentNode}`);
    if (contentNode.innerText.includes(search.value.toLowerCase())) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
