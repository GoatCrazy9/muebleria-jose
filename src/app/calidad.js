"use client";

export default function Calidad() {
  return (
    <section
      className="w-full px-5 py-16"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        
        {/* FILA SUPERIOR: DOS CUADROS */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* Cuadro 1 */}
          <div className="bg-gradient-to-br from-[#A67C52] to-[#8B5E3C] p-8 rounded-2xl shadow-lg w-full md:max-w-[500px] transition-transform hover:scale-105">
            <h2 className="text-white text-2xl font-bold mb-3 relative">
              Comodidad que se adapta a ti
              <span className="block w-16 h-1 bg-white mt-2 rounded"></span>
            </h2>
            <p className="text-white/90 leading-relaxed">
              Diseñamos cada pieza pensando en tu bienestar. Nuestras camas,
              cabeceras y muebles auxiliares se integran perfectamente a
              cualquier espacio, aportando armonía y funcionalidad. 
              La comodidad no es un lujo, es nuestra prioridad.
            </p>
          </div>

          {/* Cuadro 2 */}
          <div className="bg-gradient-to-br from-[#E6C8A6] to-[#D8B892] p-8 rounded-2xl shadow-lg w-full md:max-w-[700px] transition-transform hover:scale-105">
            <h2 className="text-[#6B4C2D] text-2xl font-bold mb-3 relative">
              Estilo que transforma tu descanso
              <span className="block w-20 h-1 bg-[#6B4C2D] mt-2 rounded"></span>
            </h2>
            <p className="text-[#6B4C2D]/90 leading-relaxed">
              Desde líneas limpias hasta acabados sofisticados, nuestros diseños
              elevan el concepto de dormitorio. Cada mueble es una declaración de
              estilo, pensado para crear un ambiente acogedor, moderno y personalizado.
            </p>
          </div>
        </div>

        {/* CUADRO INFERIOR */}
        <div className="bg-gradient-to-r from-[#6D4C41] to-[#4E342E] p-10 rounded-2xl shadow-xl transition-transform hover:scale-105">
          <h2 className="text-white text-3xl font-bold mb-3 relative">
            Calidad que se siente
            <span className="block w-24 h-1 bg-white mt-2 rounded"></span>
          </h2>
          <p className="text-white/90 leading-relaxed max-w-4xl">
            Cada uno de nuestros muebles está pensado para resistir el paso del
            tiempo sin perder su esencia. Trabajamos con materiales seleccionados
            cuidadosamente y aplicamos procesos de fabricación que garantizan
            durabilidad, comodidad y estilo. 
            <br /><br />
            No solo diseñamos muebles: creamos piezas que se integran a tu día a día,
            acompañándote en tus momentos de descanso y renovación.
          </p>
        </div>
      </div>
    </section>
  );
}
