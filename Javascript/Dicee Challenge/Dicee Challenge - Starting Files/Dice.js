  
  
  function checkFirstVisit() {
  if(document.cookie.indexOf('mycookie')==-1) {
    // The cookie doesn't exist. Create it now
    document.cookie = 'mycookie=1';
  }
  else {
    // Not the first visit, so alert
    // alert('You refreshed!');
    var number=randomNumberGenerator();
  }
}
  
 function randomNumberGenerator(){
    var number=[];
    var random_number=Math.floor(Math.random()*7)+1;
     number.push("dice"+random_number+".png");
    var random_number2=Math.floor(Math.random()*7)+1;
    number.push("dice"+random_number2+".png");
    return number;
 } 
  
 var number=randomNumberGenerator();
  
  
  
  
  
//   function randomNumberGenerator() {
//     var number = [];
    
//     var random_number = Math.floor(Math.random() * 7); // Random number between 0 and 6
//     number.push("dice" + random_number + ".png"); // Add dice image name to the array

//     var random_number2 = Math.floor(Math.random() * 7); // Another random number between 0 and 6
//     number.push("dice" + random_number2 + ".png"); // Add the second dice image name to the array

//     return number; // Return the array with two image names
// }

// // Call the function and store the result
// var number = randomNumberGenerator();

// // Now you can see the result in the console
// console.log(number);

  
  
  
  
  
  
  
  
  
  
  
  
  
