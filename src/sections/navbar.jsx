import React from "react";
import cakeLogo from "../assets/cake-logo.png";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo-section">
          <img src={cakeLogo} alt="logo" className="w-10" />
          <h1 className="text-2xl font-bold">MAKOWIEC TORTY</h1>
        </div>
      </nav>
    </header>
  );
}
