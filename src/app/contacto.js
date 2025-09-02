"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, User, MessageSquare } from "lucide-react";

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
        setMessage("❌ Ocurrió un error al enviar tu mensaje. Intenta nuevamente.");
      }
    } catch (error) {
      setMessage("⚠️ Error de conexión. Verifica tu internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="w-full px-5 md:px-10 lg:px-[60px] mt-[20px]"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-[1500px] bg-[#D8B892] rounded-[30px] mx-auto flex flex-col md:flex-row items-stretch gap-8 py-12 px-6 md:px-[60px]">
        
        {/* Columna izquierda: Info de contacto */}
        <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#6B4C2D] mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-[#7A5A3A] mb-6">
            Si necesitas ayuda u orientación, escríbenos a través del formulario o llámanos. 
            Estamos listos para asesorarte y conversar contigo.
          </p>

          <div className="space-y-4 text-[#503b2b] text-base">
            <p className="flex items-center gap-2">
              <Phone size={18} /> <a href="tel:+51999999999" className="hover:underline">+51 999 999 999</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} /> <a href="mailto:contacto@empresa.com" className="hover:underline">contacto@empresa.com</a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={18} /> Av. Angamos Este 1551, Surquillo, Lima
            </p>
          </div>
        </div>

        {/* Columna derecha: Formulario */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-3 bg-white p-6 rounded-2xl shadow-md">
          <div className="flex items-center border rounded px-3 py-2">
            <User size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              required
              className="w-full outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center border rounded px-3 py-2">
            <Mail size={18} className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="E-mail de contacto"
              required
              className="w-full outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center border rounded px-3 py-2">
            <Phone size={18} className="text-gray-400 mr-2" />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono de contacto"
              className="w-full outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center border rounded px-3 py-2">
            <MessageSquare size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              name="asunto"
              placeholder="Asunto"
              className="w-full outline-none bg-transparent"
            />
          </div>
          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            required
            className="w-full p-3 border rounded bg-transparent h-32 resize-none"
          ></textarea>

          {/* Botón Enviar */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#A67C52] text-white font-bold py-3 px-6 rounded-[999px] transition ${
              loading ? "cursor-not-allowed opacity-70" : "hover:bg-[#91653F]"
            }`}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>

          {/* Mensaje de estado */}
          {message && (
            <div
              className={`mt-3 text-center font-medium p-3 rounded ${
                message.startsWith("✅") ? "bg-green-100 text-green-700" :
                message.startsWith("❌") ? "bg-red-100 text-red-700" :
                "bg-yellow-100 text-yellow-700"
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
