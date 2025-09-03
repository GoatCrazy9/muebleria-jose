"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contacto() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setMessage("✅ Tu mensaje fue enviado correctamente. ¡Gracias por escribirnos!");
        e.target.reset();
      } else {
        setMessage("❌ Ocurrió un error al enviar tu mensaje.");
      }
    } catch {
      setMessage("⚠️ Error de conexión. Intenta más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-5 px-6 md:px-12 lg:px-20"
          data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300">
      <div
        className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 
        bg-gradient-to-r from-[#A67C52] to-[#C69B7B] 
        rounded-3xl shadow-2xl overflow-hidden p-10"
      >
        {/* Columna izquierda */}
        <div className="flex flex-col justify-center text-white pr-6">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Conversemos sobre tu espacio 
          </h2>
          <p className="text-lg opacity-90 mb-10">
            Cuéntanos tu idea y la hacemos realidad. Nuestro equipo está listo para asesorarte.
          </p>

          <div className="space-y-6 text-base">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20">
                <Phone size={22} />
              </div>
              <a href="tel:+51999999999" className="hover:underline">
                +51 939 162 863
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20">
                <Mail size={22} />
              </div>
              <a href="mailto:contacto@empresa.com" className="hover:underline">
                mauriciourquiza0@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20">
                <MapPin size={22} />
              </div>
              Av. Angamos Este 1551, Surquillo, Lima
            </div>
          </div>
        </div>

        {/* Columna derecha: Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 text-gray-800"
        >
          <h3 className="text-2xl font-semibold text-[#6B4C2D] mb-6">
            Envíanos un mensaje
          </h3>

          <div className="space-y-5">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              required
              className="w-full border-b-2 border-gray-300 focus:border-[#A67C52] outline-none py-2 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
              className="w-full border-b-2 border-gray-300 focus:border-[#A67C52] outline-none py-2 transition-all"
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono (opcional)"
              className="w-full border-b-2 border-gray-300 focus:border-[#A67C52] outline-none py-2 transition-all"
            />
            <input
              type="text"
              name="asunto"
              placeholder="Asunto"
              className="w-full border-b-2 border-gray-300 focus:border-[#A67C52] outline-none py-2 transition-all"
            />
            <textarea
              name="mensaje"
              placeholder="Tu mensaje..."
              required
              className="w-full border-2 border-gray-300 focus:border-[#A67C52] outline-none p-3 rounded-lg transition-all h-32"
            ></textarea>
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full bg-gradient-to-r from-[#A67C52] to-[#91653F] text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all ${
              loading
                ? "cursor-not-allowed opacity-70"
                : "hover:scale-105 hover:shadow-lg"
            }`}
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {/* Mensaje */}
          {message && (
            <div
              className={`mt-4 text-center font-medium p-3 rounded-lg ${
                message.startsWith("✅")
                  ? "bg-green-100 text-green-700"
                  : message.startsWith("❌")
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
