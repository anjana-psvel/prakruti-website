import React from 'react'
import './Card.css'

const Card = ({image,name, role, phone, dept, linkedin }) => {
  return (
    <div className="box">
    <img className="member" src={image} alt=""/>
    <h3>{name}</h3>
    <h5>{role}</h5>
    <p>{phone}</p>
    <p>{dept}</p>
    <div className="icons">
        <a href={linkedin}><i class="ri-linkedin-box-fill"></i></a>
    </div>
    </div>
  )
}
export default Card
