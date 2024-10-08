/*import Rect, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/icons8-logo-48.png';
import nav_underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
const Navbar = () =>{

          const [menu,setMenu] = useState("home");
          const menuRef = useRef();
          
          const openMenu = () => {
            menuRef.current.style.right="0";
          }

          const closeMenu = () => {
            menuRef.current.style.right="-350px";
          }

    return(
        <div className='navbar'>
        <img src="src/assets/icons8-logo-48.png"alt=""/>
        <img src="src/assets/menu_open.svg" onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul  ref={menuRef} className="nav-menu">
             <img src="src/assets/menu_close.svg" onClick={closeMenu} alt="" className="nav-mob-close" />
          <li><AnchorLink className="anchor-link" href="#home"><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==='home'?<img src={nav_underline}alt=''/>:<></>}</li>
          <li><AnchorLink className="anchor-link" href="#about"><p onClick={() => setMenu('about')}>About</p></AnchorLink>{menu === 'about'? <img src={nav_underline} alt='' />:<></>}</li>
          <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>setMenu('services')}>Services</p></AnchorLink>{menu==='services'?<img src={nav_underline}alt=''/>:<></>}</li>
          <li><AnchorLink className="anchor-link"  offset={50} href="#work"><p onClick={()=>setMenu('work')}>Portfolio</p></AnchorLink>{menu==='work'?<img src={nav_underline}alt=''/>:<></>}</li>
          <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu==='contact'?<img src={nav_underline}alt=''/>:<></>}</li>

        </ul>
        <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div> 
       
        </div>
    )
}

export default Navbar; */



import React, { useRef, useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  };

  return (
    <div className='navbar'>
      <img src="/assets/icons8-logo-48.png" alt="Logo"/>
      <img src="/assets/menu_open.svg" onClick={openMenu} alt="Menu Open" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src="/assets/menu_close.svg" onClick={closeMenu} alt="Menu Close" className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' && <img src="/assets/nav_underline.svg" alt='' />}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#about">
            <p onClick={() => setMenu('about')}>About</p>
          </AnchorLink>
          {menu === 'about' && <img src="/assets/nav_underline.svg" alt='' />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu('services')}>Services</p>
          </AnchorLink>
          {menu === 'services' && <img src="/assets/nav_underline.svg" alt='' />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu('work')}>Portfolio</p>
          </AnchorLink>
          {menu === 'work' && <img src="/assets/nav_underline.svg" alt='' />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>
          {menu === 'contact' && <img src="/assets/nav_underline.svg" alt='' />}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
