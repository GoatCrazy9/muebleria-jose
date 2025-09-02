"use client";

export default function Hero() {
  return (
    
    <section
      className="relative max-w-[1600px] h-[800px] mx-auto mt-[60px] rounded-[30px] overflow-hidden flex items-start pt-[100px] px-5 md:px-[60px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] bg-[url('/img/img1.png')] bg-cover bg-center "
      data-aos-duration="1000" 
      data-aos="fade-left"
    >
      {/* Capa de degradado */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 to-black/10 z-[1]"></div>

      {/* Contenido */}
      <div className="relative z-[2] flex flex-col items-start justify-center mt-[100px] max-w-[600px] text-white text-left rounded-[20px] "
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
      >
        <h1 className="text-3xl font-bold mb-6 leading-snug">
          Muebles que transforman espacios, simplicidad y elegancia en cada pieza
        </h1>
        <a
          href="#"
          className="inline-block bg-white text-black px-4 py-3 rounded-full mb-6 text-base font-medium"
        >
          Descargar catálogo PDF
        </a>
        <p className="text-2xl max-w-[600px]">
          Cada pieza está diseñada para adaptarse a tu estilo de vida,
          combinando funcionalidad y estética. Descubre cómo nuestros muebles
          pueden renovar tus espacios con elegancia y calidez.
        </p>
      </div>
    </section>
    
  );
}
