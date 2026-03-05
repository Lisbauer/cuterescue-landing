import heroImage from "../assets/images/hero-bg.png";
import heroImageMobile from "../assets/images/hero-bg2.png";

export default function Hero() {
  return (
    <section id="inicio" className="bg-white w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    
        <div className="hidden md:block relative w-full">
          <img
            src={heroImage}
            alt="CuteRescue Hero"
            className="w-full object-cover rounded-2xl"
            draggable="false"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="pl-10 lg:pl-12 w-[60%] lg:w-[55%] max-w-[560px]">
              <div className="flex flex-col gap-4 lg:gap-6">
                <h1
                  className="
                    text-[#323232] font-semibold leading-tight
                    text-[30px] lg:text-[44px]
                  "
                >
                  La app que asegura a tu mascota con el mejor cuidado
                </h1>

                <p
                  className="
                    text-[#323232]
                    text-[16px] lg:text-[22px]
                  "
                >
                  Localiza de la mejor manera a tu compañero
                </p>

                <a
                  href="https://cute-rescue.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit"
                >
                  <button
                    type="button"
                    className="
                      bg-[#FF8C09] text-white font-bold rounded-[10px]
                      text-[16px] lg:text-[20px]
                      px-6 py-2.5 lg:px-8 lg:py-3
                      transition hover:brightness-110 active:brightness-95
                    "
                  >
                    Registrate
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="md:hidden relative w-full mt-2">
        
          <img
            src={heroImageMobile}
            alt="CuteRescue Hero Mobile"
            className="w-full rounded-2xl object-cover h-[520px] sm:h-[620px]"
            draggable="false"
          />

      
          <div className="absolute top-0 left-0 w-full h-1/2 flex items-center">
            <div className="px-6 sm:px-10 w-full">
              <div className="flex flex-col gap-4 max-w-[360px]">
                <h1 className="text-[#323232] font-semibold text-[28px] leading-tight">
                  La app que asegura a tu mascota con el mejor cuidado
                </h1>

                <p className="text-[#323232] text-[15px]">
                  Localiza de la mejor manera a tu compañero
                </p>

                <a
                  href="https://cute-rescue.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit"
                >
                  <button
                    type="button"
                    className="
                      bg-[#FF8C09] text-white font-bold rounded-[10px]
                      text-[16px] px-6 py-2.5
                      transition hover:brightness-110 active:brightness-95
                    "
                  >
                    Registrate
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}