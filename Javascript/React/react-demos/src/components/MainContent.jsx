import Greet from "./Greet";
import Add from "./Add";

import React from 'react'

const MainContent = () => {
  return (
    <main>
        <Greet/>
        <Add/>
        <h3 className="Popular-char">Popular Character </h3>

        <ol contentEditable='true' style={{textAlign:'center',paddingInlineStart: '0',listStylePosition: 'inside',}}>
            <li >banglavai</li>
            <li>Kaissa Vai </li>
            <li>shushu vai</li>
        </ol>
    </main>
  )
}

export default MainContent;