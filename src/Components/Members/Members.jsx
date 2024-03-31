import React from 'react'
import './Members.css'
import {Details} from '../../Helpers/Details'
import Card from '../Card/Card'

const Members = () => {
  return (
    <div className="team members">
    <div className="center">
    {/* <h1>Our Team</h1> */}
    <div className="team-content">
    {Details.map((box, id)=>{
                return (<Card 
                key={id} 
                name={box.name} 
                role={box.role}
                image={box.image} 
                dept={box.dept}
                phone={box.phone} 
                linkedin={box.linkedin}
                />);
            })}

    </div>

    </div>
      
    </div>
  )
}

export default Members
