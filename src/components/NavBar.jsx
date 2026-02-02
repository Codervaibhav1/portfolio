import React, { useState, useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import { BiLogoLinkedin } from 'react-icons/bi';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on window resize if width >= 992px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar bg-black position-sticky top-0 w-100 z-50 shadow-sm" id="header">
        <div className="container d-flex justify-content-between align-items-center py-2 flex-nowrap">

          {/* Logo */}
          <div className='col-10 col-md-6 col-lg-6 '>
        <span id='logo' className="navbar-brand mb-0 text-black fst-italic animate__animated animate__flash">VAIBHAV UPADHYAY</span>
        </div>

          {/* Desktop Links */}
          <div className="d-none d-lg-flex align-items-center">
            <a className="nav-link text-light mx-3" href="#home">Home</a>
            <a className="nav-link text-light mx-3" href="#about-section">About</a>
            <a className="nav-link text-light mx-3" href="#skill-section">Skills</a>
            <a className="nav-link text-light mx-3" href="#project-section">Projects</a>
            <a className="nav-link text-light mx-3" href="#contect-section">Contact</a>
          </div>

          {/* Hamburger / Cross Button for Mobile */}
          <div className="d-lg-none">
            <button
              className="text-light fs-2 border-0 bg-transparent"
              onClick={toggleMenu}
            >
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>

        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      ></div>

      {/* Mobile Sliding Menu */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <a className="mobile-link" href="#home" onClick={handleLinkClick}>Home</a>
        <a className="mobile-link" href="#about-section" onClick={handleLinkClick}>About</a>
        <a className="mobile-link" href="#skill-section" onClick={handleLinkClick}>Skills</a>
        <a className="mobile-link" href="#project-section" onClick={handleLinkClick}>Projects</a>
        <a className="mobile-link" href="#contect-section" onClick={handleLinkClick}>Contact</a>

        {/* Social Icons */}
        <div className="d-flex justify-content-center mt-4 gap-3">
          <a href="https://www.linkedin.com/in/vaibhav-upadhyay-9489b7219/" target='_blank'  className="text-light fs-4"><BiLogoLinkedin /></a>
          <a href="https://github.com/Codervaibhav1" target='_blank' className="text-light fs-4"><BsGithub /></a>
          {/* <a href="#" className="text-light fs-4"><FiInstagram /></a> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
