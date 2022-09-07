console.log(`L-35 Ajax tutorial in one video`);

const fetchData = () => {
  // Creating XHR object
  let xhr = new XMLHttpRequest();

  // Define xhr
  xhr.open("GET", "https://reqres.in/api/users/116", true);

  //on process what to do
  xhr.onprogress = function () {
    console.log(`Api is loading`);
  };

  //what to do on readystatechange
  xhr.onreadystatechange = function () {
    console.log(`onreadystatechange called`, xhr.readyState);
  };

  //what to do after load
  xhr.onload = function () {
    console.log(`load the request`);
    console.log(this.responseText);
  };

  xhr.send();
};

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", fetchData);

const fetchBtnPostData = () => {
  //creating xhr object

  let xhr = new XMLHttpRequest();

  //define xhr
  xhr.open("POST", "https://reqres.in/api/users", true);

  xhr.getResponseHeader("Content-type", "application/json");

  //while in process what should happen
  xhr.onprogress = function () {
    console.log(`on progress`);
  };

  //on ready state change
  xhr.onreadystatechange = function () {
    console.log("onreadystate change", xhr.readyState);
  };

  //on load what should happen
  xhr.onload = function () {
    console.log(`on load`);
    console.log(this.responseText);
  };

  params = {
    name: "morpheus",
    job: "leader",
  };

  xhr.send(JSON.stringify(params));
};

let fetchBtnPost = document.getElementById("fetchBtnPost");
fetchBtnPost.addEventListener("click", fetchBtnPostData);
