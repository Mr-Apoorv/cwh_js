console.log("This is tutorial 44");

//Whenever an error is thrown, javascript will block any further execution of code

// Pretend this is coming from a server as response
let a = "Harry bhai";
a = undefined;
if (a != undefined) {
  throw new Error("This is not undefined");
} else {
  console.log("This is undefined");
}

//if you manaully want to throw an error which will block/stop the further code execution for that we use "throw"

// try catch blocks are used so that whenever error is received it can be handled and if error is in try catch block it won't stop further execution of remaining code

//finally - code received inside finally will always be executed, no matter if we get error or not i.e it will be executed regardless of try block running or catch block running

try {
  null.console;
  console.log("We are inside try block");

  functionHarry();
} catch (error) {
  console.log(error); //will console complete error
  console.log("Are you okay?");
  console.log(error.name); // will console only the error name - example - Reference error, type error
  console.log(error.message); // will console only the error message - example - function xyz is not defined
} finally {
  console.log("Finally we will run this");
}
