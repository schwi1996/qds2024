"use client";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { useSession, signIn } from "next-auth/react"; // Import useSession and signIn
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { MdJoinFull } from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import LoginButton from "./components/auth/SignInButton";
import Link from "next/link"; // Import Next.js Link for navigation
import "./header.css";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const Header = () => {
  const { data: session } = useSession();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const router = useRouter(); // Use useRouter hook for navigation

  const handleProtectedRoute = (path) => {
    // Check if there's a session, if not, redirect to sign-in
    if (!session) {
      router.push("/signin");
    } else {
      // If there's a session, proceed to the path
      router.push(path);
    }
  };

  const NavItem = ({ icon, title, link, onClick }) => (
    <li className="nav-text" onClick={onClick}>
      <Link legacyBehavior href={link || "#"} passHref>
        <a>
          {icon}
          <span>{title}</span>
        </a>
      </Link>
    </li>
  );

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

            <NavItem icon={<AiFillHome />} title="Home" link="/" />
            <NavItem
              icon={<IoIosAddCircle />}
              title="Create Room"
              onClick={() => handleProtectedRoute("/create")}
            />
            <NavItem
              icon={<MdJoinFull />}
              title="Join Room"
              onClick={() => handleProtectedRoute("/join")}
            />
          </ul>
        </nav>
      </div>
    </IconContext.Provider>
  );
};

export default Header;
