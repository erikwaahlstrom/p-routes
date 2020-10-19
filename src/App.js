import React from "react";
import DashBoard from "./components/dashboard/DashBoard";
import NavBar from "./components/layout/NavBar.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={DashBoard}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
