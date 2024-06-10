import React from "react";
import Image from "next/image";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CustomButton from "./CustomButton";

const Kontakt = () => {
  return (
    <section id="kontakt" className="md:mb-10">
      <div className="bg-[#2223] py-14 border-t border-b border-[#444444] w-full mt-6 mb-10">
        <h4 className="text-4xl text-center md:text-start md:pl-16 font-bold text-white">
          Kontakt
        </h4>
      </div>
      <div className="flex justify-center px-4 md:px-10 mt-4">
        <Image
          src="/images/map.png"
          width={1200}
          height={146}
          alt="gallery"
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-7xl w-full mx-auto px-6">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mt-10 space-y-6 md:space-y-0">
          <div className="w-full md:w-[30%]">
            <div className="flex justify-start items-start mt-4">
              <PhoneAndroidIcon fontSize="large" color="primary" />
              <div className="ml-7">
                <h3 className="text-md text-white font-bold mb-2">
                  720 244 551 -2
                </h3>
                <p className="text-white opacity-70 text-xs leading-6">
                  Fahradit klasický smysluplný text vhodnou bezvýznamovo
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start mt-6">
              <FmdGoodOutlinedIcon fontSize="large" color="primary" />
              <div className="ml-7">
                <h3 className="text-md text-white font-bold mb-2">
                  Česká Republika
                </h3>
                <p className="text-white opacity-70 text-xs leading-6">
                  Fahradit klasický smysluplný text vhodnou bezvýznamovo
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start mt-6">
              <EmailOutlinedIcon fontSize="large" color="primary" />
              <div className="ml-7">
                <h3 className="text-md text-white font-bold mb-2">
                  fiktivni@gmail.com
                </h3>
                <p className="text-white opacity-70 text-xs leading-6">
                  Fahradit klasický smysluplný text vhodnou bezvýznamovo
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <form className="max-w-sm mx-auto">
              <h3 className="text-xl text-white font-bold pb-1">
                Kontaktuj mě!
              </h3>
              <div className="mb-6">
                <div className="w-[30%] h-0.5 bg-[#222222]">
                  <div
                    className="bg-blue-600 h-0.5"
                    style={{ width: "40%" }}></div>
                </div>
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  id="name"
                  className="bg-[#0d0d0d] border-[#555555] border-solid border text-[#909090] text-sm rounded-md block w-full p-2.5 dark:placeholder-gray-400"
                  placeholder="Jméno a přijmení"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  id="email"
                  placeholder="email"
                  className="bg-[#0d0d0d] border-[#555555] border-solid border text-[#909090] text-sm rounded-md block w-full p-2.5 dark:placeholder-gray-400"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  id="Spolupráce"
                  placeholder="Spolupráce"
                  className="bg-[#0d0d0d] border-[#555555] border-solid border text-[#909090] text-sm rounded-md block w-full p-2.5 dark:placeholder-gray-400"
                  required
                />
              </div>

              <CustomButton text="Odeslat" />
            </form>
          </div>
          <div className="w-full md:w-[30%]">
            <form className="max-w-sm mx-auto">
              <textarea
                id="message"
                rows="8"
                className="bg-[#0d0d0d] border-[#555555] border-solid border text-[#909090] text-sm rounded-md block w-full p-2.5 dark:placeholder-gray-400"
                placeholder="Zpráva..."></textarea>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
