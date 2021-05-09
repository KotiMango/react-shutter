import React from "react";
//Import Styles
import GlobalStyle from "./components/GlobalStyle";
//Import pages
import AboutUs from "../src/pages/AboutUs";
//Import Components
import Nav from "../src/components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
