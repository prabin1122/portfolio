import React from 'react'
import './Blog.css'
function Blog() {
  return (
    <div className='blogg'>
        <div className='blog-container'>
            <div className='blog-containhc'>
               
               <h3>Html & CSS </h3> <hr/>
               <h1>What are the fundamentals of Html and CSS?</h1>
               <h5>Learn how to build Web sites using HTML5 and basic CSS, directly from W3C, creator of the latest Web standards.</h5>
           </div>
            <div className='blog-containjs'>
                <h3>JavaScript</h3><hr/>
                <h1>The fundamentals of JavaScript</h1>
                <h5>We want to make this open-source project available for people all around the world. Help to translate the content of this tutorial to your language!</h5>
            </div>
            <div className='blog-containhc'>
               
                <h3>Html & CSS </h3> <hr/>
                <h1>Importance of Html & Css in Web Development.</h1>
                <h5>HTML and CSS are the skeleton and styling of the website.</h5>
            </div>
            
        </div>
        <div className='blog-container2'>
            <div className='blog-containrj'>
                <h3>React JS</h3><hr/>
                <h1>Fundamentals of ReactJS</h1>
                <h5>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </h5>
            </div>
            <div className='blog-containrj'>
                <h3>React JS</h3><hr/>
                <h1>Importance of ReactJS</h1>
                <h5>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </h5>
            </div>
        </div>
    </div>
  )
}

export default Blog