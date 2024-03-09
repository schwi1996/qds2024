import React from "react";

export default function HomeLayout({ children }) {
  return (
    <div className="container mx-auto">      
      {children}      
    </div>
  );
}
