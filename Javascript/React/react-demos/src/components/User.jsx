import React from 'react'

function User(props) {
  return (
    <div>
        
            <ul>

                <h2>{props.userName}</h2>
                <img src={props.img} alt="lorium picsum random image"/>
                <li>{props.userEmail}</li>
                <li>{props.userLocation}</li>
                <li>{props.userClass}</li>
                <li>{props.userSpending}</li>
                <li>{props.userAge}</li>
                <li>{props.isMarried}</li>


            </ul>


        
    </div>
  )
}

export default User;