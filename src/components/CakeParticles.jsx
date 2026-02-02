import React from "react";
import cakeParticles from '../assets/cake-particles.png';

export default function CakeParticles() {
  return (
    <img
      src={cakeParticles}
      alt="Tło z tortami"
      className=" hidden lg:block absolute z-[10] top-0 right-0 h-full w-100 object-cover -z-10"
    />
  );
}
