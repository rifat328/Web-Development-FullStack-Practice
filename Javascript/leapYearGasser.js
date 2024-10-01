

function leapYear(year){
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        alert("It's a leap year");
    } else {
        alert("It's not a leap year");
    }
}

var leapYearCheck = parseInt(prompt("Enter the year to check if it is a leap year or not ...."));
leapYear(leapYearCheck);
