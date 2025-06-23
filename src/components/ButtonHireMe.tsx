import React from "react";
import { anton } from "@/applayout";

const ButtonHireMe = () => {
  return (
    <a href="" className={`${anton.className} text-white text-sm cursor-pointer hover:scale-102 active:scale-102 w-max`}>
      {"->"} Contratame
    </a>
  );
};

export default ButtonHireMe;
