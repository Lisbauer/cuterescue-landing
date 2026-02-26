import { useState } from "react";
import icon1 from "../assets/images/icon-1.png";
import icon2 from "../assets/images/icon-2.png";
import icon3 from "../assets/images/icon-3.png";
import icon4 from "../assets/images/icon-4.png";

const featuresData = [
  {
    id: 1,
    title: "Geolocalización",
    icon: icon1,
    description:
      "Nuestra app ofrece un sistema de geolocalización en tiempo real con alertas que te permitirá rastrear y controlar los paseos de tu mascota garantizando su seguridad para que tengas total tranquilidad.",
  },
  {
    id: 2,
    title: "Historial médico",
    icon: icon2,
    description:
      "Guarda y consulta fácilmente el historial médico de tu mascota para tener siempre acceso a su información de salud.",
  },
  {
    id: 3,
    title: "Vet 24h",
    icon: icon3,
    description:
      "Accede rápidamente a veterinarias disponibles las 24 horas ante cualquier emergencia.",
  },
  {
    id: 4,
    title: "Eventos informativos",
    icon: icon4,
    description:
      "Mantente informado sobre eventos, campañas y actividades relacionadas con el cuidado animal.",
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(1);

  const selectedFeature = featuresData.find(
    (item) => item.id === activeFeature
  );

  return (
    <section className="bg-[#EDEDED] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-12">
          Características clave
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`cursor-pointer rounded-2xl bg-white p-8 flex flex-col items-center text-center
                          shadow-md transition
                          ${
                            activeFeature === feature.id
                              ? "border-2 border-[#FF8C09]"
                              : "border border-transparent"
                          }
                          hover:shadow-lg`}
            >
              <div className="bg-[#2F6F7B] p-6 rounded-xl mb-6">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#323232]">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-lg text-[#323232] max-w-4xl leading-relaxed">
          {selectedFeature.description}
        </p>
      </div>
    </section>
  );
}