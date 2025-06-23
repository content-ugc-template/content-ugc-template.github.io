import { anton } from "@/applayout";
import React from "react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

const ServiceCard = ({ title, subtitle, description, tag }: ServiceCardProps) => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-white/50 to-white/10 text-white p-4 rounded-md overflow-hidden shadow-xl flex-shrink-0 gap-2">
      <div className="flex flex-col">
        <div className="w-full flex flex-row justify-between items-center gap-2">
          <span className={`${anton.className} text-md`}>{title}</span>
          <div className="w-max h-6 flex items-center text-xs bg-gradient-to-r from-white/50 to-white/10 p-4 rounded-md overflow-hidden shadow-xl flex-shrink-0 text-center">
            {tag}
          </div>
        </div>
        <span className="font-light text-xs text-white/70">{subtitle}</span>
      </div>
      <p className="font-medium text-xs">{description}</p>
    </div>
  );
};

export default ServiceCard;
