var userInput=parseInt(prompt("Enter How Many number you want to Generate.."));
function randomNumberGenerator( input){
 const numbers= [];
  for (let i=0;i <input; i++){
    var randomNumber= Math.floor(Math.random()*10+1);
    numbers[i]=randomNumber;
  }
  for (let i=0;i <numbers.length; i++){
    alert("Random Numbers: "+numbers[i]);
  }
   

}

randomNumberGenerator(userInput);
