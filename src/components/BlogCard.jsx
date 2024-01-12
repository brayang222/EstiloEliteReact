import React from 'react'
import { RiExternalLinkFill } from "react-icons/ri"

const BlogCard = ({imgURL, ctg, title, info, linkURL}) => {
  return (
      <div className="blog-card">
        <div className="blog-card-img">
          <img src={imgURL} alt={title} />
          <a href={linkURL} className='blog-card-link' target='blank_'>
            <RiExternalLinkFill className="blog-link"/></a>
        </div>
        <div className="blog-card-dtl">
          <p>{info}</p>
          <h5>{ctg}</h5>
          <h4>{title}</h4>
        </div>
      </div>
    )
}

export default BlogCard