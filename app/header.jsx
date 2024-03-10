"use client";

import Link from "next/link";
import LoginButton from "./components/auth/SignInButton";

const Header = () => {
  return (
    <header className="bg-stone-100 py-1 bg-opacity-50" style={{backgroundColor: "black"}}>
      <nav className="container flex items-center text-sm font-medium uppercase tracking-wider text-stone-500">
        <ul className="ml-auto">
          <li>
            <LoginButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
