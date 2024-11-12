import React from 'react'
import { MdAdminPanelSettings } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
const UserStatus = ({loggedIn,isAdmin}) => {
    let message;
    if(loggedIn && isAdmin){
        return <div><h1>Welcome Admin ! !</h1> <MdAdminPanelSettings /> </div>
    }
    else return <div><FaRegUser size={150}/>  <h1>"Welcome Normal User ! !"</h1></div>

}

export default UserStatus;