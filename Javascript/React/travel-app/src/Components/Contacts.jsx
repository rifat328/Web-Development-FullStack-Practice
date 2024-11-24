import React from 'react'
import '../Styles/contacts.css'
const Contacts = ({img,name,alt,mail,phone}) => {
  return (
    <article className="contact-card">
            <img
                src={img}
                alt={alt}
            />
            <h3>{name}</h3>
            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>{mail}</p>
            </div>
        </article>
  )
}

export default Contacts