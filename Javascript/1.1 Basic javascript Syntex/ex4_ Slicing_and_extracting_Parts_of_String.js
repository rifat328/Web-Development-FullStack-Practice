// slice function
// slice(x,y) 
// x starting position, y end position -1 
// so if slice x= 0 and slice y = 3 
// then result will be 0 to 2nd position element bec it start from 0th position 
// how many charecter? upperBound - lowerBound;
// 4-0=4 cher , 4-1= 3 char

// var myName="rifat";
// alert(myName.slice(0,4));


// var tweet=prompt("Write your tweet here. ");
// alert("you wrote "+tweet.length+" , you have -"+(280-tweet.length)+"charecter left"); // works

// now write a tweet box that can stop at charecter cound 280

// ! shortend version

alert(prompt("Write your tweet here. ").slice(0, 280));

// !? uppercase every char with toUpperCase() and lowercase with toLowercase()
var fullName=prompt("Your name Please");
fullNameUppercase=fullName.toUpperCase();
fullNameLowercase=fullName.toLowerCase();
fullName=fullNameUppercase.slice(0,1)+fullNameLowercase.slice(1,fullName.length);
// ! slice has some trick to it  if Rifat  total length is 5 and it start from 0th lest index
//? so 0 1 2 3 4  in total 5  and if slice (0,4) then 0 as 1 
//?    1 2 3 4   it will count up to programming position 4 if we think oth position as 1st position
alert(fullName);