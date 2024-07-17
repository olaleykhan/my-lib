import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Button from "../lib/components/Button";
// import Button from './../lib/components/Button';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      {" "}
      Main
      <Button />
    </>
  </React.StrictMode>
);
