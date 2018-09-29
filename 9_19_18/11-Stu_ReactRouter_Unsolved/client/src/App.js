import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <div>
    <Nav />
    <Books />
    <Detail />
    <NoMatch />
  </div>
);

export default App;
