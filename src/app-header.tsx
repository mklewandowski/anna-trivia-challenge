import React from "react";
import anna from "./anna.png";

import "./app-header.css";

export const AppHeader: React.FC = () => {
  return (
    <header className="app-header">
      <img src={anna} width={"150px"} alt="anna" />
      Quiz Time With Anna
      <div className="app-header-sub">a time waster by therealmattkain</div>
    </header>
  );
}
