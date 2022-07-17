import React from 'react'
import'./Sidebar.css'
import Imagee from '../prabin.JPG'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-info'>
        <div className='myimg'>
            <img class="" src={Imagee} alt="" className='Myimg'/>
        </div>
        <div className='MyName'>
            <h2>Prabin Karki</h2>
        </div>
        <div className='MyName'>
            <h4>Web Developer</h4>
        </div>
        </div>
        <div className='link-btn'>
            <a href='#about'><h5 className='linkk'>About</h5></a>
            <a href='#Work'><h5 className='linkk'>Work</h5></a>
            <a href='#skill'><h5 className='linkk'>Skills</h5></a>
            <a href='#blog'><h5 className='linkk'>Blog</h5></a>
            <a href='#'><h5 className='linkk'>Contact</h5></a>
        </div>
    </div>
  )
}

export default Sidebar