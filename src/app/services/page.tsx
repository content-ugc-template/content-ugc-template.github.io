import React from "react";
import TitleCustom from "@/components/TitleCustom";
import ServiceCard from "./components/ServiceCard";
import ButtonHireMe from "@/components/ButtonHireMe";

function Services() {
  return (
    <section
      id="services"
      className="relative bg-black w-full h-max flex flex-col lg:flex-row-reverse lg:flex-wrap items-center justify-center lg:justify-around space-y-8 px-4 py-10"
    >
      <div className="relative w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ServiceCard
          title="Content UGC"
          subtitle="2 años de experiencia"
          description="Creación de contenido generado por el usuario para campañas de marketing digital, enfocándose en autenticidad y engagement."
          tag="Excelente"
        />

        <ServiceCard
          title="Social Media Management"
          subtitle="3.5 años de experiencia"
          description="Gestión integral de redes sociales, incluyendo estrategia, publicación, interacción con la comunidad y análisis de métricas."
          tag="Excelente"
        />

        <ServiceCard
          title="Video Editing"
          subtitle="1 año de experiencia"
          description="Edición de videos cortos para plataformas como TikTok, Instagram Reels y YouTube Shorts, con foco en tendencias y viralidad."
          tag="Muy buena"
        />
      </div>

      <div className="flex flex-col justify-center items-center lg:items-start text-white w-full lg:h-full lg:w-1/3 gap-6">
        <TitleCustom title="Servicios" />

        <div className="flex flex-col items-center md:items-start gap-3">
          <p className="font-medium text-xs md:text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

          <ButtonHireMe />
        </div>
      </div>
    </section>
  );
}

export default Services;
