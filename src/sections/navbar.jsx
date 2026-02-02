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
        <div className="menu-section">
            <ul>
                <li>
                    <a href="#">Strona główna</a>
                </li>
                <li>
                    <a href="#">Oferta</a>
                </li>
                <li>
                    <a href="#">Galeria</a>
                </li>
                <li>
                    <a href="#">Kontakt</a>
                </li>
            </ul>
        </div>
        <div className="phonebtn-section">
            <button>+48 123 456 789</button>
        </div>
      </nav>
    </header>
  );
}
