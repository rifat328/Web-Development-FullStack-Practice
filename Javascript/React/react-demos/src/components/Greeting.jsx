import React from 'react'
const myName="Rifat Hossain";
const Greeting = () => {
  const currentDate=new Date();
    return (
    <div>
    <hr/>
    <h1>Greeting {myName}</h1>
    <p>Today is  {currentDate.getDate()+"/"+currentDate.getMonth()+"/"+currentDate.getFullYear()}</p>
    
    </div>
  )
}

export default Greeting ;