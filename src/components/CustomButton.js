
import React from "react";
import { Button } from "@nextui-org/react";

const CustomButton = ({text}) => {
  return (
    <div className="flex gap-4 items-center">
      <Button
        radius="full"
        className="bg-[#2F2F2F] text-white border border-[#d5d5d5] hover:opacity-[0.3] hover:border-blue-700 active:border-blue-800 focus:border-blue-800 px-6"

      >{text}</Button>  
    </div>
  );
}

export default CustomButton;
