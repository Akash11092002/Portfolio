import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/name.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_icon from '../../assets/menu_icon.png';
import menuopen from '../../assets/menuopen.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='logo' height={80} width={100} />
      
      <img 
        src={menuopen} 
        alt='open menu' 
        className='nav-mob-open' 
        onClick={toggleMenu} 
        height={80}
        width={80}
      />

      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <img 
          src={menu_icon} 
          alt='close menu' 
          className='nav-mob-close' 
          onClick={toggleMenu} 
          height={80}
          width={80}
          
        />
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#home' onClick={toggleMenu}>
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about' onClick={toggleMenu}>
            About me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services' onClick={toggleMenu}>
            Services
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work' onClick={toggleMenu}>
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={toggleMenu}>
            Contact
          </AnchorLink>
        </li>
      </ul>

      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
