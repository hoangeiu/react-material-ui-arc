import React, { useState } from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Footer from "./ui/Footer";
import LandingPage from "../components/LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import MobileApp from "./MobileApp";
import Websites from "./Websites";
import Revolution from "./Revolution";
import About from "./About";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route
            exact
            path="/services"
            render={(props) => <Services {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route
            exact
            path="/customsoftware"
            render={(props) => <CustomSoftware {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route
            exact
            path="/mobileapps"
            render={(props) => <MobileApp {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route
            exact
            path="/websites"
            render={(props) => <Websites {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route
            exact
            path="/revolution"
            render={(props) => <Revolution {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route
            exact
            path="/about"
            render={(props) => <About {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route exact path="/contact" component={() => <div>Contact</div>} />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
