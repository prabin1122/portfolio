import React from 'react'
import Imagee from '../aboutimg.png'
import './About.css'
function About() {
  return (
    <div>
        <div class="about">
                <div className='about-info'>
                    <h5>Prabin Karki, a student of BSC.CSIT and Web Developer, is an innovative and creative thinker with great passion for coding. Being a Web Developer and having a keen interest in finding new ways to increase efficiency on websites, I was able to transform my passion into a profession as well.</h5>
                </div>
                <div class="about-img">
                    <img class="" src={Imagee} alt="" className='aboutimg'/>
                </div>
        </div>
    </div>
  )
}

export default About