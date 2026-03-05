import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo-2.png";

export default function Page404() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-xl">
        <div className="flex justify-center items-center gap-3 mb-10">
          <img src={logo} alt="Cute Rescue logo" className="h-16 w-auto" />
          <img src={logo2} alt="Cute Rescue" className="h-16 w-auto" />
        </div>

        <h1 className="text-[110px] font-bold text-[#22687B] leading-none">404</h1>

        <h2 className="text-3xl font-semibold mt-4 text-gray-800">
          Sección en construcción
        </h2>

        <p className="text-gray-600 mt-4">
          Esta sección todavía se está construyendo. Muy pronto estará disponible dentro del ecosistema de Cute Rescue.
        </p>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-block bg-[#FF8C09] text-white font-semibold px-8 py-3 rounded-[10px]
                       transition hover:brightness-110 active:brightness-95"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}