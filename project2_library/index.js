console.log(`Project 2 - Library using class`);

class Book {
  constructor(bookName, author, type) {
    this.bookName = bookName;
    this.author = author;
    this.type = type;
  }
}

class Display {
  loadData() {
    console.log(`Load data function`);
    let bookList = JSON.parse(localStorage.getItem("bookList"));
    let books;
    if (bookList === null) {
      books = [];
    } else {
      books = bookList;
    }

    return books;
  }

  load() {
    console.log(`display load function`);
    let tableBody = document.getElementById("tableBody");

    let books = this.loadData();
    books.forEach((element, i) => {
      let uiString = `<tr>
                        <td><button id="deleteButton" onclick="handleDelete(${i})">Delete</button></td>
                        <td>${element.bookName}</td>
                        <td>${element.author}</td>
                        <td>${element.type}</td>
                    </tr>           `;

      tableBody.innerHTML += uiString;
    });
  }

  //Add book details in the UI table
  add(book) {
    console.log(`book add function`);
    tableBody.innerHTML = "";
    // let uiString = `<tr>
    //                     <td><button onclick="Display.handleDelete()">Delete</button></td>
    //                     <td>${book.bookName}</td>
    //                     <td>${book.author}</td>
    //                     <td>${book.type}</td>
    //                 </tr>           `;

    // let tableBody = document.getElementById("tableBody");
    // tableBody.innerHTML += uiString;
    let books = this.loadData();
    books.push(book);
    localStorage.setItem("bookList", JSON.stringify(books));
    this.load();
  }

  //   handleDelete(index) {
  //     console.log(`Delete button pressed`);
  //     let bookList = JSON.parse(localStorage.getItem("bookList"));
  //     let books;
  //     if (bookList === null) {
  //       books = [];
  //     } else {
  //       books = bookList;
  //     }
  //     let newBooks = [];
  //     books.forEach((element, i) => {
  //       if (i !== index) {
  //         newBooks.push(element);
  //       }
  //     });
  //     localStorage.setItem("bookList", JSON.stringify(newBooks));
  //     this.load();
  //   }

  //clear form after submit
  clear() {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
  }

  validate(book) {
    if (book.bookName.length > 2 && book.author.length > 2) {
      return true;
    } else {
      false;
    }
  }

  alertShow(alertType, message) {
    let alert = document.getElementById("alert");
    let alertHTML = `<div class="alert alert-${alertType} alert-dismissible fade show" role="alert">
                        <strong>${
                          alertType === "success" ? "Success" : "Warning"
                        } :</strong> ${message}
                        fields below.
                        <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                        ></button>
                    </div>`;

    alert.innerHTML = alertHTML;
    setTimeout(() => {
      alert.innerHTML = ``;
    }, 3000);
  }
}

// function handleDelete() {
//   console.log(`Delete button pressed`);
// }

// function handleDelete(index) {
//   console.log(`Delete button pressed`);
//   et bookList = JSON.parse(localStorage.getItem("bookList"));
//     let books;
//     if (bookList === null) {
//       books = [];
//     } else {
//       books = bookList;
//     }
//   let newBooks = [];
//   books.forEach((element, i) => {
//     if (i !== index) {
//       newBooks.push(element);
//     }
//   });
//   localStorage.setItem("bookList", JSON.stringify(newBooks));
//   let tableBody = document.getElementById("tableBody");
//   tableBody.innerHTML = "";
//   books.forEach((element, i) => {
//     let uiString = `<tr>
//                       <td><button id="deleteButton" onclick="handleDelete(${i})">Delete</button></td>
//                       <td>${element.bookName}</td>
//                       <td>${element.author}</td>
//                       <td>${element.type}</td>
//                   </tr>           `;

//     tableBody.innerHTML += uiString;
//   });
// }

let display = new Display();

display.load();

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  console.log(`Form submit button clicked`);

  //Form input fields value
  let bookName = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;

  //How to check which radio button is selected and how to store final value in a variable
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  console.log(
    `form input fields value, BookName - ${bookName}, Author - ${author}, type - ${type}`
  );

  let book = new Book(bookName, author, type);
  console.log("book", book);

  let display = new Display();
  //   display.load();

  if (display.validate(book)) {
    display.add(book);
    display.clear();
    console.log("success    ");
    display.alertShow("success", "Book added successfully");
  } else {
    console.log("Input values cannot be less than 2 char");
    display.alertShow("warning", "Input values cannot be less than 2 char");
  }

  console.log(display);

  event.preventDefault();
}

{
  /*
Console of an object
 console.log("book" + book);
 console.log(`book ${book}`);

 Above two patterns won't show object and array completely in console, they will come in string from [object object]

 ==> Use below syntax to get object in console 
 console.log("book", book);
 console.log(book);
 console.table(book);
*/
  /*
to make table scrollable

you can wrap the content of the <tbody> in a scrollable <div> :

html

....
<tbody>
  <tr>
    <td colspan="2">
      <div class="scrollit">
        <table>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$80</td>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$80</td>
          </tr>
          ...
css

.scrollit {
    overflow:scroll;
    height:100px;
}
*/
}
