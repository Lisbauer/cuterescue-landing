import dogImg from "../assets/images/cutetag-dog-image.png";

export default function CuteTagDevice() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left image */}
            <div className="w-full">
              <img
                src={dogImg}
                alt="Cute Tag"
                className="w-full h-full object-cover min-h-[280px] lg:min-h-[420px]"
                draggable="false"
              />
            </div>

            {/* Right content */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-black mb-6">
                Dispositivo Cute Tag
              </h3>

              <div className="text-[#323232] text-base sm:text-lg leading-relaxed space-y-5 max-w-xl">
                <p>
                  Nuestro Tag GPS inteligente se conecta directamente con la aplicación,
                  brindando localización precisa y actualizaciones automáticas.
                </p>

                <p>
                  Pequeño, resistente al agua, estético y diseñado para acompañar cada
                  aventura de tus mascotas.
                </p>

                <p>
                  Compatible con nuestra App: Visualizá la ubicación en tiempo real,
                  recibí alertas y consultá los recorridos.
                </p>
              </div>

              <button
                type="button"
                className="mt-10 w-fit bg-[#FF8C09] text-white font-bold
                           px-8 py-3 rounded-[10px] text-lg
                           transition hover:brightness-110 active:brightness-95"
              >
                Conocé nuestros&nbsp; Cute Tag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}