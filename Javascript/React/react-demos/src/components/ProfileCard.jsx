import React from 'react'
import { AiFillForward } from "react-icons/ai";
const styles={backgroundColor: 'lightgray', padding:'15px', borderRadius:'8px', color:'black'};
const ProfileCard = () => {
  return (
    <div style={styles}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AiFillForward color='white' size={50} style={{ marginRight: '10px' }} />
        <h1>Why does everything have to be so annoying?</h1>
      </div>
        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Tenetur architecto expedita in omnis amet? Suscipit officia culpa laboriosam corporis! In ad corrupti harum numquam 
        rem mollitia architecto inventore aspernatur explicabo.</h3>
    </div>
  )
}

export default ProfileCard;