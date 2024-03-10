"use client";
import { IconContext } from 'react-icons';
import LoginButton from "./components/auth/SignInButton";
import SidebarData from './components/ui/Sidebar/SideBarData';
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-scroll';
import './header.css';



const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars" smooth={true} duration={500} onClick={showSidebar}>
            <FaIcons.FaBars />
          </Link>
          <div style={{ marginLeft: 'auto' }}>
            <LoginButton />
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" smooth={true} duration={500} onClick={(e) => { showSidebar(); e.stopPropagation(); }}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path} smooth={true} duration={500}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
  );
};

export default Header;
