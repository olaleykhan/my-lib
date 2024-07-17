import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Button from "../lib/components/button/Button";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="flex justify-center items-center h-screen">
      <Button> title </Button>
    </main>
  </React.StrictMode>
);
