import React from "react";

import "./assets/scss/themes.scss";

import Route from "./Routes";

import fakeBackend from "./helpers/AuthType/fakeBackend";

fakeBackend();

function App() {
  return (
    <React.Fragment>
      <Route />
    </React.Fragment>
  );
}

export default App;
