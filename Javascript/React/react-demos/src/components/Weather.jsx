import React from 'react'

const Weather = ({temperature}) => {
    let message;
        if(temperature<15){
            message= <h2> "its cool Outside"</h2>;
        }else if(temperature>=15 && temperature <=25){
            message= <h2> It's Nice Outside!!</h2>;
        }else {message= <h2>its Hot Outside!  ! !</h2>;
         }
  return (
    <div>
    <h2>Weather</h2> {message}
    <hr/>
    </div>
  )
}

export default Weather;