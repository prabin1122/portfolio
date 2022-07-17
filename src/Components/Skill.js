import React from 'react'
import './Skill.css'
function Skill() {
    
  return (
    <div className='skilll'>
       <div class="container">
            <div class="col">
                <h2 class="titulo">Technical</h2>
                <ul class="skill">
                <li><span class="blueline html"></span><em>HTML</em></li>
                <li><span class="blueline css"></span><em>CSS</em></li>
                <li><span class="blueline node"></span><em>Node JS</em></li>
                <li><span class="blueline javascript"></span><em>Javascript</em></li> 
                <li><span class="blueline jquery"></span><em>jQuery</em></li>
                </ul>
            </div>
                <div class="col">
                <h2 class="plataformas titulo">Professional</h2>
                <ul class="skill">
                <li><span class="greenline wordpress"></span><em>Wordpress</em></li>
                <li><span class="greenline prestashop"></span><em>Prestashop</em></li>
                <li><span class="greenline joomla"></span><em>Joomla</em></li>
                <li><span class="greenline blogger"></span><em>Blogger</em></li>
                <li><span class="greenline tridion"></span><em>Tridion</em></li>
                </ul>
            </div>
                <div class="col">
                <h2 class="programas titulo">Software</h2>
                <ul class="skill">
                <li><span class="redline dreamweaver"></span><em>Dreamweaver</em></li>
                <li><span class="redline illustrator"></span><em>Illustrator</em></li>
                <li><span class="redline photoshop"></span><em>Photoshop</em></li>
                <li><span class="redline premiere"></span><em>Premiere</em></li>
                <li><span class="redline flash"></span><em>Flash</em></li>
                </ul>
            </div>
    </div>
    </div>
  )
}

export default Skill