"use client";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { MdJoinFull } from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import LoginButton from "./components/auth/SignInButton";
import Link from "next/link"; // Import Next.js Link for navigation
import "./header.css";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        {/* Menu Icon */}
        <FaIcons.FaBars onClick={showSidebar} />

        <div className="navbar-links">
          <LoginButton />
        </div>

        {/* Sidebar Menu */}
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <AiIcons.AiOutlineClose />
            </li>
            {/* Dynamically create sidebar links */}
            <li>
              <Link legacyBehavior href="/" passHref>
                <a>
                  {" "}
                  <AiFillHome /> Home
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/create" passHref>
                <a>
                  {" "}
                  <IoIosAddCircle />
                  Create Room
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/join" passHref>
                <a>
                  <MdJoinFull />
                  Join Room
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </IconContext.Provider>
  );
};

export default Header;
