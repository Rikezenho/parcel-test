import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import "./main.scss";

const App = props => (
  <div>
    <h1>{props.title}</h1>
  </div>
);

ReactDOM.render(<App title="Parcel Test" />, document.getElementById("app"));
