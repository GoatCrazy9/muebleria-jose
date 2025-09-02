"use client";

import Image from "next/image";

export default function Dormitorio() {
  return (
    <section
      className="max-w-[1500px] mx-auto mt-16 px-5"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#A67C52] to-[#C69B7B] rounded-2xl overflow-hidden shadow-xl">
        
        {/* Texto a la izquierda */}
        <div className="w-full md:w-1/2 p-10 lg:p-16 text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 relative inline-block">
            Tu dormitorio, tu refugio personal
            <span className="block w-24 h-1 bg-white mt-3 rounded"></span>
          </h2>

          <p className="text-lg lg:text-xl leading-relaxed mb-6 opacity-90">
            En nuestra mueblería, entendemos que el dormitorio es más que solo
            un lugar para descansar. Es el espacio donde recargas energías,
            conectas contigo mismo y comienzas y terminas cada día.
          </p>

          <p className="text-lg lg:text-xl leading-relaxed mb-8 opacity-90">
            Trabajamos con materiales nobles, acabados elegantes y líneas que se
            adaptan a tu estilo de vida.
          </p>

          <a
            href="#"
            className="inline-block bg-white text-[#A67C52] px-8 py-3 rounded-full font-semibold 
                       shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Explora nuestras colecciones
          </a>
        </div>

        {/* Imagen a la derecha */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative">
          <Image
            src="/img/dormitorio2.png"
            alt="Dormitorio moderno"
            width={700}
            height={500}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
