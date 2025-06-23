import React from "react";

interface ButtonActionCustomProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

function ButtonActionCustom({ children, onClick, className, disabled = false }: ButtonActionCustomProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        ${className}
        flex flex-row items-center gap-2 text-center
        transition-all duration-300 ease-in-out
        hover:scale-108 hover:-translate-y-2 active:-translate-y-2 hover:animate-pulse active:animate-pulse
        focus:outline-none
        cursor-pointer`}
    >
      {children}
    </button>
  );
}

export default ButtonActionCustom;
