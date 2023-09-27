import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/R-white.png';
import Menu from '../../assets/menu.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll'

const Navbar = () => {
    const [showMenu,setshowMenu] =useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo' />
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>AboutMe</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-15} duration={500} className='desktopMenuListItem'>Contact</Link>
            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contactPage').scrollIntoView({ behavior: 'smooth' })
            }}>
                <img src={contactImg} alt='' className='desktopMenuImg' />Contact Me
            </button>
            <img src={Menu} alt='Logo' className='mobMenu' onClick={()=>setshowMenu(!showMenu)}/>
            <div className='navMenu' style={{display:showMenu?'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setshowMenu(!showMenu)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setshowMenu(!showMenu)}>AboutMe</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'  onClick={()=>setshowMenu(!showMenu)}>Portfolio</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-15} duration={500} className='ListItem' onClick={()=>setshowMenu(!showMenu)} >Contact Me</Link>
            </div>
        </nav>
    )
}

export default Navbar