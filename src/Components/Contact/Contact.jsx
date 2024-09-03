import React from 'react'
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact=()=>{
          
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5546dec4-6e7b-4edb-bca3-3480de6a201c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };



    return(

           <div id='contact' className='contact'>
             <div className="contact-title">
                < h1>Get in touch</h1>
                <img src="src/assets/theme_pattern.svg" alt=""/>
             </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'am Kalpna Rana, currently living in Mohali,phase 7, sector 62 </p>
                       <div className="contact-details">
                        <div className="contact-detail">
                             <img src= "src/assets/mail_icon.svg" alt="" /><p>ranakalpna74@gmail.com</p>
                        </div>
                         
                        <div className="contact-detail">
                        <img src= "src/assets/location_icon.svg" alt="" /><p>62300-46547</p>
                          </div>

                          <div className="contact-detail">
                          <img src= "src/assets/call_icon.svg" alt="" /><p>Mohali, phase 7, sector 62, house no.2134</p>
                        </div>


                       </div>
                </div>
                   <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type= "text" placeholder= 'Enter your name' name= 'name' />
                    <label htmlfor=""> Your Email</label>
                    <input type= "email" placeholder= 'Enter your email' email= 'email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name= "message" roes="8" placeholder= 'Enter your message' ></textarea> 
                    <button type= 'submit' className="contact-submit">Submit now</button>
                   </form>

            </div>

           </div>

    )
}
export default Contact;