"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Seccion01() {
  return (
    <section
      className="max-w-[1500px] mx-auto mt-16 px-5"
      data-aos="fade-up-right"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div
        className="flex flex-col md:flex-row items-center 
                   bg-gradient-to-r from-[#A67C52] to-[#C69B7B] 
                   rounded-2xl overflow-hidden shadow-xl 
                   transition-transform duration-500 hover:scale-[1.01]"
      >
        {/* Texto a la izquierda */}
        <div className="w-full md:w-1/2 p-10 lg:p-16 text-white relative z-10">
          <p className="uppercase tracking-wide text-sm mb-2 opacity-80">
            Estilo & Elegancia
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 relative inline-block">
            Diseño que inspira
            <span className="block w-20 h-1 bg-white mt-3 rounded"></span>
          </h2>

          <p className="text-lg lg:text-xl leading-relaxed mb-8 opacity-90">
            Creamos espacios únicos con materiales nobles y un enfoque en el
            estilo contemporáneo. Cada mueble es una expresión de elegancia,
            funcionalidad y calidez.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-[#A67C52] 
                       px-8 py-3 rounded-full font-semibold 
                       shadow-md hover:shadow-lg hover:bg-gray-100 
                       transition duration-300"
          >
            Conoce más <ArrowRight size={20} />
          </a>
        </div>

        {/* Imagen a la derecha con overlay */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative">
          <Image
            src="/img/velador2.png"
            alt="Imagen decorativa"
            width={700}
            height={500}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
