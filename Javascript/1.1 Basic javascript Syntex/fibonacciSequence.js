function fibonacciSequence(n){
    var count=0;
    let arr=[0,1];
    if(n==1){
        return arr[0];

    }else if(n==2){
        return arr2[arr[0],arr[1]];
    }else{
        for( i=2;i<n;i++){
           arr.push(arr[i-1]+arr[i-2]) ;
        }
    }
    
    console.log(arr);
}

let userInput=parseInt(prompt("enter How many fibonacci number you want::  ")) ;
fibonacciSequence(userInput);

// for( i=0;i<n;i++){
//     if(arr.length<1){
//         arr[0+1]=1;
//     }else if(i !== 0 ){
//         arr.length
//     }
    
// }