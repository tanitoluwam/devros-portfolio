import React from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";

const Frontend = () => {
  return (
    <section id="frontend" className="mb-28">
      <div className="bg-[#2223] py-14 border-t border-b border-[#444444] w-full mt-6 mb-20">
        <h4 className="text-4xl text-center md:text-start md:pl-16 font-bold text-white">
          Front-end skills
        </h4>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-start px-6 md:px-20 mt-10 space-y-10 md:space-y-0 md:space-x-10">
        <div className="w-full md:w-[45%]">
          <h3 className="text-xl text-white font-bold pb-1">Co dělám ?</h3>
          <div className="mb-10">
            <div className="w-[30%] md:w-[15%] h-0.5 bg-[#222222]">
              <div className="bg-blue-600 h-0.5" style={{ width: "30%" }}></div>
            </div>
          </div>
          <div className="flex justify-start items-start mt-4">
            <DriveFileRenameOutlineIcon fontSize="large" color="primary" />
            <div className="ml-7">
              <h3 className="text-md text-white font-bold mb-2">
                UI / UX Design
              </h3>
              <p className="text-white opacity-70 text-xs leading-6">
                Je obecně známou věcí, že člověk bývá při zkoumání grafického
                návrhu rozptylován okolním textem, pokud mu dává nějaký smysl.
                Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text
                vhodnou bezvýznamovou alternativou
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start mt-6">
            <PersonalVideoIcon fontSize="large" color="primary" />
            <div className="ml-7">
              <h3 className="text-md text-white font-bold mb-2">
                HTML, CSS, JavaScript
              </h3>
              <p className="text-white opacity-70 text-xs leading-6">
                Je obecně známou věcí, že člověk bývá při zkoumání grafického
                návrhu rozptylován okolním textem, pokud mu dává nějaký smysl.
                Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text
                vhodnou bezvýznamovou alternativou
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start mt-6">
            <MapsHomeWorkIcon fontSize="large" color="primary" />
            <div className="ml-7">
              <h3 className="text-md text-white font-bold mb-2">
                Sass, Green Sock, React
              </h3>
              <p className="text-white opacity-70 text-xs leading-6">
                Je obecně známou věcí, že člověk bývá při zkoumání grafického
                návrhu rozptylován okolním textem, pokud mu dává nějaký smysl.
                Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text
                vhodnou bezvýznamovou alternativou
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[45%]">
          <h3 className="text-xl text-white font-bold pb-1">Coding skills</h3>
          <div className="mb-10">
            <div className="w-[30%] md:w-[15%] h-0.5 bg-[#222222]">
              <div className="bg-blue-600 h-0.5" style={{ width: "30%" }}></div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between mb-1">
              <span className="text-xs font-medium text-blue-700 dark:text-white">
                HTML
              </span>
              <span className="text-xs font-medium text-blue-700 dark:text-white">
                100%
              </span>
            </div>
            <div className="w-full rounded-full h-1.5 border-solid border-[#222222] border-2">
              <div className="bg-blue-600 h-1.5 rounded-full"></div>
            </div>
          </div>

          <div className="mt-9">
            <div className="flex justify-between mb-1">
              <span className="text-xs font-medium text-blue-700 dark:text-white">
                CSS
              </span>
              <span className="text-xs font-medium text-blue-700 dark:text-white">
                80%
              </span>
            </div>
            <div className="w-full rounded-full h-1.5 border-solid border-[#222222] border-2">
              <div
                className="bg-blue-600 h-1.5 rounded-full"
                style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="mt-9">
            <div className="flex justify-between mb-1">
              <span className="text-xs font-medium text-blue-700 dark:text-white">
                JavaScript
              </span>
              <span className="text-xs font-medium text-blue-700 dark:text-white">
                80%
              </span>
            </div>
            <div className="w-full rounded-full h-1.5 border-solid border-[#222222] border-2">
              <div
                className="bg-blue-600 h-1.5 rounded-full"
                style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="mt-9">
            <div className="flex justify-between mb-1">
              <span className="text-xs font-medium text-blue-700 dark:text-white">
                React
              </span>
              <span className="text-xs font-medium text-blue-700 dark:text-white">
                35%
              </span>
            </div>
            <div className="w-full rounded-full h-1.5 border-solid border-[#222222] border-2">
              <div
                className="bg-blue-600 h-1.5 rounded-full"
                style={{ width: "35%" }}></div>
            </div>
          </div>

          <div className="mt-9">
            <div className="flex justify-between mb-1">
              <span className="text-xs font-medium text-blue-700 dark:text-white">
                Sass
              </span>
              <span className="text-xs font-medium text-blue-700 dark:text-white">
                30%
              </span>
            </div>
            <div className="w-full rounded-full h-1.5 border-solid border-[#222222] border-2">
              <div
                className="bg-blue-600 h-1.5 rounded-full"
                style={{ width: "30%" }}></div>
            </div>
          </div>

          <div className="mt-9">
            <div className="flex justify-between mb-1">
              <span className="text-xs font-medium text-blue-700 dark:text-white">
                GreenSock
              </span>
              <span className="text-xs font-medium text-blue-700 dark:text-white">
                20%
              </span>
            </div>
            <div className="w-full rounded-full h-1.5 border-solid border-[#222222] border-2">
              <div
                className="bg-blue-600 h-1.5 rounded-full"
                style={{ width: "20%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frontend;
