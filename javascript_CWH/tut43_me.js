console.log(`L-43 Async await in Javascript`);

async function callGetData() {
  console.log(`inside call data`);
  let url = "https://reqres.in/api/users?page=2";
  let response = await fetch(url);
  let users = response.json();
  //   let dataObject = "hello world";
  return users;
}

// callGetData().then(function (data) {
//   console.log(data);
// });

async function callPostData() {
  console.log(`inside call data`);
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
  let response = await fetch(url, params);
  let users = response.json();
  //   let dataObject = "hello world";
  return users;
}

callPostData().then(function (data) {
  console.log(data);
});
