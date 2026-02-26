import tag1 from "../assets/images/cutetag-1.png";
import tag2 from "../assets/images/cutetag-2.png";
import tag3 from "../assets/images/cutetag-3.png";
import tag4 from "../assets/images/cutetag-4.png";

export default function CuteTags() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Images grid */}
          <div className="grid grid-cols-2 gap-6">
            {[tag1, tag2, tag3, tag4].map((img, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={img}
                  alt={`Cute Tag ${index + 1}`}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>
            ))}
          </div>

          {/* Right: Text content */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6">
              Las Cute Tags
            </h2>

            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-8 leading-snug">
              Un accesorio que brinda: <br />
              ¡Identidad, Seguridad y Estilo!
            </h3>

            <div className="space-y-6 text-[#323232] text-base sm:text-lg leading-relaxed">
              <p>
                Un corazón visible del ecosistema <strong>Cute Rescue.</strong>{" "}
                Cada diseño refleja nuestra misión de protegerte, cuidarte y te
                conectar a su mascota en tiempo real.
              </p>

              <p>
                <strong>Diseño personalizado:</strong> materiales suaves, con colores
                inspirados en la calma y el bienestar animal.
              </p>

              <p>
                <strong>Fácil identificación:</strong> al escanearla, cualquiera puede
                acceder a la información médica y de contacto.
              </p>
            </div>

            <button
              type="button"
              className="mt-10 bg-[#FF8C09] text-white font-bold
                         px-10 py-3 rounded-[10px] text-lg
                         transition hover:brightness-110 active:brightness-95"
            >
              Comprar
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}