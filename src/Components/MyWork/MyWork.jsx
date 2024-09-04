 /*import React from 'react';
import './MyWork.css';
//import theme_pattern from '../../assets/theme_pattern.svg'
//import mywork_data from '../../assets/mywork_data.js'
//import arrow_icon from '../../assets/arrow_icon.svg'



const MyWork=() =>{
    return(
        <div id="work" className="mywork">
             <div className="mywork-title">
         <h1>My latest Work</h1>
         <img src="/assets/theme_pattern.svg"alt=""/>
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
/*import React from 'react';
import './MyWork.css';
import mywork_data from '../../mywork_data';

const MyWork = () => {
    return (
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src="/assets/theme_pattern.svg" alt="Theme Pattern" />
            </div>

            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <img key={index} src={work.w_img} alt={work.title} />
                ))}
            </div>

            <div className="mywork-showmore">
                <p>Show More</p>
                <img src="/assets/arrow_icon.svg" alt="Arrow Icon" />
            </div>
        </div>
    );
}

export default MyWork;*/



import React from 'react';
import './MyWork.css';
import mywork_data from '../../mywork_data';

const MyWork = () => {
    return (
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src="/assets/theme_pattern.svg" alt="Theme Pattern" />
            </div>

          
          
          <div className='mywork-container'>
  {mywork_data.map((work, index) => (
    <a 
      key={index} 
      href={work.w_link} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div className="work-item">
        <img src={work.w_img} alt={work.w_name} />
        <p>{work.w_name}</p>
      </div>
    </a>
  ))}
</div>

         


            <div className="mywork-showmore">
                <p>Show More</p>
                <img src="/assets/arrow_icon.svg" alt="Arrow Icon" />
            </div>
        </div>
    );
}

export default MyWork;



