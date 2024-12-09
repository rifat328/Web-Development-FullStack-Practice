import React from 'react'
import { FaMapPin } from "react-icons/fa6";
const Entry = (props) => {
  return (
    <div>
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.img.src} 
                    alt={props.img.alt} 
                />
            </div>
            <div className="info-container">
                <FaMapPin className='marker' color='black'/>
                <span className="country"><strong>{props.country}</strong> </span>
                <a href={props.googleMapLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.date}</p>
                <p className="entry-text">{props.locationInfo}</p>
            </div>
            
        </article>
    </div>
  )
}

export default Entry