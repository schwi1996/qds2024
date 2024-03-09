import React from "react";
import Sidebar from "../app/components/ui/Sidebar/Sidebar";
import CardPage from "../app/components/ui/Card/CardPage";
import SearchAndFilter from "../app/components/ui/SearchBar/SearchBar";
import Header from "../app/components/ui/header";
import Footer from "../app/components/ui/footer";

const Domain = () => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <div style={{ flex: "0 0 auto" }}>
          {/* Sidebar container */}
          <Sidebar />
        </div>
        <div style={{ flex: "1", padding: "20px" }}>
          {/* Main content container */}
          <SearchAndFilter />
          <CardPage />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Domain;
