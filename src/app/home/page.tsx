import ButtonCustom from "@/components/ButtonCustom";
import Image from "next/image";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative w-full h-screen flex flex-col justify-end">
      <div className="absolute inset-0 flex flex-col-reverse md:flex-row bg-black/60 md:bg-gradient-to-b md:from-black md:to-black/60">
        <div className="w-full md:w-1/2"></div>

        <div className="-z-10 md:relative md:z-0 w-full h-full md:w-1/2 flex">
          <Image src="/image.png" alt="" layout="fill" objectFit="cover" priority />
        </div>
      </div>

      <div className="relative flex flex-col justify-around items-start w-full h-3/4">
        <div className="relative text-gray-300 uppercase px-4 md:px-6">
          <p className="text-2xl tracking-widest">¿Conoces mi trabajo?</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl  font-serif font-thin text-white/90 leading-tight whitespace-nowrap z-20">
            The Cris Vlog
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 text-white w-full gap-3 md:gap-0">
          <div className="flex justify-center gap-3">
            <ButtonCustom href="">
              <FaInstagram className="mr-2" /> @thecrisvlog
            </ButtonCustom>

            <ButtonCustom href="">
              <FaTwitter className="mr-2" /> @thecrisvlog
            </ButtonCustom>
          </div>

          <div className="flex flex-col items-center gap-1 w-full px-6 md:px-10">
            <div className="w-full h-[1.5px] bg-white" />
            <p className="text-xl tracking-widest">CREADORA DE CONTENIDO UGC</p>
          </div>
        </div>
      </div>
    </div>
  );
}
