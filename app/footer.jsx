"use client"

import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "darkgray",
        padding: "1vw",
        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
        position:"absolute",
        bottom: "0"
      }}
    >
      <p>© 2024 My Domain. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
