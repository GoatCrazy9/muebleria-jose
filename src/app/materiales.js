export default function Materiales() {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b " id="materiales"
          data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"> 
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Título */}
        <h2 className="text-4xl font-bold text-[#503b2b] mb-12 relative inline-block">
          Materiales de Calidad
          <span className="block w-28 h-1 bg-[#D8B892] mx-auto mt-3 rounded"></span>
        </h2>

        {/* Grid de materiales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4 border-[#D8B892]">
            <img
              src="/img/madera_cedro.jpg"
              alt="Cedro"
              className="w-24 h-24 mx-auto mb-5 rounded-full object-cover border-4 border-[#D8B892] shadow-md"
            />
            <h3 className="text-xl font-semibold text-[#503b2b] mb-3">Madera Cedro</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Elegancia y durabilidad, ideal para muebles de alta resistencia y acabados finos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4 border-[#A67C52]">
            <img
              src="/img/madera_pino.jpg"
              alt="Pino"
              className="w-24 h-24 mx-auto mb-5 rounded-full object-cover border-4 border-[#A67C52] shadow-md"
            />
            <h3 className="text-xl font-semibold text-[#503b2b] mb-3">Madera Pino</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Material económico, versátil y sostenible, con un estilo cálido y natural.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4 border-[#C69B7B]">
            <img
              src="/img/madera_mdf.jpg"
              alt="MDF"
              className="w-24 h-24 mx-auto mb-5 rounded-full object-cover border-4 border-[#C69B7B] shadow-md"
            />
            <h3 className="text-xl font-semibold text-[#503b2b] mb-3">MDF Premium</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Acabados lisos y modernos, perfecto para diseños minimalistas y contemporáneos.
            </p>
          </div>
        </div>

        {/* Marcas Aliadas */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-[#503b2b] mb-8">
            Trabajamos con marcas de confianza
          </h3>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <img
              src="/img/logo_truper.png"
              alt="Truper"
              className="h-14 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
            />
            <img
              src="/img/logo_sika.png"
              alt="Sika"
              className="h-14 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
            />
            <img
              src="/img/logo_3m.png"
              alt="3M"
              className="h-14 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
