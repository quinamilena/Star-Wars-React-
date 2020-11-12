import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import Busca from "./components/Buscar/busca";
import Person from "./components/Person/person";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={(props) => <Home {...props} />} />
            <Route
              path="/search/:Pesquisa"
              component={(props) => <Busca {...props} />}
            />
            <Route
              path="/person/:id/:Pesquisa"
              component={(props) => <Person {...props} />}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default Routes;
