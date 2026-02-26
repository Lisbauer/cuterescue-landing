const faqItems = [
  {
    id: 1,
    question: "¿Qué pasa si mi mascota se aleja de su radio permitido?",
    answer:
      "Activamos un alerta inmediata a tu dispositivo y a la comunidad de Cute Rescue para rastrear cuanto antes a tu mascota.",
  },
  {
    id: 2,
    question: "¿La aplicación Cue Rescue es gratuita?",
    answer:
      "Sí, puedes empezar con el Plan FreeMium (Gratis) que te permite registrar a tu mascota y acceder a funcionalidades básicas.",
  },
  {
    id: 3,
    question: "¿Necesito un chip o collar especial?",
    answer:
      "Sí, nuestro sistema está diseñado para funcionar con nuestros collares y pretales que incluyen este chip.",
  },
  {
    id: 4,
    question: "¿Puedo registrar varias mascotas en una sola cuenta?",
    answer:
      "Sí, podés registrar múltiples mascotas. El número de \"slots\" o espacios de documentación varía según tu plan.",
  },
  {
    id: 5,
    question: "¿Cómo subo el historial médico de mi mascota a la aplicación?",
    answer:
      "Podés cargar archivos (PDFs, imágenes) directamente desde tu teléfono o PC. También fechas de vacunas y desparasitaciónes para recibir recordatorios.",
  },
];

export default function Faq() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-black mb-14">
          Preguntas Frecuentes (FAQ)
        </h2>

        <div className="space-y-6">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-2xl bg-white border border-black/10 shadow-md"
            >
              {/* Left color bar */}
              <div className="absolute left-0 top-0 h-full w-20 bg-[#F6D59E]" />

              <div className="pl-28 pr-6 py-6 sm:pr-10">
                <p className="text-lg sm:text-xl font-extrabold text-black leading-snug">
                  {item.question}
                </p>
                <p className="mt-2 text-base sm:text-lg text-[#323232] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}