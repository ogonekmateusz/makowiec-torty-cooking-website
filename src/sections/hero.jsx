import React from "react";

export default function Hero() {
  return (
    <div className="hero container mx-auto md:px-0 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hero-left flex flex-col justify-center items-center md:items-start text-center md:text-left py-20 ">
          <h1 className="title text-white text-4xl font-extrabold tracking-tight mb-6 md:text-5xl lg:text-6xl">
            Autorskie torty <br /> tworzone z pasją.
          </h1>
          <p className="subtitle text-white text-lg mb-8 md:text-lg lg:text-2xl">
            Tworzę torty na wyjątkowe okazje – od urodzin po śluby. Każdy
            projekt jest dopasowany do Ciebie: smak, styl i detale, które mają
            znaczenie. Zajrzyj do mojego świata słodkich realizacji.
          </p>
          <button className="bg-linear-to-r from-pink-400 via-pink-500 to-pink-600 cursor-pointer text-white py-3 px-5 rounded-full shadow-lg font-semibold hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
            Zamów teraz
          </button>
        </div>
        <div className="hero-right"></div>
      </div>
    </div>
  );
}
