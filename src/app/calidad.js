"use client";

import { Bed, Sparkles, ShieldCheck } from "lucide-react";

export default function Calidad() {
  return (
    <section
      className="w-full px-6 py-20 bg-[#FAF8F6]"
      data-aos="fade-up-left"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        
        {/* FILA SUPERIOR */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* Cuadro 1 */}
          <div className="group bg-gradient-to-br from-[#9C6B43] to-[#7B4F2A] p-8 rounded-2xl shadow-lg w-full md:max-w-[500px] transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-3 rounded-full animate-pulse-slow group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Bed className="text-white w-7 h-7" />
              </div>
              <h2 className="text-white text-2xl font-bold">
                Comodidad que se adapta a ti
              </h2>
            </div>
            <span className="block w-20 h-1 bg-[#D8B892] mb-4 rounded"></span>
            <p className="text-white/90 leading-relaxed">
              Diseñamos cada pieza pensando en tu bienestar. Camas, cabeceras y 
              muebles auxiliares se integran a tu espacio, creando armonía y 
              funcionalidad. 
              <br />
              La comodidad no es un lujo: es nuestra esencia.
            </p>
          </div>

          {/* Cuadro 2 */}
          <div className="group bg-gradient-to-br from-[#F3E0CC] to-[#E6C8A6] p-8 rounded-2xl shadow-lg w-full md:max-w-[700px] transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#5C3A1A]/10 p-3 rounded-full animate-pulse-slow group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Sparkles className="text-[#5C3A1A] w-7 h-7" />
              </div>
              <h2 className="text-[#5C3A1A] text-2xl font-bold">
                Estilo que transforma tu descanso
              </h2>
            </div>
            <span className="block w-24 h-1 bg-[#D8B892] mb-4 rounded"></span>
            <p className="text-[#5C3A1A]/90 leading-relaxed">
              Desde líneas limpias hasta acabados sofisticados, nuestros diseños 
              elevan tu dormitorio. Cada pieza es una declaración de estilo, pensada 
              para un ambiente acogedor, moderno y único.
            </p>
          </div>
        </div>

        {/* CUADRO INFERIOR */}
        <div className="group bg-gradient-to-r from-[#6D4C41] to-[#4E342E] p-10 rounded-2xl shadow-xl text-center transition-transform hover:scale-105 hover:shadow-2xl">
          <div className="flex flex-col items-center mb-4">
            <div className="bg-white/20 p-4 rounded-full mb-3 animate-pulse-slow group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
              <ShieldCheck className="text-white w-9 h-9" />
            </div>
            <h2 className="text-white text-3xl font-bold">
              Calidad que se siente
            </h2>
          </div>
          <span className="block w-28 h-1 bg-[#D8B892] mx-auto mb-6 rounded"></span>
          <p className="text-white/90 leading-relaxed max-w-4xl mx-auto">
            Nuestros muebles resisten el paso del tiempo sin perder su esencia. 
            Usamos materiales seleccionados y procesos de fabricación que garantizan 
            durabilidad, comodidad y estilo. 
            <br /><br />
            Más que muebles, creamos piezas que acompañan tus momentos de descanso 
            y renovación.
          </p>
        </div>
      </div>
    </section>
  );
}
