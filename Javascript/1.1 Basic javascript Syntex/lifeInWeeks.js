function lifeInWeeks(age){
    var maxAge=90;
    var ageLeft=maxAge-age;
    var weekLeft=ageLeft*52;
    var daysLeft=ageLeft*365;
    console.log("you have "+ageLeft+" year , "+weekLeft+" weeks, & "+daysLeft+" days left");
}


lifeInWeeks(prompt("Enter your Current Age"));