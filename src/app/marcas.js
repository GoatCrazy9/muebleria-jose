"use client";

export default function Marcas() {
  return (
    <section
      className="max-w-[1400px] mx-auto px-5 mt-16 "
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      {/* Título */}
      <div className="max-w-[600px] mx-auto bg-[#A67C52] rounded-[20px] py-10 text-center mb-10">
        <h2 className="text-white text-3xl font-semibold">
          Trabajamos con estas marcas
        </h2>
      </div>

      {/* Cuadros de marcas */}
      <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Cuadro 1 */}
        <div className="h-[250px] bg-[#A67C52] p-6 rounded-[20px] flex flex-col items-center justify-center">
          <h3 className="text-white text-3xl mb-4">Paraiso</h3>
          <img
            src="/img/paraiso_logo.png"
            alt="Paraiso Logo"
            className="w-[100px] h-[100px] object-cover rounded-full border-4 border-white"
          />
        </div>

        {/* Cuadro 2 */}
        <div className="h-[250px] bg-[#A67C52] p-6 rounded-[20px] flex flex-col items-center justify-center">
          <h3 className="text-white text-3xl mb-4">El cisne</h3>
          <img
            src="/img/cisne_logo.png"
            alt="El Cisne Logo"
            className="w-[100px] h-[100px] object-cover rounded-full border-4 border-white"
          />
        </div>

        {/* Cuadro 3 */}
        <div className="h-[250px] bg-[#A67C52] p-6 rounded-[20px] flex flex-col items-center justify-center">
          <h3 className="text-white text-3xl mb-4">Rosen</h3>
          <img
            src="/img/rosen_logo.png"
            alt="Rosen Logo"
            className="w-[100px] h-[100px] object-cover rounded-full border-4 border-white"
          />
        </div>

        {/* Cuadro 4 */}
        <div className="h-[250px] bg-[#A67C52] p-6 rounded-[20px] flex flex-col items-center justify-center">
          <h3 className="text-white text-3xl mb-4">Drimer</h3>
          <img
            src="/img/drimer_logo.png"
            alt="Drimer Logo"
            className="w-[100px] h-[100px] object-cover rounded-full border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
}
