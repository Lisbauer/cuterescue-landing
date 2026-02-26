import { useState } from "react";
import petsImage from "../assets/images/2dogs-2cats.png";

export default function Newsletter() {
  const [petType, setPetType] = useState("Perro");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // por ahora solo ejemplo
    console.log({ petType, email });
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/10 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: form */}
            <div className="p-8 sm:p-12 lg:p-14">
              <p className="text-xs sm:text-sm tracking-wide text-black/60 uppercase">
                Suscribite para recibir novedades de Tractive
              </p>

              <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-black">
                ¡Conseguí un 30%!
              </h2>

              <p className="mt-4 text-[#323232] text-sm sm:text-base leading-relaxed max-w-md">
                Enterate de las últimas novedades, consejos y descuentos.
                Suscribite ahora y conseguí un 30% de descuento.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <p className="font-semibold text-black mb-3">
                    ¿Qué tipo de mascota tienes?
                  </p>

                  <div className="flex flex-wrap gap-6 text-sm text-[#323232]">
                    {["Perro", "Gato", "Ambos"].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="petType"
                          value={option}
                          checked={petType === option}
                          onChange={(e) => setPetType(e.target.value)}
                          className="accent-[#FF8C09]"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="max-w-md">
                  <label className="block text-sm font-semibold text-black mb-2">
                    Tu dirección de correo electrónico*
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Escribe aquí tu email"
                    className="w-full rounded-[10px] border border-black/20 px-4 py-3
                               outline-none focus:border-[#FF8C09] focus:ring-2 focus:ring-[#FF8C09]/20"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full max-w-md rounded-[10px] bg-[#FF8C09] text-white font-bold
                             py-3 text-lg transition hover:brightness-110 active:brightness-95"
                >
                  Registrarme ahora
                </button>

                <p className="text-xs text-black/60 max-w-md leading-relaxed">
                  Al suscribirte a este newsletter, aceptás nuestros{" "}
                  <span className="underline cursor-pointer hover:text-black">
                    Términos y Condiciones
                  </span>{" "}
                  y nuestra{" "}
                  <span className="underline cursor-pointer hover:text-black">
                    Política de privacidad
                  </span>
                  .
                </p>
              </form>
            </div>

            {/* Right: image */}
            <div className="bg-white">
              <img
                src={petsImage}
                alt="Mascotas Cute Rescue"
                className="w-full h-full object-cover min-h-[320px] lg:min-h-[520px]"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}