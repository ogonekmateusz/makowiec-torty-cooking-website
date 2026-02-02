import React from "react";
import HeroLayout from "./layouts/hero-layout";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import CakeParticles from "./components/CakeParticles";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CakeParticles />
      <HeroLayout>
        <Navbar />
        <Hero />
      </HeroLayout>
    </div>
  );
}
