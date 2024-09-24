function bmiCalculator(weight, height){
    var bmi=weight/(height*height);
    return bmi;
}


var weight=65;
var height=1.8;
console.log(bmiCalculator(weight,height));