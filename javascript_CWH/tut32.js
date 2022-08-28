console.log("L-32 Library Class Implementation Exercise 4");
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library {
  constructor(bookList) {
    this.bookList = bookList;
    this.issuedBooks = {};
  }

  getBookList() {
    this.bookList.forEach((element) => {
      console.log(element);
    });
    return this.bookList;
  }

  issueBook(bookName, user) {
    if (this.issuedBooks[bookName] === undefined) {
      this.issuedBooks[bookName] = user;
      console.log(`Book - ${bookName} issued successfully to ${user}`);

      this.bookList.forEach((element, index) => {
        if (element === bookName) {
          let removedBookName = this.bookList.splice(index, 1);
          console.log(removedBookName);
          console.log(`Book issued - ${element} ${index}`);
        }
      });
    } else {
      console.log(`Book is already issued`);
    }
  }

  returnBook(bookName) {
    delete this.issuedBooks[bookName]; //delete the key value pair from the object
    console.log(`book is returned successfully`);
    this.bookList.push(bookName);
  }
}

/*
Run below commands and test in console

harryLib=new Library(["one piece", "naruto", "dragon ball z"]);
harryLib.getBookList()
harryLib.issueBook("naruto", "Apoorv")
harryLib.getBookList()
harryLib.issueBook("naruto", "sonu")
harryLib.issueBook("one piece", "sonu")
harryLib.getBookList()
harryLib.returnBook("naruto");
harryLib.getBookList()
harryLib.issueBook("naruto", "sonu")
harryLib.getBookList()
harryLib.returnBook("naruto");
harryLib.issuedBooks
harryLib.returnBook("one piece");
harryLib.getBookList()
*/
