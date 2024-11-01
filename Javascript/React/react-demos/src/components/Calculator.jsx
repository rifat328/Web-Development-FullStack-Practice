import React from 'react'

const add=(n1,n2)=>{
    return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

const Calculator = () => {
  return (
    <div>
        <h3> Simple Calculator</h3>

        <ul>
            <li>{add(1, 2)}</li>
            <li>{multiply(2, 3)}</li>
            <li>{subtract(7, 2)}</li>
            <li>{divide(5, 2)}</li>
        </ul>
    </div>
  )
}

export default Calculator;
export { add, multiply, subtract, divide };


