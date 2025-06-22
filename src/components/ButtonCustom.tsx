import React from "react";

interface ButtonCustomProps {
  href: string;
  children: React.ReactNode;
}

function ButtonCustom({ href, children }: ButtonCustomProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center px-4 py-2 border border-white rounded-full 
                           transition
                           hover:bg-white hover:text-black"
    >
      {children}
    </a>
  );
}

export default ButtonCustom;
