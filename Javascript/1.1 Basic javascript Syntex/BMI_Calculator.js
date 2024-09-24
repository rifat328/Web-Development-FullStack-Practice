function bmiCalculator(weight, height){
     var bmi=weight/ Math.pow(height,2);    // (height*height);
    return Math.round(bmi);
}


var weight=65;
var height=1.8;
console.log(bmiCalculator(weight,height));