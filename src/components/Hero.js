import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="flex items-center justify-center md:h-[90vh]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-full ">
        <div className="flex justify-center md:justify-end md:w-1/2 md:mr-5">
          <Image src="/images/hero.png" width={420} height={420} alt="hero" />
        </div>
        <div className="flex flex-col items-center md:items-start md:w-1/2 md:ml-5">
          <p className="text-md text-white opacity-50 text-sm leading-8 mb-2">
            Full Stack Developer
          </p>
          <h4 className="text-5xl font-bold text-white leading-tight mb-3">
            DevRos
          </h4>
          <p className="text-md leading-8 text-white mb-6 text-center md:text-start">
            Potřebujete vytvořit webové stránky? Při tvorbě webových stránek
            zajišťuji celkový design od návrhu až po realizaci. Perfektní
            technickou stránku zajišťuji též, aby všechno běželo přesně jak má.
            Kdyby by Vás mé portfolio případně zkušenosti zaujaly - napište mi!
          </p>
          <div className="flex space-x-4">
            <CustomButton text="Portfolio" />
            <CustomButton text="Kontakt" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
