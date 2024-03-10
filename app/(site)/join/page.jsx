"use client";

import React, { useState } from "react";
import Sidebar from "@/app/components/ui/Sidebar/Sidebar";
import CardPage from "@/app/components/ui/Card/CardPage";
import SearchBar from "@/app/components/ui/Searchbar/SearchBar";

const joinPage = () => {
  // State to hold the search term
  const [searchedTitle, setSearchedTitle] = useState("");

  // Handler to update the search term
  const handleSearchChange = (searchValue) => {
    setSearchedTitle(searchValue);
    // console.log(searchValue);
  };

  return (
    <>
      <div
        className="joinroom"
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
          <SearchBar onSearchChange={handleSearchChange} />
          <CardPage searchedTitle={searchedTitle} />
        </div>
      </div>
    </>
  );
};

export default joinPage;
