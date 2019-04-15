import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./Results";
import Detail from "./Details";
import SearchParams from "./SearchParams";

const App = () => (
  <div>
    <header>
      <Link to="/">Adpot Me!</Link>
    </header>
    <Router>
      <Results path="/" />
      <Detail path="/details/:id" />
      <SearchParams path="/search-params" />
    </Router>
  </div>
);

render(<App />, document.getElementById("root"));
