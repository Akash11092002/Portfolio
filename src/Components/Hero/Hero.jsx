import React from 'react'
import './Hero.css';
import profile from '../../assets/profile.jpg'

import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
    
    <h1> <span>I'm Akash Maurya </span>, web developer based in India</h1>
   
    <div className='hero-action'>
    <div className='hero-connect'> <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with me </AnchorLink>
    </div>
    <div className='hero-resume'>
    <a href='https://drive.google.com/file/d/1a12dsah3Auw1glC0KKuVIamCylyPf3cA/view?usp=drivesdk'>
    My Resume
    </a>
    

    </div>

    </div>
    
    </div>
  )
}

export default Hero