// pages/_app.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import "../styles/global.css"; // Import your global custom styles

// This function takes two props: Component and pageProps
// Component: The active page, so whenever you navigate between routes, Component will change to the new page.
// pageProps: An object with the initial props that were preloaded for your page by one of our data fetching methods, if any.
function MyApp({ Component, pageProps }) {
  // You can include global layout components here (e.g., navigation bar, sidebar)
  return <Component {...pageProps} />;
}

export default MyApp;
