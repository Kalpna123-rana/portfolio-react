/* import React from 'react';
import './Footer.css';
import logo from '../../assets/icons8-logo-48.png';
import user_icon from '../../assets/user_icon.svg';

const Footer=()=>{
    return(
            <div className="footer">
                <div className="footer-top">
                       <div className="footer-top-left">
                        <img src="src/assets/icons8-logo-48.png" alt= "" />
                        <p>I am a frontend developer from, India, Himachal Pradesh, district=Kangra, tehsil=Kundian, Pincode=176055, and a fresher to this field </p>

                    </div>
                    <div className="footer-top-right">
                        <div className="footer-email-input">
                            <img src="src/assets/user_icon.svg" alt="" />
                            <input type= "email" placeholder="Enter your email" />
                        </div>

                        <div className="footer-subscribe" >Subscribe</div>
                    </div>

                </div>
                 <hr/>
                 <div className="footer-bottom">
                   <p className="footer-bottom-left">2024 .All right reserved</p>
                    <div className="footer-bottom-right">
                        <p>Term of Service</p>
                        <p>Privacy Policy</p>
                        <p>Connect with me</p>
                    </div>
                 </div>
            </div>

    )
}
export default Footer;  */
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src="/assets/icons8-logo-48.png" alt="Logo" />
                    <p>
                        I am a frontend developer from India, Himachal Pradesh, district Kangra, and a fresher to this field.
                    </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src="/assets/user_icon.svg" alt="User Icon" />
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">2024. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
