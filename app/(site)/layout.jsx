"use client"
import React from "react";
import { useSession } from "next-auth/react";

export default function HomeLayout({ children }) {

  return (
    <div style={{
      backgroundImage: "url('/night_firewatch.png')",
      backgroundSize: "100% 100%"
    }}>      
      {children}      
    </div>
  );
}
