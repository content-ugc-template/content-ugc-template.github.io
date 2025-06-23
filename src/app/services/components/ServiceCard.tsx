import React from "react";
import { anton } from "@/applayout";
import AosAnimator from "@/components/AosAnimator";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

const ServiceCard = ({ title, subtitle, description, tag }: ServiceCardProps) => {
  return (
    <AosAnimator animation="fade-right" duration={1000}>
      <div
        className="flex flex-col bg-gradient-to-r from-white/10 to-white/50 text-white p-4 rounded-md overflow-hidden shadow-xl flex-shrink-0 gap-3
                 transition-all duration-300 ease-in-out
                 hover:scale-102 active:scale-102"
      >
        <div className="flex flex-col">
          <div className="w-full flex flex-row justify-between items-center">
            <span className={`${anton.className} text-md`}>{title}</span>
            <div className="w-max h-6 flex items-center text-xs bg-gradient-to-r from-white/10 to-white/50 p-4 rounded-md overflow-hidden shadow-xl flex-shrink-0 text-center">
              {tag}
            </div>
          </div>
          <span className="font-light text-xs text-white/70">{subtitle}</span>
        </div>
        <p className="font-medium text-xs">{description}</p>
      </div>{" "}
    </AosAnimator>
  );
};

export default ServiceCard;
