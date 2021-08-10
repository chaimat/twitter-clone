import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import App from "./components/App";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
