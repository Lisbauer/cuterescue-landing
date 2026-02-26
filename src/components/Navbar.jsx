import { useState } from "react";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo-2.png";

const navLinks = [
  { text: "Informe", href: "#informe" },
  { text: "Vet 24hrs", href: "#vet24" },
  { text: "Documentación", href: "#documentacion" },
  { text: "Eventos", href: "#eventos" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white h-[130px] sticky top-0 z-50 border-b border-black/5">
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center justify-between">
          {/* Left: logos */}
          <div className="flex items-center gap-3 shrink-0">
            <img
              src={logo}
              alt="CuteRescue logo"
              className="h-16 sm:h-27 w-auto object-contain"
              draggable="false"
            />
            <img
              src={logo2}
              alt="CuteRescue logo 2"
              className="h-16 sm:h-27 w-auto object-contain"
              draggable="false"
            />
          </div>

          {/* Center: links (desktop) */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-10 bg-[#F5F5F5] rounded-[10px] px-6 py-3">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-[#22687B]  text-[22px] transition
                               hover:opacity-80 hover:-translate-y-[1px] active:translate-y-0"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: buttons (desktop) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              type="button"
              className="rounded-[10px] bg-[#22687B] text-white px-7 py-2 text-[19px] font-semibold
                         transition hover:brightness-110 active:brightness-95"
            >
              Ingresar
            </button>

            <button
              type="button"
              className="rounded-[10px] bg-white text-[#22687B] px-7 py-2 text-[19px] font-semibold
                         border border-[#22687B] transition
                         hover:bg-[#22687B]/5 active:bg-[#22687B]/10"
            >
              Registrar
            </button>
          </div>

          {/* Mobile/tablet: burger */}
          <button
            type="button"
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center rounded-[10px]
                       border border-black/10 px-3 py-2 transition hover:bg-black/5"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {/* Simple burger/X */}
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-1 block h-[2px] w-6 bg-[#22687B] transition ${
                  isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 block h-[2px] w-6 bg-[#22687B] transition ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-1 block h-[2px] w-6 bg-[#22687B] transition ${
                  isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile/tablet dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 space-y-4">
            <div className="bg-[#F5F5F5] rounded-[10px] p-4">
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block text-[#22687B] font-medium transition
                                 hover:opacity-80 hover:translate-x-[2px]"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="rounded-[10px] bg-[#22687B] text-white px-4 py-3 text-sm font-semibold
                           transition hover:brightness-110 active:brightness-95"
              >
                Ingresar
              </button>

              <button
                type="button"
                className="rounded-[10px] bg-white text-[#22687B] px-4 py-3 text-sm font-semibold
                           border border-[#22687B] transition
                           hover:bg-[#22687B]/5 active:bg-[#22687B]/10"
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}