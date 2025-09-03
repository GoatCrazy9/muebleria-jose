"use client";

export default function Categorias() {
  const categorias = [
    {
      titulo: "Camas matrimoniales",
      img: "/categorias/matrimonial.jpg",
    },
    {
      titulo: "Camas individuales",
      img: "/categorias/individual.jpg",
    },
    {
      titulo: "Closets",
      img: "/categorias/closet.jpg",
    },
    {
      titulo: "Veladores",
      img: "/categorias/velador.jpg",
    },
    {
      titulo: "Juegos de dormitorio",
      img: "/categorias/juego.jpg",
    },
    {
      titulo: "Juegos de dormitorio",
      img: "/categorias/juego.jpg",
    },
  ];

  return (
    <section className="w-full px-4 py-12"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10 text-[#503b2b]">
          Categorías de Dormitorios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categorias.map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform duration-300"
            >
              <img
                src={cat.img}
                alt={cat.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-[#503b2b]">
                  {cat.titulo}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
