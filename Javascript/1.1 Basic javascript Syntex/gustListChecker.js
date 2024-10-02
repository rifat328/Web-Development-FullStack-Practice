var userInput=prompt("Enter Your Name .."); 
let guestList=["angela","Hau","rifat","hossain"];

function guestListChacker(name){
    if( guestList.includes(name) == true){
        alert("You Are Invited :: Congratulation");
    }else alert("!! Sorry Not Invited");
}
 //arr.push(), arr.pop()
guestListChacker(userInput);