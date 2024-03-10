import React from "react";

const Home = () => {
  const sectionStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
    background: "url('/your-background-image.jpg') no-repeat center center",
    backgroundSize: "cover", // Cover the entire page
  };

  const cardStyleLeft = {
    padding: "8rem",
    backgroundColor: "white",
    borderRadius: "8px",
    margin: "5rem", // Add space between cards if needed
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const cardStyleRight = {
    padding: "8rem",
    backgroundColor: "white",
    borderRadius: "8px",
    margin: "3rem", // Add space between cards if needed
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <section style={sectionStyle}>
      <div style={cardStyleLeft}>
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome to Our Site
        </h1>
        <p>
          Your main content text goes here. Describe what your site or company
          does, and what visitors can expect to find or do here. Your main
          content text goes here. Describe what your site or company does, and
          what visitors can expect to find or do here.Your main content text
          Your main content text goes here. Describe what your site or company
          does, and what visitors can expect to find or do here. Your main
          content text goes here. Describe what your site or company does, and
          what visitors can expect to find or do here.Your main content text
        </p>
      </div>
      <div style={cardStyleRight}>
        <h1 className="text-2xl font-semibold tracking-tight">
          Another Heading
        </h1>
        <p>
          More content can go here. This could be information about your
          services or products.
        </p>
      </div>
    </section>
  );
};

export default Home;
