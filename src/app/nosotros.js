"use client";

import { Target, Eye } from "lucide-react"; // 👈 iconos de misión y visión

export default function Nosotros() {
  return (
    <section
      className="max-w-[1500px] mx-auto mt-12 px-5"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row items-center bg-[#F5E6D3] rounded-[20px] shadow-lg overflow-hidden">
        
        {/* Imagen a la izquierda */}
        <div className="w-full md:w-1/2 h-[400px]">
          <img
            src="/img/nosotros.png" // 👉 cambia por foto del taller, equipo o muebles
            alt="Nosotros"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto a la derecha */}
        <div className="w-full md:w-1/2 p-10 text-[#6B4C2D]">
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
            Sobre Nosotros
          </h2>
          <p className="text-xl leading-relaxed mb-4">
            En nuestra mueblería creemos que cada dormitorio debe ser un reflejo 
            de tu estilo y personalidad. Nos especializamos en crear muebles con 
            materiales nobles, acabados únicos y un diseño pensado para acompañarte 
            en tus momentos de descanso.
          </p>
          <p className="text-xl leading-relaxed mb-4">
            Con años de experiencia en el rubro, combinamos tradición artesanal 
            con innovación en diseño para ofrecerte productos duraderos, elegantes 
            y funcionales.
          </p>
        </div>
      </div>

      {/* Bloques de misión y visión */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Misión */}
        <div className="bg-white shadow-md rounded-[20px] p-8 flex flex-col items-center text-center">
          <Target className="w-12 h-12 text-[#A67C52] mb-4" />
          <h3 className="text-2xl font-bold text-[#6B4C2D] mb-3">Nuestra Misión</h3>
          <p className="text-lg text-[#7A5A3A]">
            Brindar muebles de alta calidad que transformen los espacios de nuestros
            clientes en lugares únicos, combinando confort, durabilidad y diseño
            personalizado.
          </p>
        </div>

        {/* Visión */}
        <div className="bg-white shadow-md rounded-[20px] p-8 flex flex-col items-center text-center">
          <Eye className="w-12 h-12 text-[#A67C52] mb-4" />
          <h3 className="text-2xl font-bold text-[#6B4C2D] mb-3">Nuestra Visión</h3>
          <p className="text-lg text-[#7A5A3A]">
            Ser reconocidos como la mueblería líder en innovación y compromiso con
            la excelencia, creando hogares llenos de calidez y estilo en todo el país.
          </p>
        </div>
      </div>
    </section>
  );
}
