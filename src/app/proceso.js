"use client";
import { ShoppingBag, CreditCard, Home } from "lucide-react";

export default function Proceso() {
  const pasos = [
    {
      numero: "1",
      titulo: "Elige tu producto",
      descripcion:
        "Explora nuestra variedad de dormitorios y selecciona el que más se adapte a tu estilo y necesidad.",
      icono: <ShoppingBag size={28} />,
      bg: "#D8B892", // Beige dorado claro
    },
    {
      numero: "2",
      titulo: "Haz tu pedido",
      descripcion:
        "Realiza tu compra fácilmente en línea o contáctanos por WhatsApp para una atención personalizada.",
      icono: <CreditCard size={28} />,
      bg: "#C69B7B", // Beige medio
    },
    {
      numero: "3",
      titulo: "Recíbelo en tu casa",
      descripcion:
        "Nos encargamos de la entrega y armado de tu dormitorio para que lo disfrutes sin preocupaciones.",
      icono: <Home size={28} />,
      bg: "#A67C52", // Marrón dorado
    },
  ];

  return (
    <section
      className="w-full py-20 px-6"
       data-aos="fade-up-left"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#503b2b] mb-14">
          ¿Cómo comprar con nosotros?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pasos.map((paso, i) => (
            <div
              key={i}
              className="relative group shadow-md rounded-2xl p-10 transition-all hover:shadow-2xl hover:-translate-y-2"
              style={{ backgroundColor: paso.bg }}
            >
              {/* Círculo con ícono */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#503b2b] text-white shadow-lg mb-6 transition-all group-hover:scale-110">
                {paso.icono}
              </div>

              {/* Número */}
              <span className="absolute top-4 left-4 text-white font-bold text-lg bg-[#503b2b] px-2 py-1 rounded-md shadow-md">
                {paso.numero}
              </span>

              {/* Texto */}
              <h3 className="text-xl font-semibold text-[#503b2b] mb-3">
                {paso.titulo}
              </h3>
              <p className="text-[#3a2a1d] text-sm leading-relaxed">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
