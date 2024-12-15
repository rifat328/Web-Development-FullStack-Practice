import React from "react";
import { FaMapPin } from "react-icons/fa6";
const Entry = (props) => {
  return (
    <div>
      <article className="journal-entry">
        <div className="main-image-container">
          <img
            className="main-image"
            src={props.entry.img.src}
            alt={props.entry.img.alt}
          />
        </div>
        <div className="info-container">
          <FaMapPin className="marker" color="black" />
          <span className="country">
            <strong>{props.entry.country}</strong>
          </span>
          <a href={props.entry.googleMapLink} target="_blank">
            View on Google Maps
          </a>
          <h2 className="entry-title">{props.entry.title}</h2>
          <p className="trip-dates">{props.entry.date}</p>
          <p className="entry-text">{props.entry.text}</p>
        </div>
      </article>
    </div>
  );
};

export default Entry;
