"use client"
import React from "react";
import { useSession } from "next-auth/react";

export default function HomeLayout({ children }) {

  return (
    <div className="container mx-auto">      
      {children}      
    </div>
  );
}
