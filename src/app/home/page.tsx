import Image from "next/image";
import { anton } from "@/applayout";
import ButtonCustom from "@/components/ButtonCustom";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { TbBrandFacebookFilled } from "react-icons/tb";
import ButtonActionCustom from "@/components/ButtonActionCustom";

const Home = () => {
  return (
    <div className="relative bg-black w-full h-screen min-h-[600px] flex flex-row justify-center md:justify-start items-center">
      <div className="md:bg-white/40 w-full md:w-1/2 flex justify-end text-white py-2">
        <div className="z-20 w-full flex justify-center md:justify-end items-center md:items-end">
          <div className="flex flex-col items-center gap-3">
            <span className={`${anton.className} text-7xl md:text-6xl lg:text-7xl text-center`}>
              <span className="md:text-black">Razan</span> <span className="text-black md:text-white">Smith</span>
            </span>
            <p>Content UGC</p>

            <div className="flex justify-center gap-3 text-sm px-4 mt-6">
              <ButtonCustom className="font-medium bg-black text-white">Contactame</ButtonCustom>
              <ButtonCustom className="font-medium text-white">Portafolio</ButtonCustom>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute z-10 inset-0 w-full h-full flex flex-col justify-start md:justify-center items-end gap-5 pt-4 md:pt-0 pe-4 text-white">
        <ButtonActionCustom>
          <TbBrandFacebookFilled />
        </ButtonActionCustom>
        <ButtonActionCustom>
          <TbBrandTwitterFilled />
        </ButtonActionCustom>
        <ButtonActionCustom>
          <TbBrandWhatsappFilled />
        </ButtonActionCustom>
      </div>

      <div className="absolute top-0 right-0 w-full md:w-10/13 h-full flex items-start justify-end">
        <Image src="/me.png" alt="Me" fill className="object-cover object-center" />
      </div>
    </div>
  );
};

export default Home;
