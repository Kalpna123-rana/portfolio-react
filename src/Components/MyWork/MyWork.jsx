/* import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'


const MyWork=() =>{
    return(
        <div id="work" className="mywork">
             <div className="mywork-title">
         <h1>My latest Work</h1>
         <img src="src/assets/theme_pattern.svg"alt=""/>
             </div>

          <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return<img key={index} src={work.w_img} alt="" />
            })}
          </div>
             <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
             </div>

        </div>
    )
}
export default MyWork; */

import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data.js';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
    return (
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt=""/>
            </div>

            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    if (index === 0) {
                        // Add a link to the first image (GitHub project)
                        return (
                            <a key={index} href="https://github.com/Kalpna123-rana/ecommerce-app" target="_blank" rel="noopener noreferrer">
                                <img src={work.w_img} alt={work.w_name} />
                            </a>
                        );
                    }
                    return <img key={index} src={work.w_img} alt={work.w_name} />;
                })}
            </div>

            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
    );
};

export default MyWork;
