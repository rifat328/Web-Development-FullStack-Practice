function fizBuz() {

    let i = 0;
    let output = [];
    while(i < 100){
        if(i % 3 == 0 && i % 5 == 0){
            output.push("Fiz-Buzz");
        }
        else if(i % 3 == 0){
            output.push("Fiz");
        }
        else if(i % 5 == 0){
            output.push("Buzz");
        }
        else {
            output.push(i);
        }
        i += 1;
    }
}

// Calling fizBuz multiple times
fizBuz();
console.log(output); // Outputs the array from 0 to 99
