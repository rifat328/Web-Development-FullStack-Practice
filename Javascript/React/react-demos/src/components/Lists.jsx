import React from 'react'

const numbers=[1,2,3,4,5];

const Lists = () => {
  return (
    <div>
        {numbers.map((number)=>(
            <ul key={number}>
                <li>{number}</li>
            </ul>
        ))}
    </div>
  )
}

export default Lists;

// In JavaScript, a callback function is simply a function passed
// into another function as an argument.
//  map requires a callback function that it will execute 
//  for each element in the array.
//! ---------------------------------------------------
// In JavaScript arrow functions, you can omit curly braces
//  if the function has only one expression and if you want to
//   implicitly return that expression. When you use parentheses (),
//  JavaScript knows that whatever is inside should be returned 
//  directly. The parentheses tell JavaScript to return the entire <ul> ... </ul> structure directly without needing return.
//!
// If you used curly braces {} instead, you’d need an explicit
//  return statement:
//  numbers.map((number) => {
//   return (
//     <ul key={number}>
//       <li>{number}</li>
//     </ul>
//   );
// })

// 4. Why is there (number) inside the map method?
// In JavaScript, the callback function provided to map automatically
//  receives the current element of the array as its first parameter,
//   which is called number here. This parameter represents each item
//    in the array (1, 2, 3, etc.) as map iterates through numbers.
