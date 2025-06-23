import React from "react";

interface ButtonCustomProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

function ButtonCustom({ children, onClick, className, disabled = false }: ButtonCustomProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        ${className}
        flex flex-row items-center gap-2 text-black px-6 py-2 rounded-4xl  text-center
        transition-all duration-300 ease-in-out
        hover:scale-108 active:scale-108
        focus:outline-none
        cursor-pointer`}
    >
      {children}
    </button>
  );
}

export default ButtonCustom;
