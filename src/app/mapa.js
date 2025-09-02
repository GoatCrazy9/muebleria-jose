"use client";

export default function Mapa() {
  return (
    <section
      className="w-full px-5 md:px-10 lg:px-[60px] mt-[40px]"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div className="max-w-[1500px] bg-[#D8B892] rounded-[30px] mx-auto py-10 px-5 md:px-[60px] shadow-lg flex flex-col md:flex-row items-start gap-10">
        
        {/* Columna izquierda: Información */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-[#6B4C2D] mb-6">Encuéntranos</h2>
          <p className="text-xl text-[#7A5A3A] mb-4">
            <strong>Dirección:</strong><br />
            Av. Angamos Este 1551<br />
            Block 1 – Tienda 77<br />
            Surquillo, Lima – Perú
          </p>
          <p className="text-xl text-[#7A5A3A] mb-4">
            <strong>Horarios:</strong><br />
            Lunes a Sábado: 10 AM – 8 PM<br />
            Domingo: 11 AM – 6 PM
          </p>
          <p className="text-xl text-[#7A5A3A] mb-4">
            <strong>Teléfono:</strong><br />
            +51 987 654 321
          </p>
          <p className="text-xl text-[#7A5A3A]">
            <strong>Email:</strong><br />
            contacto@tutienda.com
          </p>
        </div>

        {/* Columna derecha: Mapa de Google */}
        <div className="w-full md:w-1/2 h-[400px] rounded-[20px] overflow-hidden shadow-xl border-4 border-[#A67C52]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.839270264645!2d-77.01739372417172!3d-12.11227904372121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c82a4d0f1f7f%3A0x2ec94a2e1c9d4e0b!2sAv.%20Angamos%20Este%201551%2C%20Surquillo%2015038%2C%20Per%C3%BA!5e0!3m2!1ses-419!2spe!4v1694030112345!5m2!1ses-419!2spe"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
