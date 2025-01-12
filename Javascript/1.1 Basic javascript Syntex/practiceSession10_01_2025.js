// variable declare with let can't be redeclare within the same scope

// <----Javascript Objects---->

const car = { type: "Fiat", model: "500", color: "white" };
const carArray = [
  { type: "Fiat", model: "500", color: "white" },
  { type: "Fiat", model: "500", color: "white" },
];
let human = ["rifat", "gorardim"];
// console.log(typeof carArray);  type = object
// console.log(typeof car);  type = object
// console.log(typeof human);   type = object

// can also be initialize like this
// Create an Object
const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

// console.log(person.firstName);
// console.log(person["lastName"]);
// console.log(person.fullName);

// ! Objects are mutable: They are addressed by reference, not by value.

//! If person is an object, the following statement
//! will not create a copy of person:
//! const x = person;
//! The object x is not a copy of person. The object x is person.

//! The object x and the object person share the same memory address.

//! Any changes to x will also change person:

person.age = 26;
person.eyeColor = "black";
person.eyeDesise = "dry Eye";

// console.log(person);
// const x = person;
// console.log(x);
// x.age = 27;
// console.log(x);
// The delete keyword deletes a property from an object:

// console.log(person);
delete person.eyeDesise;
// console.log(person);

person.myCar = {
  car1: "ford Mastand",
  car2: "KonigZeg Guara",
  car3: "Toyota Land Cruser",
};

console.log(person.myCar.car2);
console.log(person["myCar"]["car2"]);
// myObj = {
//   name: "John",
//   age: 30,
//   myCars: {
//     car1: "Ford",
//     car2: "BMW",
//     car3: "Fiat",
//   },
// };
console.log("Nested Objecet ------");

// Object methods are actions that can be performed on objects.

// `How Does the Wrapper Work?
// When you call a method on a primitive type, JavaScript temporarily creates an object wrapper to provide access to the prototype methods and properties of the corresponding object type.

// Example:
// javascript
// Copy code
// const str = "hello";
// console.log(str.toUpperCase()); // Outputs: "HELLO"
// Behind the Scenes:
// When you call str.toUpperCase(), JavaScript:

// Wraps the primitive "hello" into a String object.
// Executes the method toUpperCase() on the String object.
// Discards the wrapper object after the operation is complete.
// Internally:

// javascript
// Copy code
// const temp = new String("hello"); // Temporary wrapper
// const result = temp.toUpperCase();
// temp = null; // Wrapper discarded
// This mechanism applies to:

// String
// Number
// Boolean
// Symbol
// BigInt
// What’s in the Prototype Chain?
// The prototype chain is how JavaScript looks up properties and methods. Each object has a prototype, and JavaScript checks the prototype for the requested method or property if it's not found on the object itself.

// Example: String.prototype
// When you call a string method:

// javascript
// Copy code
// const str = "hello";
// str.toUpperCase(); // Uses String.prototype.toUpperCase
// JavaScript looks for toUpperCase on the String wrapper object.
// If not found, it checks String.prototype.
// If still not found, it moves up the chain to Object.prototype.
// Do All Primitives Have Prototype Objects?
// No, primitives themselves do not have prototype objects because they are not objects. However:

// When you try to access a property or method on a primitive, JavaScript automatically wraps it in a corresponding object wrapper, which does have a prototype.
// Example:
// "hello" → String wrapper → String.prototype
// 42 → Number wrapper → Number.prototype
// Do Arrays Belong to the Object Data Type?
// Yes, arrays belong to the object data type.

// Explanation:
// In JavaScript, arrays are objects with special behavior for handling indexed elements.
// The typeof operator confirms this:
// javascript
// Copy code
// console.log(typeof []); // Outputs: "object"
// Array Prototypes:
// Arrays have their own prototype, Array.prototype, which provides array-specific methods like push, pop, and map.

// Array Example:
// javascript
// Copy code
// const arr = [1, 2, 3];
// arr.push(4); // Uses Array.prototype.push
// arr is an object with its prototype set to Array.prototype.
// The array inherits array-specific methods and properties from Array.prototype.
// What Belongs to the Object Data Type If Arrays Do?
// In JavaScript, everything except primitives belongs to the object data type. This includes:

// Regular objects ({})
// Arrays ([])
// Functions
// Dates
// Errors
// User-defined classes
// Anything created using new
// Prototype Chain of an Array
// An array's prototype chain looks like this:

// Array object → inherits methods from Array.prototype.
// Array.prototype → inherits methods from Object.prototype.
// Object.prototype → root of all objects in JavaScript.
// Example:
// javascript
// Copy code
// const arr = [1, 2, 3];
// console.log(arr.hasOwnProperty("length")); // true
// hasOwnProperty is not an Array method but is inherited from Object.prototype.
// Key Points:
// Wrapper Objects: Primitives (like strings and numbers) are temporarily wrapped into their corresponding object types (String, Number) to access methods.
// Prototype Chain: Objects and their wrappers inherit properties and methods from their prototypes.
// Arrays: Arrays are special objects and inherit from Array.prototype, which in turn inherits from Object.prototype.
// Object Data Type: Everything except primitives (string, number, etc.) belongs to the object data type.
// Would you like to dive deeper into prototypes or object inheritance?`;

// 11/01-2025 January.
// object display
let text = "";
for (let x in person) {
  if (
    person.hasOwnProperty(x) &&
    typeof person[x] !== "function" &&
    person[x] !== person.myCar
  ) {
    text += person[x] + " ";
  }
}

console.log(text);
console.log("-----------take 2");
// const myObjValue = Object.values(person);
// console.log(myObjValue);

// object.entries(object) makes it easier to use obj in loops
const products = {
  miniSpeaker: 500,
  ArduinoLearningKit: 1300,
  AppleMagSafeCharger: 2500,
};

for (let [product, sellingPrice] of Object.entries(products)) {
  console.log(`Name: ${product} -- Soled: ${sellingPrice}`);
}

//JSON.stringify()
console.log(JSON.stringify(person));

//
function Phone(company, model, releaseDate, price) {
  this.companyName = company;
  this.modelNumber = model;
  this.releaseDate = releaseDate;
  this.price = price;
  this.language = "English"; // default value
}

const myPhone = new Phone("Apple", "Iphone 15 Pro Max", "2024", "160,000");
console.log(
  `My Phone: ${myPhone.companyName} ${myPhone.modelNumber}, Bought at ${myPhone.price} `
);

console.log(myPhone.language);

myPhone.manufectured = "Singapor";
console.log(myPhone.manufectured);
// JavaScript has built-in constructors for all native objects:
// new Object()   // A new Object object
// new Array()    // A new Array object
// new Map()      // A new Map object
// new Set()      // A new Set object
// new Date()     // A new Date object
// new RegExp()   // A new RegExp object
// new Function() // A new Function object

//! Asynchronous Javascript

setTimeout(myFunction, 3000);

function myFunction() {
  console.log("I love You !!");
}
