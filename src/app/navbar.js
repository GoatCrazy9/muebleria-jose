"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] z-10"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <nav
        role="navigation"
        className="flex justify-between items-center bg-white px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.08)] relative"
      >
        {/* Logo */}
        <Image
          src="/img/logo.png"
          alt="Logo Mueblería José"
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover mr-4"
        />

        {/* Menú Desktop */}
        <ul className="hidden md:flex gap-8 text-lg font-medium text-black ">
          {["Catálogo", "Servicios", "Proyectos", "Blog", "Contacto"].map(
            (item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#000000] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Botón Desktop */}
        <a
          href="#"
          className="hidden md:inline-block bg-[#6D4C41] hover:bg-[#D8B892] text-white px-4 py-2 rounded-full font-semibold transition-colors duration-300"
        >
          Solicitar cotización
        </a>

        {/* Hamburguesa */}
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1 z-20 focus:outline-none"
        >
          {open ? (
            <span className="text-2xl font-bold">✕</span>
          ) : (
            <>
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
            </>
          )}
        </button>

        {/* Menú móvil */}
        <div
          className={`absolute top-[70px] left-0 w-full bg-white rounded-2xl shadow-lg px-6 py-4 flex flex-col md:hidden transition-all duration-300 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-4 text-lg font-medium text-black">
            {["Catálogo", "Servicios", "Proyectos", "Blog", "Contacto"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#000000] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
          <a
            href="#"
            className="mt-4 block bg-[#6D4C41] hover:bg-[#D8B892] text-white text-center px-4 py-2 rounded-full font-semibold transition-colors duration-300"
          >
            Solicitar cotización
          </a>
        </div>
      </nav>
    </div>
  );
}
