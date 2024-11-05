import React from 'react'

const users = [
  {
    userName: "john_doe",
    userLocation: "New York, USA",
    email: "john.doe@example.com"
  },
  {
    userName: "jane_smith",
    userLocation: "London, UK",
    email: "jane.smith@example.com"
  },
  {
    userName: "ali_khan",
    userLocation: "Karachi, Pakistan",
    email: "ali.khan@example.com"
  },
  {
    userName: "marie_curie",
    userLocation: "Paris, France",
    email: "marie.curie@example.com"
  },
  {
    userName: "akira_yamamoto",
    userLocation: "Tokyo, Japan",
    email: "akira.yamamoto@example.com"
  }
];


const UserInfo = () => {
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
        {users.map((user)=>(
            <ul key={Math.random()*100}>
                <li>{user.userName}</li>
                <li>{user.email}</li>
                <li>{user.userLocation}</li>

            </ul>

        ))}
    </div>
  )
}

export default UserInfo;

// Destructuring in .map(): In this line:
// const UserInfo = () => {
//   return (
//     <div>
//       {users.map(({ userName, email, userLocation }) => (
//         <ul key={userName}>  {/* Use userName as the key for simplicity */}
//           <li>{userName}</li>
//           <li>{email}</li>
//           <li>{userLocation}</li>
//         </ul>
//       ))}
//     </div>
//   )
// }