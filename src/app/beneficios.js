"use client";

export default function Beneficios() {
  return (
    <section className="w-full px-4 py-16" data-aos="fade-up">
      <div
        className="max-w-[1200px] mx-auto bg-[#D8B892] py-12 px-8 rounded-[20px] shadow-xl"
      data-aos="fade-up-left"
      data-aos-duration="1000"
      data-aos-delay="300"
      >
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-[#503b2b] text-3xl font-extrabold mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-[#3a2a1d] text-base font-medium max-w-2xl mx-auto">
            Nos diferenciamos porque ofrecemos calidad, confianza y beneficios
            que marcan la diferencia.
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Beneficio 1 */}
          <div
            className="bg-[#A67C52] rounded-2xl shadow-md p-8 flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="/icons/envio.png"
              alt="Envío gratis"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-white font-bold text-lg">Envío Gratis</h3>
            <p className="text-[#EADFD6] text-sm mt-3 leading-relaxed">
              Llevamos tus muebles hasta la puerta de tu hogar sin costo
              adicional en Lima.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div
            className="bg-[#A67C52] rounded-2xl shadow-md p-8 flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img
              src="/icons/garantia.png"
              alt="Garantía"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-white font-bold text-lg">Garantía de 2 años</h3>
            <p className="text-[#EADFD6] text-sm mt-3 leading-relaxed">
              Todos nuestros productos cuentan con garantía extendida por
              defectos de fábrica.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div
            className="bg-[#A67C52] rounded-2xl shadow-md p-8 flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <img
              src="/icons/calidad.png"
              alt="Calidad premium"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-white font-bold text-lg">Calidad Premium</h3>
            <p className="text-[#EADFD6] text-sm mt-3 leading-relaxed">
              Muebles diseñados con materiales de primera y acabados finos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
