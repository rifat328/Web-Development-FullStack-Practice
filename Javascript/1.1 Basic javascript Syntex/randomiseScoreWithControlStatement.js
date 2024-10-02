

function randomNumberGenerator( input){
    
 
        var randomNumber= Math.floor(Math.random()*100+1);
    if (randomNumber>70){
        alert("your Love Score is "+randomNumber+"% You guys love each other like kaniye loves kaniye ")
    }else if(randomNumber>30 && randomNumber<70){
        alert("your Love Score is "+randomNumber+"% mah maybe maybe not")
    }else alert("your Love Score is "+randomNumber+"% You Guys suck at love making")
}

var userInput=prompt("Enter your name and your partners name..");
randomNumberGenerator(userInput);