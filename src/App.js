import React from "react";
//Import Styles
import GlobalStyle from "./components/GlobalStyle";
//Import pages
import AboutUs from "../src/pages/AboutUs";
import ContactUs from "../src/pages/ContactUs";
import OurWork from "../src/pages/OurWork";
//Import Components
import Nav from "../src/components/Nav";
//Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
