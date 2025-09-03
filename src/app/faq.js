"use client";

import { HelpCircle, CheckCircle, Clock, Shield } from "lucide-react";

export default function FAQ() {
  return (
    <section
      className="w-full py-20 px-6 "
      id="faq"
      data-aos="fade-up-right"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#503b2b] mb-12 relative inline-block">
          Preguntas Frecuentes
          <span className="block w-24 h-1 bg-[#C08552] mx-auto mt-3 rounded-full"></span>
        </h2>

        {/* Lista de preguntas */}
        <div className="space-y-6 text-left max-w-3xl mx-auto">
          {/* Pregunta 1 */}
          <div className="bg-[#FFF8EC] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4">
            <CheckCircle className="w-7 h-7 text-[#C08552] shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-[#503b2b] mb-2">
                ¿El envío incluye armado?
              </h3>
              <p className="text-gray-700 text-sm">
                Sí , nuestro servicio incluye el armado completo de los muebles en tu hogar sin costo adicional.
              </p>
            </div>
          </div>

          {/* Pregunta 2 */}
          <div className="bg-[#FFF8EC] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4">
            <Clock className="w-7 h-7 text-[#C08552] shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-[#503b2b] mb-2">
                ¿Cuánto tarda la entrega?
              </h3>
              <p className="text-gray-700 text-sm">
                El tiempo de entrega es de <strong>2 a 5 días hábiles</strong> dependiendo de tu ubicación.  
                Para Lima Metropolitana, la entrega suele ser en máximo <strong>48 horas</strong>.
              </p>
            </div>
          </div>

          {/* Pregunta 3 */}
          <div className="bg-[#FFF8EC] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4">
            <Shield className="w-7 h-7 text-[#C08552] shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-[#503b2b] mb-2">
                ¿Qué garantía tienen los muebles?
              </h3>
              <p className="text-gray-700 text-sm">
                Todos nuestros muebles cuentan con <strong>1 año de garantía</strong> por defectos de fabricación.  
                También ofrecemos servicio de mantenimiento preventivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
