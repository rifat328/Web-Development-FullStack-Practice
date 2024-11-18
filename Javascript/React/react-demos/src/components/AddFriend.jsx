import React from 'react'
import { useState } from 'react'
const AddFriend = () => {
  const [friends,setFriend]=useState(['mnm','byjus']); 
  const addFriend=()=>setFriend([...friends,'Rifat Hossain']);
  const removeFriend=()=>setFriend(friends.filter((f)=>f != 'byjus'));
    return (
    <div>
        {friends.map((f)=>(
            <li key={Math.random}>{f}</li>
        ))}
        <button onClick={addFriend}>Add Friends</button>
        <button onClick={removeFriend}>Remove Friend</button>
    </div>
  )
}

export default AddFriend;