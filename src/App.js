
import './App.css';
import About from './Components/About';
import CardContainer from './Components/CardContainer';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Title from './Components/AboutTitle';
import SkillsTitle from './Components/SkillsTitle.js'
import Sidebar from './Components/Sidebar';
import Skill from './Components/Skill';
import Blog from './Components/Blog';
import BlogTitle from './Components/BlogTitle'


function App() {
  
  return (
    <div className="App">
      <div className='Toop'>
        <div className="Header">
          <div className='Intro'><Header /></div>  
        </div>
        <div className='Sidebar'>
          <div><Sidebar/></div>
        </div>
        
      </div>
      <div className='Bodyy'>
        <div className='Portfolio' id='Work'><Portfolio /></div>
        <div className='po' ><CardContainer/></div>
        <div id='about'><Title/></div>
        <div className='about'><About/></div>
        <div id='skill'><SkillsTitle /></div>
        <div><Skill /></div>
        <div id='blog' ><BlogTitle/></div>
        <div><Blog/></div>
      </div>
    </div>
  );
}

export default App;
