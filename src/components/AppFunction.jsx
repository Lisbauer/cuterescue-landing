import icon5 from "../assets/images/icon-5.png";
import icon6 from "../assets/images/icon-6.png";
import icon7 from "../assets/images/icon-7.png";

const steps = [
  {
    id: 1,
    icon: icon5,
    text: "Registrate y creá\ntu Perfil Digital.",
  },
  {
    id: 2,
    icon: icon6,
    text: "Cargá los datos\nde tu mascota.",
  },
  {
    id: 3,
    icon: icon7,
    text: "Click al botón\nUbicame\ny ¡listo!",
    highlight: "Ubicame",
  },
];

export default function AppFunction() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-black mb-12">
          Cómo funciona nuestra App
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 place-items-center">
          {steps.map((step) => (
            <div key={step.id} className="text-center max-w-[240px]">
              <div className="mx-auto w-28 h-28 rounded-full border-2 border-[#22687B] flex items-center justify-center">
                <img
                  src={step.icon}
                  alt={`Paso ${step.id}`}
                  className="w-14 h-14 object-contain"
                  draggable="false"
                />
              </div>

              <p className="mt-6 text-lg font-semibold text-black leading-snug whitespace-pre-line">
                <span className="mr-1">{step.id}.</span>{" "}
                {step.highlight ? (
                  <>
                    {step.text.split(step.highlight)[0]}
                    <span className="text-[#FF8C09]">{step.highlight}</span>
                    {step.text.split(step.highlight)[1]}
                  </>
                ) : (
                  step.text
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}