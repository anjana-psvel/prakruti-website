import React from 'react'
import './Blog.css'
import BlogCard from '../BlogCard/BlogCard'
import {Articles} from '../../Helpers/Articles'

const Blog = () => {
  return (
    <div className="contents">
    <div className="stuff">
    <div className="deets">
    {Articles.map((card, id)=>{
                return (<BlogCard 
                key={id} 
                heading={card.heading} 
                desc={card.desc}
                link={card.link}
                image={card.image} 
                date={card.date}
                />);
            })}

    </div>

    </div>
      
    </div>
  )
}

export default Blog
