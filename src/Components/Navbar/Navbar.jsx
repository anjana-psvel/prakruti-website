import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo_white.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true): setSticky(false);
    })
  },[])
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu =()=>{
      mobileMenu? setMobileMenu(false): setMobileMenu(true);

  }

return (
    <nav className={`container ${sticky? 'dark-nav': ""}`}>
        <img src={logo} alt="logo" className="logo" />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            {/* <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li> */}
            <li><Link to='about' smooth={true} offset={-260} duration={500}>About Us</Link></li>
            <li><Link to='works' smooth={true} offset={-150} duration={500}>Works</Link></li>
            
            <li><Link to='members' smooth={true} offset={-200} duration={500}>Members</Link></li>
            <li><Link to='blog' smooth={true} offset={-150} duration={500}>Blog</Link></li>
            <li><Link to='contacts' smooth={true} offset={-260} duration={500}>Contacts</Link></li>
            {/* <li>About Us</li>
            <li>Works</li>
            <li>Members</li>
            <li>Contact Us</li> */}
            {/* <li><button className="btn">Members</button></li> */}
        </ul>
        <img src={menu} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
