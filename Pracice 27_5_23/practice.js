function myPeragraph2(){
    document.getElementById('demo3').innerHTML='This is my other pearagraph';
    document.getElementById('demo3').style.color='blueviolet';
    document.getElementById('demo3').style.display='block';
    

}
document.write(5+6);
alert(10+11);
console.log(100+99)
function printPage(){
    print();
}
// * this is me
// ? this is me
// ! this is me
// this is me
//! vs code extension better comment


//? difference between var and let 
var x=20; //* declare variable
var y=20;
let z=x+y; //* declare block variable
//? what is const?
const q=60; //* declare constant variable

//? conditional statements :
if(z==20){
    const m=20;
}
//* same goes for switch 

//* for makes a block of statement to be executed in a loop
//* function declare a function
//* return exits a function
//* try catch  : to impliment error handling

//? what is Literals ? : it means fixed values
//* 2 types of variable in javascript fixed & variable
//* we can pass literals onto innerHTML=10.24 oor 1022

//? what is an expression :
5*10;
//* its a combination of values , variables and operators which computes to a value.
var n='Rifat'+''+'Hossain';

//* javascript identifiers
var _sajid='sajid';
var $Hossain='hossain';
var Abdulla='abdullah';
var abuBakkar='abu bakkar';
//* it is case sensitive  
var firstName;
var firstname;
//* are not the same variable.
//? Pascal case : FirstName, LastName, InterCity 
//? Lower camel case: firstName, lastName, interCity
//? js uses UniCode character sets that covers almost all characters like symbols, punctuations etc.
/* JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const */
//* ex 01:
u=20;
i=30;
o=40;
//* ex 02:
var j=6; k=7; var l=8;

const price1 = 5;
const price2 = 6;
let total = price1 + price2;
/*The two variables price1 and price2 are declared with the const keyword.

These are constant values and cannot be changed.

The variable total is declared with the let keyword.

The value total can be changed.  */

let carName='volvo';
document.getElementById('demo4').innerHTML=carName;
let CarName1='toyota',CarName2='volvo';
var nName='rifat';
var nName;
let mName='rifat';
// let mName; can not re declare with let and const
console.log(nName);
let X=2+3+'5';
let Y="5"+5+5;
console.log(X);
console.log(Y);
let MM=40;
console.log(MM);
//? below : block scope.
{
    let MM=30;
    let y=500;
    let z=MM+y
    console.log(z);


}
console.log(MM);

/*  JavaScript Hoisting.

Variables defined with let are also hoisted to the top of the block, but not initialized.

Meaning: Using a let variable before it is declared will result in a ReferenceError:
carName = "Saab";
let carName = "Volvo";  */
//? const : variable defided with const can't be reassigned or redeclared
//* JavaScript const variables must be assigned a value when they are declared:
const PI = 3.14159265359;

/* Use const when you declare:

A new Array
A new Object
A new Function
A new RegExp 

It does not define a constant value.
It defines a constant reference to a value.

Because of this you can NOT:
Reassign a constant value
Reassign a constant array
Reassign a constant object

But you CAN:

Change the elements of constant array
Change the properties of constant object
*/
const cars=['toyota','volvo','audi'];
cars[0]='subaru';
cars.push('BMW')
console.log(cars);

const car={Brand:'BMW',Color:'Phantom Black', carOwner:'AbulHossain'}
car.carOwner='Rifat Hossain';
console.log(car);
//! but we cant reassign them fully
//! car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
//* Block Scope of const
const xx=10;console.log(xx);
{
const xx=20; console.log(xx);   //? block scope work same as let
}
console.log(xx);
//Redeclaring an existing var or let variable to const, in the same scope, is not allowed:
/* 
var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
const x = 2;   // Not allowed
}

{
const x = 2;   // Allowed
const x = 2;   // Not allowed
} 

Reassigning an existing const variable,
in the same scope, is not allowed:

const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}
*/
const NN=2**2; //? ** means exponent ;
console.log(NN);

