import React from "react";
import Image from "next/image";
import AosAnimator from "@/components/AosAnimator";
import TitleCustom from "@/components/TitleCustom";
import ButtonHireMe from "@/components/ButtonHireMe";

function About() {
  return (
    <section
      id="about"
      className="relative bg-black/90 w-full h-max min-h-[500px] flex flex-col md:flex-row md:flex-wrap items-center justify-center md:justify-around space-y-8 md:space-y-0 px-4 py-10"
    >
      <AosAnimator
        animation="fade-right"
        duration={1000}
        className="relative w-full max-w-xs md:w-1/3 aspect-square bg-white/30 rounded-xl overflow-hidden shadow-xl flex-shrink-0"
      >
        <Image src="/me.png" alt="Me" fill className="object-cover object-center -scale-x-100" />
      </AosAnimator>

      <AosAnimator animation="fade-left" className="flex flex-col justify-center text-white w-full md:h-full md:w-1/2 gap-6">
        <TitleCustom title="Sobre mi" />

        <div className="flex flex-col items-center md:items-start gap-3">
          <p className="font-medium text-xs md:text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui minus velit tempore inventore officiis maiores amet ab, tempora
            impedit ratione rem dicta similique quas hic perspiciatis sapiente incidunt non. Facilis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sunt voluptatum cum quidem deleniti totam beatae doloremque ducimus. Rem vero blanditiis reiciendis, fugiat
            tempora quibusdam repellendus error animi laborum labore accusantium?
          </p>

          <ButtonHireMe />
        </div>
      </AosAnimator>
    </section>
  );
}

export default About;
