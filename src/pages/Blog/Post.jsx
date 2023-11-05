import React from 'react'
import "./Blog.css";
import { Link } from 'react-router-dom';
function Post({ blog, key }) {
    return (
        <Link to={'/read/${blog.id}'} className='post-link'>
            <div className='blog'>
                <img className='blog-image' src={blog.thumbnail} />
                <div className='blog-title'>
                    <h2>{blog.title}</h2>
                </div>
                <p className='date'>10 October 2023</p>
                <p className="detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates in enim blanditiis quo laboriosam iste est maxime commodi, assumenda quos.

                </p>





            </div>
        </Link>
    )
}
export default Post