import React from "react";
import cakeLogo from "../assets/cake-logo.png";

export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-between items-center w-[92%] mx-auto py-5">
        <div className="logo-section flex items-center gap-3">
          <div className="logo-background bg-white p-2 rounded-2xl shadow-lg">
            <img src={cakeLogo} alt="logo" className="w-8" />
          </div>
          <h1 className="text-2xl font-extrabold text-white">MAKOWIEC TORTY</h1>
        </div>
        <div className="menu-section">
          <ul className="flex items-center gap-[4vw] text-white font-semibold text-lg">
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
          <button className="bg-white text-pink-500 px-5 py-2 rounded-full shadow-lg font-semibold hover:translate-y-1 transition duration-300 cursor-pointer">
            +48 123 456 789
          </button>
        </div>
      </nav>
    </header>
  );
}
