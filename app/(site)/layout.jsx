"use client"
import React , {useEffect} from "react";
import {redirect, useRouter} from "next/navigation"
import { useSession } from "next-auth/react";

export default function HomeLayout({ children }) {

  const { data: session, status } = useSession();
  const {push} = useRouter();

  useEffect(() => {
    if (status !== "loading") {
      if (session){
        // push("/domain")
      }else{
        redirect("/")
      }
      
    }
  },[session]);


  return (

    <div style={{
      backgroundImage: "url('/night_firewatch.png')",
      backgroundSize: "100% 100%"
    }}>      
      {children}      
    </div>
  );
}
