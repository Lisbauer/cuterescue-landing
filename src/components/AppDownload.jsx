import bannerImage from "../assets/images/banner-appstores.png";

export default function AppDownload() {
  return (
    <section className="bg-[#F5F5F5] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={bannerImage}
              alt="Cute Rescue App"
              className="w-full max-w-[520px] object-contain"
              draggable="false"
            />
          </div>

          {/* Right Content */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6">
              Seguridad en su bolsillo
            </h2>

            <p className="text-[#323232] text-lg mb-8">
              Nos encontrás en las plataformas de App Store y Google Play Store,
              y en nuestra página web.
            </p>

            <h3 className="text-2xl font-bold text-black mb-6">
              Un ecosistema inteligente
            </h3>

            <div className="space-y-8">

              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FF8C09] flex items-center justify-center text-white font-bold">
                  ›
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-black">
                    Registro del dueño y su mascota
                  </h4>
                  <p className="text-[#323232] text-sm sm:text-base mt-1">
                    Registrate a vos y a tu mascota controlando ambos perfiles,
                    todo dentro de una sola plataforma.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FF8C09] flex items-center justify-center text-white font-bold">
                  ›
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-black">
                    Documentos y vacunación digital
                  </h4>
                  <p className="text-[#323232] text-sm sm:text-base mt-1">
                    Cargá documentación veterinaria en nuestra aplicación,
                    junto con alertas para recordarte las fechas de vencimiento.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FF8C09] flex items-center justify-center text-white font-bold">
                  ›
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-black">
                    Rastreo GPS en tiempo real
                  </h4>
                  <p className="text-[#323232] text-sm sm:text-base mt-1">
                    Generamos alertas en el GPS de manera eficaz y emergente,
                    rastreá a tu mascota estando lejos de casa de modo seguro.
                  </p>
                </div>
              </div>

            </div>

            <button
              type="button"
              className="mt-10 bg-[#FF8C09] text-white font-bold
                         px-10 py-3 rounded-[10px] text-lg
                         transition hover:brightness-110 active:brightness-95"
            >
              Descargar Cute Rescue
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}