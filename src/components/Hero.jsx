import heroImage from "../assets/images/hero-bg.png";

export default function Hero() {
  return (
    <section className="bg-white w-full ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Image container */}
        <div className="relative w-full mx-auto">
          
          {/* Background image */}
          <img
            src={heroImage}
            alt="CuteRescue Hero"
            className="w-full object-cover rounded-2xl"
          />

          {/* Text content inside image */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full md:w-1/2 px-6 sm:px-12">
              
              <div className="flex flex-col gap-6">
                
                <h1 className="text-[#323232] font-semibold
                               text-3xl sm:text-4xl lg:text-[44px] leading-tight">
                  La app que asegura a tu mascota con el mejor cuidado
                </h1>

                <p className="text-[#323232]
                              text-lg sm:text-xl lg:text-[22px]">
                  Localiza de la mejor manera a tu compañero
                </p>

                <button
                  className="w-fit bg-[#FF8C09] text-white font-bold
                             text-lg sm:text-xl lg:text-[20px]
                             px-8 py-3 rounded-[10px]
                             transition hover:brightness-110 active:brightness-95"
                >
                  Registrate
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}