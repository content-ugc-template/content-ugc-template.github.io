import React from "react";
import { anton } from "@/applayout";

interface TitleCustomProps {
  title: string;
  className?: string;
}

const TitleCustom = ({ title, className }: TitleCustomProps) => {
  return (
    <div className="flex items-center justify-center md:justify-start gap-4">
      <div className="flex-1 h-[2px] bg-gray-400 hidden" />
      <span className={`${anton.className} ${className} text-2xl md:text-3xl lg:text-4xl text-center`}>{title}</span>
      <div className="flex-1 h-[2px] bg-gray-400 hidden " />
    </div>
  );
};

export default TitleCustom;
