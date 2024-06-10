import React from "react";
import Image from "next/image";

const Portfolio = () => {
  const navItems = [
    { name: "All" },
    { name: "Web" },
    { name: "Komponenty" },
    { name: "Animace" },
    { name: "Mockups" },
  ];

  return (
    <section id="portfolio" className="md:mb-20">
      <div className="bg-[#2223] py-14 border-t border-b border-[#444444] w-full mt-6 mb-20">
        <h4 className="text-4xl text-center md:text-start md:pl-16 font-bold text-white">
          Portfolio
        </h4>
      </div>

      <div className="px-6 md:px-20 mt-10">
        <div>
          <h3 className="text-xl text-white font-bold pb-1">Klienti</h3>
          <div className="mb-10">
            <div className="w-[30%] md:w-[7%] h-0.5 bg-[#222222]">
              <div className="bg-blue-600 h-0.5" style={{ width: "30%" }}></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mx-auto w-full md:w-[70%] mt-10 space-y-6 md:space-y-0">
          <p className="text-white text-[15px] opacity-60 font-bold">
            Dev<span className="font-normal">Ros</span>
          </p>
          <p className="text-white text-[15px] opacity-60 font-normal">
            Cukrárna <span className="font-bold">Merkur</span>
          </p>
          <p className="text-white text-[15px] opacity-60 font-normal">
            Pekárna <span className="font-bold">Merkur</span>
          </p>
          <p className="text-white text-[15px] opacity-60 font-normal">
            Místo pro tvoji firmu
          </p>
        </div>
        <div className="mt-10">
          <div>
            <h3 className="text-xl text-white font-bold pb-1">Galerie</h3>
            <div className="mb-10">
              <div className="w-[30%] md:w-[7%] h-0.5 bg-[#222222]">
                <div
                  className="bg-blue-600 h-0.5"
                  style={{ width: "25%" }}></div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-start w-full md:w-[30%] mt-2 space-x-2">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="text-white opacity-60 hover:opacity-100 focus:opacity-100 transition-opacity text-sm">
                {item.name}
              </button>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <Image
              src="/images/gallery.png"
              width={340}
              height={340}
              alt="gallery"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