/* 
Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator

*/
console.log('Zebra' < 'apple'); 
//* Adding two numbers, will return the sum,
//* but adding a number and a string will return a string:
/*
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;

----- Logical Operators------
Operator	Description
&&	logical and
||	logical or
!	logical not

JavaScript Type Operators
Operator	Description
typeof	Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type
*/
 typeof(NN)
console.log(typeof(NN));
console.log(x||=Y);

/*  
JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date
*/
//? Numbers
const height=22,width=22;
let area= height * width;
console.log('area ='+area);

//? string:
let ycolor='yellow'
console.log(ycolor);

//? Booleans
let bValue= true;
console.log(bValue);

//? objects
const person={firstName:'Rifat',lastName:'Hossain', fullName:function(){ return this.firstName+""+this.lastName;}};
console.log(person.firstName +' '+ person.lastName);

//? Array objects:
const Branded_cars=['Pourcha 911','Mercedise G Wagan '];
console.log(Branded_cars);

//? Date Object:
const date=new Date("2023-06-3");
console.log(date);

//? BigInt : large number
let BigNumber1=BigInt("123456789012345678901234567890");
let BigNumber2=BigInt(123456789012345678901234567890);
console.log(BigNumber1);
console.log(BigNumber2); //! showing different result 

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  };
  
  let value = toCelsius; //? will return the function since no () used.

console.log(person.fullName());
//prompt("what is your name?");

//!--Objects Done, up next Events --> String Template ---------------------------------------------------------------------------

function headChange(){
    Document.getElementById('main_head').innerHTML="test data";
    Document.getElementById('form_1').innerHTML.style.display="block";
}

//? Events :
/* 
onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page


*/
//? Event Handlers :can be used to handle and verify user input, user actions, and browser actions
//! --> js strings and scape charecters
let text="ABCDEFGH\"IJKL\"MNO\\PQRSTUVWXTYZ";
console.log(text.length);
console.log(text);
console.log("hello \n dolly")
console.log("hello \b dolly")
console.log("hello \f dolly")
console.log("hello \r dolly")
console.log("hello \t dolly")
console.log("hello \v dolly")

//? string methods :
//? extracting a string Part : 

let text2= text.slice(2,7);
let text3= text.substring(2,7);
let text4= text.substr(2,7);
console.log(text);
console.log(text2);
console.log(text3);
console.log(text4);

let text12 = "Please visit Microsoft!";
let newText = text12.replace("Microsoft", "W3Schools");  // by default replace method is case sensitive
console.log(newText);
// to make replace method insencitive use regx in it . example:

let text11="Please visit Microsoft!";
let newText2=text11.replace(/MICROSOFT/i,"Rifat's den ");
console.log(newText2);

//? all the strings are imutable thay dont change the original string.

let text13="Please visit Microsoft! and Microsoft! Microsoft! Microsoft ! ";
let newText3=text13.replace(/MICROSOFT/ig,"Rifat's den ");
console.log(newText3);
//? trim method remove whitespaces ......................................................................
let text10 = "      Hello World!      ";
let text9 = text10.trim();

/* 
ECMAScript 2019 added the String method trimStart() to JavaScript.

The trimStart() method works like trim(), but removes whitespace only from the start of a string.

ECMAScript 2019 added the string method trimEnd() to JavaScript.

The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

The padStart() method pads a string from the start
let text = "5";
let padded = text.padStart(4,"0");

Pad a string with "x" until it reaches the length 4:

let text = "5";
let padded = text.padStart(4,"x");

let text = "5";
let padded = text.padEnd(4,"0");


The charAt() method returns the character at a specified index (position) in a string:
let text = "HELLO WORLD";
let char = text.charAt(0);

The charCodeAt() method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).


let text = "HELLO WORLD";
let char = text.charCodeAt(0);

ECMAScript 5 (2009) allows property access [ ] on strings:
let text = "HELLO WORLD";
let char = text[0];


A string can be converted to an array with the split() method:

Example
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe

*/

//! next --> JS String Search 