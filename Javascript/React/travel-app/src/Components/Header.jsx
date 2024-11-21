import React from 'react'
import '../Styles/header.css'
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
const Header = () => {
  return (
    <div className='Main-content'>
        <HiGlobeAsiaAustralia size={'6rem'} style={{marginRight:'0.5rem',paddingTop:'1rem'}}/>
        <h1>My Travel Journal</h1>
    </div>
  )
}

export default Header