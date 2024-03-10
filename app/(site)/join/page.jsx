"use client";

import React from "react";
import Sidebar from "@/app/components/ui/Sidebar/Sidebar";
import CardPage from "@/app/components/ui/Card/CardPage";
import SearchAndFilter from "@/app/components/ui/Searchbar/SearchBar";


const joinPage = () => {
  return (
    <>      
      <div className="joinroom"
        style={{
          display: "flex",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        {/* <div style={{ flex: "0 0 auto" }}> */}
          {/* Sidebar container */}
          {/* <Sidebar />
        </div> */}
        <div style={{ flex: "1", padding: "20px" }}>
          {/* Main content container */}
          <SearchAndFilter />
          <CardPage />
        </div>
      </div>
    </>
  );
};

export default joinPage;
