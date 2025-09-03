// src/app/Footer.js
"use client";

import {
  Facebook,
  Instagram,
  MessageCircle,
  Youtube,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#503b2b] text-white pt-12 pb-6 px-6"
          data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="200">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* CTA Final */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-[#D8B892] leading-snug">
            Convierte tu dormitorio en el lugar de tus sueños 
          </h2>
          <p className="text-sm mb-5 text-gray-200 leading-relaxed">
            Diseñamos muebles y espacios pensados para tu comodidad y estilo.  
            Escríbenos o visítanos, ¡queremos ser parte de tu hogar!
          </p>

          {/* Redes sociales */}
          <div className="flex gap-3">
            <a
              href="https://wa.me/51939162863"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#D8B892] hover:bg-[#c7a072] transition"
            >
              <MessageCircle className="w-5 h-5 text-[#503b2b]" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#D8B892] hover:bg-[#c7a072] transition"
            >
              <Instagram className="w-5 h-5 text-[#503b2b]" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#D8B892] hover:bg-[#c7a072] transition"
            >
              <Facebook className="w-5 h-5 text-[#503b2b]" />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#D8B892] hover:bg-[#c7a072] transition"
            >
              <Youtube className="w-5 h-5 text-[#503b2b]" />
            </a>
          </div>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-[#D8B892]">Compañía</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#nosotros" className="hover:text-[#D8B892]">Sobre nosotros</a></li>
            <li><a href="#blog" className="hover:text-[#D8B892]">Blog</a></li>
            <li><a href="#proyectos" className="hover:text-[#D8B892]">Proyectos</a></li>
            <li><a href="#contacto" className="hover:text-[#D8B892]">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-[#D8B892]">Productos</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#muebles" className="hover:text-[#D8B892]">Muebles</a></li>
            <li><a href="#dormitorios" className="hover:text-[#D8B892]">Dormitorios</a></li>
            <li><a href="#salas" className="hover:text-[#D8B892]">Salas</a></li>
            <li><a href="#decoracion" className="hover:text-[#D8B892]">Decoración</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-[#D8B892]">Ayuda</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#faqs" className="hover:text-[#D8B892]">FAQs</a></li>
            <li><a href="#terminos" className="hover:text-[#D8B892]">Términos y condiciones</a></li>
            <li><a href="#privacidad" className="hover:text-[#D8B892]">Política de privacidad</a></li>
            <li><a href="#garantia" className="hover:text-[#D8B892]">Garantía</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-[#D8B892]">Contáctanos</h3>
          <p className="flex items-center gap-2 text-sm mb-2">
            <MapPin className="w-4 h-4 text-[#D8B892]" />
            Av. Angamos Este 1551, Surquillo, Lima
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-[#D8B892]" />
            +51 939 162 863
          </p>
        </div>

        {/* Suscripción */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold mb-3 text-[#D8B892]">Suscríbete</h3>
          <p className="text-sm mb-4 text-gray-200">
            Recibe novedades y promociones en tu correo.
          </p>
          <form method="POST" className="flex gap-2">
            <input
              type="email"
              name="correo"
              placeholder="Tu correo electrónico"
              className="p-2 bg-white text-black border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#D8B892]"
              required
            />
            <button
              type="submit"
              className="bg-[#D8B892] text-[#503b2b] font-bold py-2 px-4 rounded hover:bg-[#c7a072] transition"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-[#7a5c44] mt-10 pt-4 text-center text-xs text-gray-300">
        Diseñado por GoatCrazy9 on Github -Lima, Perú {new Date().getFullYear()}
      </div>
    </footer>
  );
}
