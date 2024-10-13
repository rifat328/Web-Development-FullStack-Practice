  
  
  function checkFirstVisit() {
    if(document.cookie.indexOf('mycookie')==-1) {
      // The cookie doesn't exist. Create it now
      document.cookie = 'mycookie=1';
    }
    else {
      // Not the first visit, so alert
      // alert('You refreshed!');
      var number=randomNumberGenerator();
      if(number.number[0] > number.number[1]){
        //player 1 wins
        document.querySelector(".img1").setAttribute("src",number.img[0]);
        document.querySelector(".img2").setAttribute("src",number.img[1]);
        document.getElementsByTagName("h1")[0].innerHTML="🚩 Player 1 Wins";

      }else if(number.number[0] == number.number[1]){
        //its a Draw.
        document.querySelector(".img1").setAttribute("src",number.img[0]);
        document.querySelector(".img2").setAttribute("src",number.img[1]);
              document.getElementsByTagName("h1")[0].innerHTML=" Draw";
        
      }else{
        //player 2 wins.
        document.querySelector(".img1").setAttribute("src",number.img[0]);
        document.querySelector(".img2").setAttribute("src",number.img[1]);
        document.getElementsByTagName("h1")[0].innerHTML=" Player 2 Wins 🚩";
      }
    }
  }  
  
 function randomNumberGenerator(){
    var number=[];
    var img=[];
    var random_number=Math.floor(Math.random()*6)+1;
     img.push("./images/dice"+random_number+".png");
     number.push(random_number);
    var random_number2=Math.floor(Math.random()*6)+1;
    img.push("./images/dice"+random_number2+".png");
    number.push(random_number2);
    return {number:number, img:img};
 } 
  

  
  
  
  // arr position assign to player 1 , arr 2 position assign to player 2 
  // if position 1 value > position 2 value then player 1 win 
  // or else player 2 wins  
  
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

  
  
  
  
  
  
  
  
  
  
  
  
  
