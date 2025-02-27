import React from 'react';
import './Skill.css';
import HTML_Logo from '../img/HTML5_logo_and_wordmark.svg.png'
import CSS_Logo from '../img/CSS3_logo_and_wordmark.svg.png'
import JS_Logo from '../img/JavaScript-Logo.png'
import REACT_Logo from '../img/react-logo.png'
import VITE_Logo from '../img/Vitejs-logo.svg.png'
import GIT_Logo from '../img/git.logo.png'
import GITHUB_Logo from '../img/github logo.png'
import FIGMA_Logo from '../img/Figma-logo.svg.png'
import CANVA_Logo from '../img/canva-logo.png'

const Skill = () => {
  return (
    <div>
      <section id='Skill'>
      <div className='Skill-container'>
      <h1 className='Skill-name'>Skill</h1>
      <div className='Skill-row'>
      <div className="Skill-detail">
      <p><strong>Front-end Development:</strong> HTML, CSS, JavaScript</p>
      <div className="Skill-img">
      <img className='HTML-logo' src={HTML_Logo} />
      <img className='CSS-logo' src={CSS_Logo} />
      <img className='JS-logo' src={JS_Logo} />
      </div>
      </div>
      <div className="Skill-detail">
      <p><strong>Frameworks & Tools: </strong>React, Vite</p>
      <div className="Skill-img">
      <img className='REACT_Logo' src={REACT_Logo} />
      <img className='VITE_Logo' src={VITE_Logo} />
      </div>
      </div>
      <div className="Skill-detail">
      <p><strong>Version Control:</strong> Git,GitHub</p>
      <div className="Skill-img">
      <img className='GIT_Logo' src={GIT_Logo} />
      <img className='GITHUB_Logo' src={GITHUB_Logo} />
      </div>
      </div>
      </div>
      <div className="Skill-detail">
      <p><strong>Other Tools:</strong> Figma, Canva</p>
      <div className="Skill-img">
      <img className='FIGMA_Logo' src={FIGMA_Logo} />
      <img className='CANVA_Logo' src={CANVA_Logo} />
      </div>
      </div>


      
                        
                      
      </div>
      </section>
    </div>
  );
}
export default Skill;
