const plans = [
  {
    id: "freemium",
    title: "Plan Freemium",
    priceMain: "Gratis",
    priceSub: "$0 / mes",
    features: [
      "Perfil digital",
      "1 mascota para registrar",
      "Anuncios publicitarios",
      "Rastreo de 2 Km",
      "3 slots en documentación",
    ],
    buttonText: "Elegir Plan Gratuito",
    featured: false,
  },
  {
    id: "premium",
    title: "Plan Premium",
    priceMain: "$14.99",
    priceSub: "/ mes",
    features: [
      "Todo lo del plan freemium",
      "Hasta 2 mascotas",
      "Sin publicidad",
      "Rastreo de 8 Km",
      "8 slots en documentación",
    ],
    buttonText: "Elegir Plan Premium",
    featured: true,
  },
  {
    id: "plus",
    title: "Plan Plus",
    priceMain: "$39.99",
    priceSub: "/ mes",
    features: [
      "Todo lo del plan Premium",
      "Hasta 5 mascotas",
      "Atención 24 hrs",
      "Rastreo de hasta 20 Km",
      "Documentación infinita",
    ],
    buttonText: "Elegir Plan Plus",
    featured: false,
  },
];

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-2 text-sm text-[#323232]">
      <span className="text-emerald-500 font-bold leading-none mt-[2px]">✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function PricingPlans() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-black mb-14">
          Planes y precios
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl bg-white p-10 shadow-md border transition
                ${
                  plan.featured
                    ? "border-[#FF8C09] shadow-lg"
                    : "border-black/5 hover:shadow-lg"
                }`}
            >
              {/* Little star for featured */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="w-7 h-7 rounded-full bg-white border border-[#FF8C09] flex items-center justify-center shadow-sm">
                    <span className="text-[#FF8C09] text-sm">★</span>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <p className="text-[#22687B] font-semibold text-lg">
                  {plan.title}
                </p>

                <div className="mt-2">
                  <p className="text-3xl font-extrabold text-black leading-tight">
                    {plan.priceMain}
                  </p>
                  <p className="text-black/70 font-medium">{plan.priceSub}</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-10">
                {plan.features.map((f) => (
                  <CheckItem key={f}>{f}</CheckItem>
                ))}
              </ul>

              {/* Button */}
              <button
                type="button"
                className={`w-full rounded-[10px] py-3 font-semibold text-sm transition
                  ${
                    plan.featured
                      ? "bg-[#FF8C09] text-white hover:brightness-110 active:brightness-95"
                      : "bg-[#2F7B74] text-white hover:brightness-110 active:brightness-95"
                  }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}