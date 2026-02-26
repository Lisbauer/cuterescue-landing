import logo1 from "../assets/images/logo.png";
import logo2 from "../assets/images/logo-2.png";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import bgFooter from "../assets/images/bg-footer.png";

const siteLinks = [
  { text: "Como funciona", href: "#como-funciona" },
  { text: "Sobre Cute Tag", href: "#cute-tag" },
  { text: "Nuestra Web", href: "#web" },
  { text: "Nosotros", href: "#nosotros" },
  { text: "Planes", href: "#planes" },
  { text: "Preguntas FAQ", href: "#faq" },
];

const companyLinks = [
  { text: "Sobre nosotros", href: "#sobre-nosotros" },
  { text: "Contacto", href: "#contacto", external: true },
  { text: "Empleos", href: "#empleos", external: true },
  { text: "Cute Tag", href: "#cute-tag", external: true },
  { text: "Asistencia", href: "#asistencia" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "X" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer
  className="bg-white bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${bgFooter})`,
  }}
>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: big logo + QR box */}
          <div className="lg:col-span-4">
            <div className="flex items-start gap-6">
              <img
                src={logo1}
                alt="Cute Rescue logo"
                className="w-28 sm:w-32 h-auto"
                draggable="false"
              />
            </div>

            <div className="mt-10 bg-[#22687B] rounded-2xl p-5 flex items-center gap-5 max-w-md">
              {/* Placeholder QR (use logo1 now, you replace later) */}
              <div className="bg-white rounded-xl p-3 shrink-0">
                <img
                  src={logo1}
                  alt="QR placeholder"
                  className="w-20 h-20 object-contain"
                  draggable="false"
                />
              </div>

              <p className="text-white font-semibold leading-snug">
                Escaneá el código QR <br />
                para conseguir <br />
                la app de CuteRescue
              </p>
            </div>
          </div>

          {/* Middle: links */}
          <div className="lg:col-span-4 lg:pl-6">
            <p className="text-[#FF8C09] font-semibold text-lg mb-4">
              Arquitectura <br /> de sitio
            </p>

            <ul className="space-y-2">
              {siteLinks.map((l) => (
                <li key={l.text}>
                  <a
                    href={l.href}
                    className="text-[#22687B] text-sm transition hover:opacity-80"
                  >
                    {l.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle-right: company */}
          <div className="lg:col-span-2">
            <p className="text-[#FF8C09] font-semibold text-lg mb-4">Empresa</p>

            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.text} className="flex items-center gap-2">
                  <a
                    href={l.href}
                    className="text-[#22687B] text-sm transition hover:opacity-80"
                  >
                    {l.text}
                  </a>
                  {l.external && (
                    <span className="text-[#22687B] text-xs opacity-70">↗</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: brand + buttons */}
          <div className="lg:col-span-2 lg:justify-self-end">
            <img
              src={logo2}
              alt="Cute Rescue"
              className="w-44 h-auto ml-auto"
              draggable="false"
            />

            <div className="mt-8 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
              <button
                type="button"
                className="rounded-[10px] bg-[#22687B] text-white font-semibold px-8 py-3
                           transition hover:brightness-110 active:brightness-95"
              >
                Ingresar
              </button>

              <button
                type="button"
                className="rounded-[10px] bg-white text-[#22687B] font-semibold px-8 py-3
                           border border-[#22687B] transition
                           hover:bg-[#22687B]/5 active:bg-[#22687B]/10"
              >
                Registrar
              </button>
            </div>
          </div>
        </div>

        {/* Social + website + copyright */}
        <div className="mt-12 flex flex-col items-center gap-5">
          <div className="flex items-center gap-6">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-[#22687B] transition hover:opacity-80"
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </div>

          <a
            href="#"
            className="text-[#22687B] text-lg font-medium transition hover:opacity-80"
          >
            cuterescue.com.ar
          </a>

          <p className="text-xs text-black/60 text-center">
            Todos los derechos reservado © <span className="font-semibold">Cute Rescue</span>
          </p>
        </div>
      </div>
    </footer>
  );
}