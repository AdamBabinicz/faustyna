import React from "react";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Faustyna from "./components/Faustyna";
import LookingBack from "./components/LookingBack";
import Future from "./components/Future";
import Sustainability from "./components/Sustainability";
import Home from "./components/Home";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/misja" component={Showcase} />
        <Route exact path="/faustyna" component={Faustyna} />
        <Route exact path="/mistycyzm" component={Discover} />
        <Route exact path="/dom" component={Future} />
        <Route exact path="/zakon" component={LookingBack} />
        <Route exact path="/helena" component={Sustainability} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
