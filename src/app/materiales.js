export default function Materiales() {
  return (
    <section className="w-full  py-16 px-6" id="materiales">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl font-bold text-[#503b2b] mb-10 relative inline-block">
          Materiales de Calidad
          <span className="block w-24 h-1 bg-[#D8B892] mx-auto mt-2 rounded"></span>
        </h2>

        {/* Grid de materiales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src="/img/madera_cedro.jpg"
              alt="Cedro"
              className="w-20 h-20 mx-auto mb-4 rounded-full object-cover border-2 border-[#D8B892]"
            />
            <h3 className="text-lg font-semibold text-[#503b2b] mb-2">Madera Cedro</h3>
            <p className="text-sm text-gray-700">
              Elegancia y durabilidad, ideal para muebles de alta resistencia y acabados finos.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src="/img/madera_pino.jpg"
              alt="Pino"
              className="w-20 h-20 mx-auto mb-4 rounded-full object-cover border-2 border-[#D8B892]"
            />
            <h3 className="text-lg font-semibold text-[#503b2b] mb-2">Madera Pino</h3>
            <p className="text-sm text-gray-700">
              Material económico, versátil y sostenible, con un estilo cálido y natural.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src="/img/madera_mdf.jpg"
              alt="MDF"
              className="w-20 h-20 mx-auto mb-4 rounded-full object-cover border-2 border-[#D8B892]"
            />
            <h3 className="text-lg font-semibold text-[#503b2b] mb-2">MDF Premium</h3>
            <p className="text-sm text-gray-700">
              Acabados lisos y modernos, perfecto para diseños minimalistas y contemporáneos.
            </p>
          </div>
        </div>

        {/* Marcas Aliadas */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-[#503b2b] mb-6">
            Trabajamos con marcas de confianza
          </h3>
          <div className="flex justify-center items-center gap-10 flex-wrap">
            <img src="/img/logo_truper.png" alt="Truper" className="h-12 grayscale hover:grayscale-0 transition" />
            <img src="/img/logo_sika.png" alt="Sika" className="h-12 grayscale hover:grayscale-0 transition" />
            <img src="/img/logo_3m.png" alt="3M" className="h-12 grayscale hover:grayscale-0 transition" />
          </div>
        </div>
      </div>
    </section>
  );
}
