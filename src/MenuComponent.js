// MenuComponent.js
import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Career from './Career';
import Services from './Services';
import Testimonials from './Testimonials';
import FooterA from './FooterA';
import FooterB from './FooterB';

const MenuComponent = () => {
  const menuRef = useRef(null);
  const menuLinksRef = useRef(null);
  const btnCloseRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    const menuLinks = menuLinksRef.current;
    const btnClose = btnCloseRef.current;

    const handleMenuClick = () => {
      console.log('clicke');
      menuLinks.classList.add('actives');
    };

    const handleBtnCloseClick = () => {
      menuLinks.classList.remove('actives');
    };

    menu.addEventListener('click', handleMenuClick);
    btnClose.addEventListener('click', handleBtnCloseClick);

    // Cleanup event listeners on component unmount
    return () => {
      menu.removeEventListener('click', handleMenuClick);
      btnClose.removeEventListener('click', handleBtnCloseClick);
    };
  }, []);

  return (
    <div className="ham-menu">
      <div id="menu" ref={menuRef} className="menu">
        <img src="images/List.svg" className="svg me-4" alt="Menu Icon" />
      </div>
      <div id="menu-links" ref={menuLinksRef} className="menu-links p-3">
     
        <a href="#" >
          <li className="m-1">Home</li>
        </a>
        <a href="#services" >
          <li className="m-1">Services</li>
        </a>
        <a href="#career" >
          <li className="m-1">Career</li>
        </a>
        <a href="#contact" >
          <li className="m-1">Contact</li>
        </a>
        <button className='mt-2 egister btn btn-primary rounded-0 border border-1' id="btn-close" ref={btnCloseRef}>Close</button>
      </div>
    </div>
  );
};

export default MenuComponent;
