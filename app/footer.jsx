"use client";

import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "darkgray",
    padding: "1vw",
    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
    width: "30%",
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
  };

  return (
    <footer style={footerStyle}>
      <p>© 2024 My Domain. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
