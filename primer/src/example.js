// console.log("hello");
// console.log("Apples");
// console.log("This is a statement");
// console.log("this is also a statement");

// function myFunction () {
//   console.log("this is a statement inside a function");
// };
// console.log("this is a statement outside a function");
// myFunction();

// function myFunction(name, weather ="raining", ...extraArgs) {
//   console.log("Hello  " + name + ".");
//   console.log("it is " + weather + " today");
//   for (let i = 0; i < extraArgs.length; i++) {
//       console.log("extra Arg: "+extraArgs[i])
//   }
// }
// myFunction("Lucas","Cloudy");
// myFunction("Lisa");
// myFunction("Adam","sunny","one","two","three")

// function myFunction(name) {
//   return "hello " + name + ".";
// }
// console.log(myFunction("lucas"));

// function myFunction(nameFunction) {
//   return "hello " + nameFunction() + ".";
// }

// function printName(nameFunction, printFunction) {
//   printFunction(myFunction(nameFunction));
// }

// printName(function () {
//   return "Lucas";
// }, console.log);

// const myFunction = (nameFunction) => "hello " + nameFunction() + ".";
// const printName = (nameFunction, printFunction) =>
//   printFunction(myFunction(nameFunction));

// printName(function () {
//   return "Lucas";
// }, console.log);

function messageFunction(name, weather) {
  let message = "hello, Lucas";
  if (weather === "sunny") {
    let message = "it is a nice day";
    console.log(message);
  } else {
    let message = "it is " + weather + " today";
    console.log(message);
  }
  console.log(message);
}
messageFunction("lucas","raining");
