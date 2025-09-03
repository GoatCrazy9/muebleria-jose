"use client";

import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Mapa() {
  return (
    <section
      className="w-full px-5 md:px-10 lg:px-[60px] mt-[60px]"
      data-aos="fade-up-left"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div className="max-w-[1400px] bg-[#FAF3E0] rounded-[30px] mx-auto py-12 px-6 md:px-[60px] shadow-xl flex flex-col items-center gap-12">
        
        {/* Columna izquierda: Información */}
        <div className="w-full lg:w-3/4 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-[#5C4033] mb-8 flex items-center justify-center lg:justify-start gap-3">
            <MapPin className="w-8 h-8 text-[#C08552]" />
            Encuéntranos
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-4 text-[#5C4033] bg-[#FFF8EC] p-6 rounded-2xl shadow-md">
              <MapPin className="w-7 h-7 text-[#C08552] shrink-0" />
              <span>
                <strong className="text-[#5C4033]">Dirección:</strong><br />
                Av. Angamos Este 1551<br />
                Block 1 – Tienda #####<br />
                Surquillo, Lima – Perú
              </span>
            </div>

            <div className="flex items-start gap-4 text-[#5C4033] bg-[#FFF8EC] p-6 rounded-2xl shadow-md">
              <Clock className="w-7 h-7 text-[#C08552] shrink-0" />
              <span>
                <strong className="text-[#5C4033]">Horarios:</strong><br />
                Lunes a Sábado: 10 AM – 8 PM<br />
                Domingo: 10 AM – 7 PM
              </span>
            </div>

            <div className="flex items-start gap-4 text-[#5C4033] bg-[#FFF8EC] p-6 rounded-2xl shadow-md">
              <Phone className="w-7 h-7 text-[#C08552] shrink-0" />
              <span>
                <strong className="text-[#5C4033]">Teléfono:</strong><br />
                +51 939 162 863
              </span>
            </div>

            <div className="flex items-start gap-4 text-[#5C4033] bg-[#FFF8EC] p-6 rounded-2xl shadow-md">
              <Mail className="w-7 h-7 text-[#C08552] shrink-0" />
              <span>
                <strong className="text-[#5C4033]">Email:</strong><br />
                mauriciourquiza0@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* Columna derecha: Mapa de Google */}
        <div className="w-full lg:w-3/4 h-[450px] rounded-[25px] overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.839270264645!2d-77.01739372417172!3d-12.11227904372121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c82a4d0f1f7f%3A0x2ec94a2e1c9d4e0b!2sAv.%20Angamos%20Este%201551%2C%20Surquillo%2015038%2C%20Per%C3%BA!5e0!3m2!1ses-419!2spe!4v1694030112345!5m2!1ses-419!2spe"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
