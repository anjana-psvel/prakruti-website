import React from 'react'
import './BlogCard.css'

const BlogCard = ({heading,link, desc, date, image}) => {
  return (
    <div className="card">
    <img className="art-img left" src={image} alt=""/>
    <div className="right">
    <a href={link} target="_blank"><h2>{heading}</h2></a>
    <h4>{desc}</h4>
    <p>{date}</p>
    </div>
    </div>
  )
}
export default BlogCard
