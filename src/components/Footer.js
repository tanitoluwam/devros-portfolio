import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 border-t border-[#444444] py-4">
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
        <li className="text-white opacity-60 hover:opacity-100 focus:opacity-100 transition-opacity text-md px-2 md:px-4">
          Facebook
        </li>
        <li className="text-white opacity-60 hover:opacity-100 focus:opacity-100 transition-opacity text-md px-2 md:px-4">
          Instagram
        </li>
        <li className="text-white opacity-60 hover:opacity-100 focus:opacity-100 transition-opacity text-md px-2 md:px-4">
          Youtube
        </li>
      </ul>
      <p className="text-white opacity-60 hover:opacity-100 focus:opacity-100 transition-opacity text-md px-2 md:px-4">
        © 2022 Všechna práva vyhrazena.
      </p>
    </div>
  );
};

export default Footer;
