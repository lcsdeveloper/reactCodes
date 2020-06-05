import additionFunction from "./sum";
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

// function messageFunction(name, weather) {
//   let message = "hello, Lucas";
//   if (weather === "sunny") {
//     let message = "it is a nice day";
//     console.log(message);
//   } else {
//     let message = "it is " + weather + " today";
//     console.log(message);
//   }
//   console.log(message);
// }
// messageFunction("lucas","raining");

// function myFunction(name) {
//   let myLocalVar = "sunny";
//   let innerFunction = function () {
//     return "hello " + name + " today is " + myLocalVar + ".";
//   };
//   return innerFunction();
// }
// console.log(myFunction("Lucas"));

// function messageFunction(weather){
//   let message = `it is ${weather} today`;
//   console.log(message);
// }
// messageFunction("raining");

// let daysInWeek = 7;
// let pi=3.14;
// let hexValue = 0xffff;

// let name = "lucas";

// if (name === "lucas") {
//   console.log("name is lucas");
// } else if (name === "lisa") {
//   console.log("name is lisa");
// } else {
//   console.log("name is neither lucas or lisa");
// }

// name="lisa";

// switch (name) {
//   case "lisa":
//     console.log("name is lisa");
//     break;
//   case "lucas":
//     console.log("name is lucas");
//     break;
//   default:
//     console.log("name is neither lucas or lisa");
//     break;
// }

// let firstVal = 5;
// let secondVal = "5";

// if (firstVal === secondVal) {
//   console.log("they are the same");
// } else {
//   console.log("they are NOT the same");
// }

// let myData0 = 5 + 5;
// let myData1 = (5).toString() + String(5);
// let myData2 = 5 + "5";

// console.log("result 0: " + myData0);
// console.log("result 1: " + myData1);
// console.log("result 2: " + myData2);

// let firstVal = "5";
// let secondVal = "5";

// let result = Number(firstVal) + Number(secondVal);
// console.log("result " + result);

// let myArray = new Array();
// myArray[0] = 100;
// myArray[1] = "lucas";
// myArray[2] = true;

// let myArray = [100, "lucas", true];
// console.log(`index 0: ${myArray[0]}`);
// myArray[0] = "tuesday";
// console.log(`index 0: ${myArray[0]}`);

// myArray.forEach((value, index )=> console.log(`index${index}: ${value}`));

// function printItems(numValue, stringValue, boolValue) {
//   console.log(`number ${numValue}`);
//   console.log(`string ${stringValue}`);
//   console.log(`boolean ${boolValue}`);
// }

// let myArray = [100, "lucas", true];

// printItems(myArray[0],myArray[1],myArray[2]);
// printItems(...myArray);

// let myOtherArray=[200,"bob",false,...myArray];
// myOtherArray.forEach((value,index)=>console.log(`Index ${index}: ${value}`))

// let products = [{
//     name: "hat",
//     price: 24.5,
//     stock: 10
//   },
//   {
//     name: "kayak",
//     price: 289.99,
//     stock: 1
//   },
//   {
//     name: "soccer ball",
//     price: 10,
//     stock: 0
//   },
//   {
//     name: "running shows",
//     price: 116.50,
//     stock: 20
//   },
//   {
//     name: "real madrid t-shirt",
//     price: 100.30,
//     stock: 11
//   }
// ];

// let totalValue = products.filter(item => item.stock > 0).reduce((prev, item) => prev + (item.price * item.stock), 0);

// console.log(`total value: $${totalValue.toFixed(2)}`);

// let myData = new Object();
// myData.name = "lucas";
// myData.weather="sunny";
// console.log(`hello ${myData.name}`);
// console.log(`today is ${myData.weather}`);
// let name= "Lucas";
// let myData = {
//   name,
//   weather: "sunny"
// };

// let myData ={
//   name: "lucas",
//   weather: "sunny",
//   printMessage:()=>{
//     console.log(`hello ${myData.name}`);
//     console.log(`today is ${myData.weather}`);
//   }
// };
// myData.printMessage();

// class MyData {
//   constructor() {
//     this.name = "lucas";
//     this.weather = "sunny";
//   }

//   printMessage = () => {
//     console.log(`hello ${this.name}`);
//     console.log(`today is ${this.weather}`);
//   };
// }
// let myData = new MyData();
// myData.printMessage();

// // let myData1 ={};
// // Object.assign(myData1,myData);
// let myData1 = { ...myData, weather: "raining" };
// console.log(`myData: ${myData.weather}, mydata1: ${myData1.weather}`);

// const myData = {
//   name: "bob",
//   location: {
//     city: "paris",
//     country: "france",
//   },
//   employment: {
//     title: "manager",
//     dept: "sales",
//   },
// };

// function printDetails({name, location:{city}, employment:{title}}) {
//   console.log(`Name: ${name}, City: ${city}, Role: ${title}`)
// };

// printDetails(myData)
// let values = [10,20,30,40,50];

// let total = additionFunction(values);

// console.log(`total: ${total}`)