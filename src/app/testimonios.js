"use client";
import { useState, useEffect } from "react";

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
    }, 4000); // Cambia cada 4 segundos
    return () => clearInterval(interval);
  }, [testimonios.length]);

  return (
    <section className="w-full py-16 px-6"
    data-aos="fade-right"
    data-aos-duration="1000"
    data-aos-delay="300"
    >
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#503b2b] mb-10">
          Testimonios de nuestros clientes
        </h2>

        <div className="relative bg-[#D8B892] shadow-lg rounded-2xl p-8 mx-auto max-w-xl transition-all duration-500">
          <p className="text-gray-700 italic mb-4">
            “{testimonios[index].texto}”
          </p>
          <span className="font-semibold text-[#503b2b]">
            — {testimonios[index].nombre}
          </span>
        </div>
      </div>
    </section>
  );
}
