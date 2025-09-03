"use client";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

export default function Testimonios() {
  const testimonios = [
    {
      nombre: "María López",
      texto: "⭐⭐⭐⭐⭐ La cama llegó puntual y de excelente calidad. Muy recomendados.",
    },
    {
      nombre: "Juan Pérez",
      texto: "⭐⭐⭐⭐⭐ Excelente servicio y los muebles son duraderos y elegantes.",
    },
    {
      nombre: "Ana Torres",
      texto: "⭐⭐⭐⭐⭐ Me encantó mi nuevo dormitorio, todo quedó perfecto.",
    },
    {
      nombre: "Carlos Ramírez",
      texto: "⭐⭐⭐⭐⭐ Atención personalizada y entrega rápida. Muy satisfecho.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonios.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonios.length]);

  return (
    <section
      className="w-full py-20 px-6"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-[#503b2b] mb-12">
          Testimonios de nuestros clientes
        </h2>

        {/* Contenedor principal */}
        <div className="relative bg-[#D8B892] shadow-lg rounded-2xl p-10 mx-auto max-w-xl overflow-hidden">
          {/* Ícono decorativo */}
          <Quote
            className="absolute top-6 left-6 text-[#A67C52] opacity-20"
            size={60}
          />

          {/* Testimonio con animación */}
          <div
            key={index}
            className="transition-all duration-700 ease-in-out opacity-100"
          >
            <p className="text-[#3a2a1d] italic text-lg mb-6 leading-relaxed">
              “{testimonios[index].texto}”
            </p>
            <span className="font-semibold text-[#503b2b] text-base">
              — {testimonios[index].nombre}
            </span>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonios.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index
                    ? "bg-[#503b2b] scale-110"
                    : "bg-[#A67C52] opacity-50"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
