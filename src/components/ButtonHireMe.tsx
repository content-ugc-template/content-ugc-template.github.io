import React from "react";
import { anton } from "@/applayout";

const ButtonHireMe = () => {
  return (
    <a
      href=""
      className={`${anton.className} text-white text-sm cursor-pointer w-max
                                                transition-all duration-300 ease-in-out
                                                hover:translate-x-1 active:translate-x-1`}
    >
      {"->"} Contratame
    </a>
  );
};

export default ButtonHireMe;
