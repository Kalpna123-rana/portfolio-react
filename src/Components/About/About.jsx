/* import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import user from '../../assets/profile-user-svgrepo-com (1).svg';

const About=() =>{
    return(
        <div id='about' className='about'>
           <div className="about-title">
            <h1>About Me</h1>
            <img src="src/assets/theme_pattern.svg" alt=""/>
           </div>
           <div className="about-sections">
            <div className="about-left">
                <img src= "src/assets/profile-user-svgrepo-com (1).svg" alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an Fresher Frontend Developer with an over 6 month of experience from Excellence Technology</p>
                    <p>My passion from Fontend Development is not only reflection in my extensive but also is the enthusiasm and dedication I bring to each project </p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML </p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>CSS</p><hr style={{width: "60%"}} /></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width: "50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: "40%"}} /></div>
                </div>
            </div>
           </div>
           <div className="about-achievements">
            <div className="about-achievement">
                <h1>FRESHER</h1>
                <p>NEW TO THIS FIELD</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>2+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>FRESHER</h1>
                <p>NO CLIENTS YET</p>
            </div>
           </div>
        </div>
    )
}
export default About;    */


import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src="/assets/theme_pattern.svg" alt="Theme Pattern"/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src="/assets/profile-user-svgrepo-com (1).svg" alt=""/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Fresher Frontend Developer with over 6 months of experience from Excellence Technology.</p>
                        <p>My passion for Frontend Development is reflected not only in my experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML</p><hr style={{width: "70%"}} /></div>
                        <div className="about-skill"><p>CSS</p><hr style={{width: "60%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width: "50%"}} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width: "40%"}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>FRESHER</h1>
                    <p>NEW TO THIS FIELD</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>FRESHER</h1>
                    <p>NO CLIENTS YET</p>
                </div>
            </div>
        </div>
    );
};

export default About;
