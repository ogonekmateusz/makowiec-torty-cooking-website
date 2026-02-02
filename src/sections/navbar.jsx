import React, { useState } from "react";
import cakeLogo from "../assets/cake-logo.png";
import Divider from "../components/Divider";
import NavbarItem from "../components/Navbar-item";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Strona główna", "Oferta", "Galeria", "Kontakt"];

  return (
    <header className="relative">
      {/* NAVBAR */}
      <nav className="container md:px-0 px-4 mx-auto py-5 flex items-center justify-between relative z-50 bg-transparent">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110">
            <img src={cakeLogo} alt="logo" className="w-8"/>
          </div>
          <h1 className="text-xl md:text-2xl font-extrabold text-white">MAKOWIEC TORTY</h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex flex-1 items-center justify-center relative">
          <ul className="flex gap-[4vw] text-white font-semibold text-lg">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="relative  inline-block transition-all duration-300
                             after:content-[''] after:absolute after:left-0 after:bottom-0
                             after:w-0 after:h-[2px] after:bg-white after:transition-all
                             after:duration-300 hover:after:w-full"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* BUTTON TYLKO NA DESKTOP */}
        <div className="hidden lg:flex items-center">
          <button className="bg-white text-pink-500 cursor-pointer px-5 py-2 rounded-full shadow-lg font-semibold hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
            +48 123 456 789
          </button>
        </div>

        {/* BURGER MOBILE */}
        <div className="md:hidden z-50 flex items-center">
          <ion-icon
            name={menuOpen ? "close-outline" : "menu-outline"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-5xl cursor-pointer text-white transition-transform duration-300 hover:scale-110 active:scale-95"
          ></ion-icon>
        </div>
      </nav>

      {/* MOBILE MENU ABSOLUTE */}
      <div
        className={`md:hidden absolute w-full left-0 top-full bg-white shadow-lg z-40 overflow-hidden transition-all duration-500
          ${menuOpen ? "max-h-[60vh] opacity-100 py-5" : "max-h-0 opacity-0 py-0"}`}
      >
        <div className="flex flex-col font-semibold text-lg px-5 text-pink-500">
          {links.map((link, i) => (
            <div key={i}>
              <NavbarItem title={link} href="#" />
              {i < links.length - 1 && (
                <Divider />
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
