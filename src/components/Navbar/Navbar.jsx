import  "../Navbar/NavbarStyles.css"
import { Link } from "react-router-dom"
import { MenuItems } from "../Rotas/ManuItems"
import React, { useState, useEffect } from 'react';
import logoimg from '../../assets/caregiverimg.png'

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [clicked, setClicked] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);

    const navbar = document.querySelector('.navbarItems');
    if (navbar) {
      navbar.style.top = isVisible ? '20px' : '-80px';
    }
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  
  
    return (
      <nav className={`navbarItems`}>
        <h1 className="navbar-logo">
          <img className="logo-img" src={logoimg} alt="logo" />
        </h1>
  
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
  
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url} id={item.id}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default React.memo(Navbar);