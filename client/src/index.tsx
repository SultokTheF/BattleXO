import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./assets/global.css";

import App from "./App";

const rootNode = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootNode);

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);