console.log(`L-25 Creating an Editable Div Exercise 2`);

/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

let localStorVal = localStorage.getItem("textVal");
console.log(`localStorVal ${localStorVal}`);

let divElement = document.createElement("div");
let divText;
if (localStorVal === null) {
  divText = document.createTextNode("Double Click here to edit text");
} else {
  divText = document.createTextNode(localStorVal);
}
divElement.id = "elem";
divElement.style.border = "1px solid blue";
divElement.style.width = "50%";
divElement.style.minHeight = "50px";

divElement.appendChild(divText);

let containerNode = document.querySelector(".container");
let firstEleNode = document.getElementById("myfirst");
containerNode.insertBefore(divElement, firstEleNode);

let clickCount = 0;
//Easy method -
divElement.addEventListener("click", () => {
  clickCount = clickCount + 1;
  console.log(`clickCount ${clickCount}`);
  if (clickCount === 1) {
    divElement.setAttribute("contentEditable", true);
  }
});

divElement.addEventListener("blur", () => {
  clickCount = 0;
  divElement.setAttribute("contentEditable", false);
  localStorage.setItem("textVal", divElement.innerHTML);
  console.log(`dasdasd ${clickCount}`);
});

//CWH method -
// divElement.addEventListener("click", () => {
//   clickCount = clickCount + 1;
//   console.log(`clickCount ${clickCount}`);
//   let textAreaNode;
//   if (clickCount === 1) {
//     let html = divElement.innerHTML;
//     textAreaNode = `<textarea row="5" col="10" id="textArea" class="textArea" style="width: 95%; height: 100%">${html}</textarea>`;
//     divElement.innerHTML = textAreaNode;
//     console.log(`textAreaNode text ${textAreaNode.innerHTML}`);
//   }

//   let textarea = document.getElementById("textArea");
//   textarea.addEventListener("blur", () => {
//     clickCount = 0;
//     // console.log(`textAreaNode text ${divElement.innerHTML}`);
//     // divElement.innerHTML = "";
//     divElement.innerHTML = textarea.value;
//     localStorage.setItem("textVal", divElement.innerHTML);
//   });
// });
