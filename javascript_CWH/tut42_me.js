console.log(`L-42 Fetch API request`);

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", postData);

function getData() {
  console.log("inside get data");
  let url = "https://reqres.in/api/users?page=2";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

function postData() {
  console.log("inside post data");
  let url = "https://reqres.in/api/users";
  let data = {
    name: "morpheus",
    job: "leader",
  };
  let params = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), //data should always be sent in string format
  };
  fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
