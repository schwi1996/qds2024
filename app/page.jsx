import React from "react";

const Home = () => {
  const sectionStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
    // background: "url('/your-background-image.jpg') no-repeat center center",
    // backgroundSize: "cover", // Cover the entire page
  };

  const cardStyleLeft = {
    flex: "3", // Shrink the left panel
    padding: "8rem",
    backgroundImage: "url('/transpish_blk.png')",
    backgroundSize: "auto",
    backgroundRepeat: "repeat",
    color: "white",
    borderRadius: "10px",
    margin: "5rem", // Add space between cards if needed
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const cardStyleRight = {
    flex: "2", // Enlarge the right panel
    padding: "4rem",
    backgroundImage: "url('/transpish_blk.png')",
    backgroundSize: "auto",
    backgroundRepeat: "repeat",
    color: "white",
    borderRadius: "10px",
    margin: "7rem", // Increase the margin to match the left side
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <section style={sectionStyle}>
      <div style={cardStyleLeft}>
        <h1 className="text-2xl font-semibold tracking-tight">
        Studying, </h1>
        <h1 className="text-2xl font-semibold tracking-tight" style={{color: "orange", fontSize: "40px"}}>comfortably.</h1>        
        <p>
        </p>
      </div>
      <div style={cardStyleRight}>
        <h1 className="text-2xl font-semibold tracking-tight" style={{color: "orange", fontSize: "30px"}}>
          A productive environment just for you.
        </h1>
        <p>
          Study in silence with likeminded students in rooms that suit your ideal environment. Listen to shared tracks, monitor eachother's productivity, and chill.
        </p>
      </div>
    </section>
  );
};

export default Home;