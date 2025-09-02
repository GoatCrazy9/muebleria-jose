export default function FAQ() {
  return (
    <section className="w-full  py-16 px-6" id="faq">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl font-bold text-[#503b2b] mb-10 relative inline-block">
          Preguntas Frecuentes
          <span className="block w-20 h-1 bg-[#D8B892] mx-auto mt-2 rounded"></span>
        </h2>

        {/* Lista de preguntas */}
        <div className="space-y-6 text-left max-w-3xl mx-auto">
          {/* Pregunta 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-[#503b2b] mb-2">
              ¿El envío incluye armado?
            </h3>
            <p className="text-gray-700 text-sm">
              Sí ✅, nuestro servicio incluye el armado completo de los muebles en tu hogar sin costo adicional.
            </p>
          </div>

          {/* Pregunta 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-[#503b2b] mb-2">
              ¿Cuánto tarda la entrega?
            </h3>
            <p className="text-gray-700 text-sm">
              El tiempo de entrega es de 2 a 5 días hábiles dependiendo de tu ubicación.  
              Para Lima Metropolitana, la entrega suele ser en máximo 48 horas.
            </p>
          </div>

          {/* Pregunta 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-[#503b2b] mb-2">
              ¿Qué garantía tienen los muebles?
            </h3>
            <p className="text-gray-700 text-sm">
              Todos nuestros muebles cuentan con **1 año de garantía** por defectos de fabricación.  
              También ofrecemos servicio de mantenimiento preventivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
