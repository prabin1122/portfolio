import React from 'react'
import './Header.css'
import Audio from'./Audio.js'
function Header() {
  return (
    <div className='TEEEXT'>
        <div className="text-zone">
                
                <h1 className="hii"><span class="name">H</span><span class="name">i</span><span class="name">,</span>  <br/> <span class="name">I</span><span class="name">'</span><span class="name">m </span>
                <span className="name"><span class="name">P</span><span class="name">r</span><span class="name">a</span><span class="name">b</span><span class="name">i</span><span class="name">n</span></span>, 
                <br/><span class="namee"><span class="namee">W</span><span class="namee">e</span><span class="namee">b </span></span><span class="namee"><span class="namee">D</span><span class="namee">e</span><span class="namee">v</span><span class="namee">e</span><span class="namee">l</span><span class="namee">o</span><span class="namee">p</span><span class="namee">e</span><span class="namee">r</span></span>
                </h1><br/>
                <span>
                <p class="gray-text">Front End Developer / Wordpress Expert</p>
                </span>
                <br/>
        </div>

        <div className='AudioButton'><Audio/></div>
        
    </div>
  )
}

export default Header