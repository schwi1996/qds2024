"use client";

import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#3d3d3c",
    color: "#6e6e6d",
    padding: "0.04vw",
    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
    width: "30%",
    textAlign: "center",
    contentalign: "center",
    position: "fixed",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    paddingTop: "10px",
  };

  return (
    <footer style={footerStyle}>
      <p>©QDS '24 G12. Bgr Credit: 'Firewatch'.</p>
    </footer>
  );
};

export default Footer;
