"use client";

export default function Proceso() {
  const pasos = [
    {
      numero: "1",
      titulo: "Elige tu producto",
      descripcion:
        "Explora nuestra variedad de dormitorios y selecciona el que más se adapte a tu estilo y necesidad.",
    },
    {
      numero: "2",
      titulo: "Haz tu pedido",
      descripcion:
        "Realiza tu compra fácilmente en línea o contáctanos por WhatsApp para una atención personalizada.",
    },
    {
      numero: "3",
      titulo: "Recíbelo en tu casa",
      descripcion:
        "Nos encargamos de la entrega y armado de tu dormitorio para que lo disfrutes sin preocupaciones.",
    },
  ];

  return (
    <section className="w-full  py-15 px-6"
    data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-delay="300"
    >
      <div className="max-w-[1200px]  mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#503b2b] mb-12">
          ¿Cómo comprar con nosotros?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pasos.map((paso, i) => (
            <div
              key={i}
              className="bg-[#D8B892] shadow-md rounded-2xl p-8 hover:shadow-xl transition"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[#A67C52] text-white text-xl font-bold mb-4">
                {paso.numero}
              </div>
              <h3 className="text-lg font-semibold text-[#503b2b] mb-2">
                {paso.titulo}
              </h3>
              <p className="text-gray-600 text-sm">{paso.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
