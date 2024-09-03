import React from 'react';
import './Hero.css';
import user from '../../assets/profile-user-svgrepo-com (1).svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero= () =>{
    return(
        <div id='home' className='hero'>
            <img src="src/assets/profile-user-svgrepo-com (1).svg" alt=""/>

            
              <h1><span>I'm Kalpna Rana,</span> frontend developer based in India.</h1>
              <p>I am a frontend developer from India, Himachal Pradesh and want to work as a Fresher in this proffesion </p>

              <div className='hero-action'>
                <div className='hero-connect'><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
                <div className='hero-resume'>My Resume</div>
              </div>
        </div>
    )
}
export default Hero; 