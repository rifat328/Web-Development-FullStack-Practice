

function randomNumberGenerator( input){
    
 
        var randomNumber= Math.floor(Math.random()*100+1);
    if (randomNumber>70){
        alert("your Love Score is "+randomNumber+"% You guys love each other like kaniye loves kaniye ")
    }else{
        alert("your Love Score is "+randomNumber+"%")
    }
}

var userInput=prompt("Enter your name and your partners name..");
randomNumberGenerator(userInput);