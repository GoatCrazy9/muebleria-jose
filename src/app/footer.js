// src/app/Footer.js
"use client";

import { Facebook, Instagram, MessageCircle, Youtube, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#503b2b] text-white py-8 px-4">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

        {/* CTA Final */}
        <div className="max-w-sm">
          <h2 className="text-2xl font-bold mb-3 text-[#D8B892]">
            Convierte tu dormitorio en el lugar de tus sueños ✨
          </h2>
          <p className="text-sm mb-4">
            Diseñamos muebles y espacios pensados para tu comodidad y estilo.  
            Escríbenos o visítanos, ¡queremos ser parte de tu hogar!
          </p>

          {/* Redes sociales */}
          <div className="flex gap-3">
            <a href="https://wa.me/51999999999" target="_blank" rel="noreferrer"
              className="p-2 rounded-full bg-[#A67C52] hover:bg-[#91653F] transition">
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer"
              className="p-2 rounded-full bg-[#A67C52] hover:bg-[#91653F] transition">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer"
              className="p-2 rounded-full bg-[#A67C52] hover:bg-[#91653F] transition">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noreferrer"
              className="p-2 rounded-full bg-[#A67C52] hover:bg-[#91653F] transition">
              <Youtube className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2">Compañía</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#nosotros" className="hover:text-[#D8B892]">Sobre nosotros</a></li>
            <li><a href="#blog" className="hover:text-[#D8B892]">Blog</a></li>
            <li><a href="#proyectos" className="hover:text-[#D8B892]">Proyectos</a></li>
            <li><a href="#contacto" className="hover:text-[#D8B892]">Contacto</a></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2">Productos</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#muebles" className="hover:text-[#D8B892]">Muebles</a></li>
            <li><a href="#dormitorios" className="hover:text-[#D8B892]">Dormitorios</a></li>
            <li><a href="#salas" className="hover:text-[#D8B892]">Salas</a></li>
            <li><a href="#decoracion" className="hover:text-[#D8B892]">Decoración</a></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2">Ayuda</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#faqs" className="hover:text-[#D8B892]">FAQs</a></li>
            <li><a href="#terminos" className="hover:text-[#D8B892]">Términos y condiciones</a></li>
            <li><a href="#privacidad" className="hover:text-[#D8B892]">Política de privacidad</a></li>
            <li><a href="#garantia" className="hover:text-[#D8B892]">Garantía</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="flex flex-col max-w-[220px]">
          <h3 className="text-lg font-bold mb-2">Contáctanos</h3>
          <p className="flex items-center gap-2 text-sm mb-2">
            <MapPin className="w-4 h-4 text-[#D8B892]" />
            Av. Angamos Este 1551, Surquillo, Lima
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-[#D8B892]" />
            +51 999 999 999
          </p>
        </div>

        {/* Suscripción */}
        <div className="flex flex-col max-w-xs">
          <h3 className="text-lg font-bold mb-2">Suscríbete</h3>
          <p className="text-sm mb-3">Recibe novedades y promociones en tu correo.</p>
          <form method="POST" className="flex flex-col gap-2">
            <input
              type="email"
              name="correo"
              placeholder="Tu correo electrónico"
              className="p-2 bg-white text-black border border-gray-300 rounded w-full"
              required
            />
            <button
              type="submit"
              className="bg-[#A67C52] text-white font-bold py-2 px-4 rounded hover:bg-[#91653F] transition"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </div>

      {/* Línea inferior simple */}
      <div className="border-t border-gray-600 mt-6 pt-3 text-left text-xs text-gray-400 px-4">
        Diseñado con ❤️ en Lima
      </div>
    </footer>
  );
}
