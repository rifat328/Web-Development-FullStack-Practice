// given a box that can hold 280 charecter
// like twitter but also shows 
// how many charecter did you write 
// and how many are left out of 280 in a negative context

var tweet=prompt("Write your tweet here. ");
alert("you wrote "+tweet.length+" , you have -"+(280-tweet.length)+"charecter left"); // works