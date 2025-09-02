"use client";
export default function Beneficios() {
  return (

    <section
      className="w-full px-4 py-10"
      data-aos="fade-up"
     
    >
      <div className="max-w-[1200px] mx-auto bg-[#6D4C41] py-12 px-6 rounded-[20px]"
    data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-delay="300"
    >
        <div className="text-center mb-10">
          <h2 className="text-white text-2xl font-bold mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-[#EADFD6] text-base font-medium">
            Nos diferenciamos porque ofrecemos calidad, confianza y beneficios que marcan la diferencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Beneficio 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/icons/envio.png"
              alt="Envío gratis"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-white font-bold text-lg">Envío Gratis</h3>
            <p className="text-[#EADFD6] text-sm mt-2">
              Llevamos tus muebles hasta la puerta de tu hogar sin costo adicional en Lima.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div className="flex flex-col items-center">
            <img
              src="/icons/garantia.png"
              alt="Garantía"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-white font-bold text-lg">Garantía de 2 años</h3>
            <p className="text-[#EADFD6] text-sm mt-2">
              Todos nuestros productos cuentan con garantía extendida por defectos de fábrica.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div className="flex flex-col items-center">
            <img
              src="/icons/calidad.png"
              alt="Calidad premium"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-white font-bold text-lg">Calidad Premium</h3>
            <p className="text-[#EADFD6] text-sm mt-2">
              Muebles diseñados con materiales de primera y acabados finos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
