"use client";
export default function Galeria() {
  const imagenes = [
    { src: "/img/dormitorio1.jpg", alt: "Dormitorio moderno con cama matrimonial" },
    { src: "/img/dormitorio2.jpg", alt: "Dormitorio minimalista con closet" },
    { src: "/img/dormitorio3.jpg", alt: "Dormitorio elegante con veladores" },
    { src: "/img/dormitorio4.jpg", alt: "Juego de dormitorio completo" },
    { src: "/img/dormitorio5.jpg", alt: "Cama individual en habitación juvenil" },
    { src: "/img/dormitorio6.jpg", alt: "Dormitorio acogedor estilo rústico" },
  ];

  return (
    <section className="w-full  py-16 px-6"
      data-aos="fade-up-left"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#503b2b] mb-12">
          Galería de inspiración
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imagenes.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
