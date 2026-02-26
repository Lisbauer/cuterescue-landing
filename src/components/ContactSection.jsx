import { useState } from "react";
import bgForm from "../assets/images/bg-form.png";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: "Consultar sobre la App",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // por ahora ejemplo
    console.log("Contact form:", formData);
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl overflow-hidden shadow-lg"
          style={{
            backgroundImage: `url(${bgForm})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="p-10 sm:p-14 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* Left text */}
              <div className="text-white">
                <p className="text-xl sm:text-2xl font-light leading-snug">
                  Dudas o consulta acerca <br />
                  de <span className="text-[#FF8C09] font-semibold">Cute Rescue</span>
                </p>

                <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Entre en contacto <br />
                  con nuestro equipo <br />
                  de atención al cliente.
                </h2>

                <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-lg">
                  Queremos saber más de vos y de tu mascota.
                </p>
              </div>

              {/* Right form */}
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-md ml-auto space-y-6"
                >
                  {/* Full name */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Nombre completo
                    </label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Escriba su nombre completo"
                      className="w-full rounded-[10px] bg-white px-4 py-3 outline-none
                                 border border-black/10 focus:ring-2 focus:ring-white/30"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Escriba su correo electrónico"
                      className="w-full rounded-[10px] bg-white px-4 py-3 outline-none
                                 border border-black/10 focus:ring-2 focus:ring-white/30"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Teléfono
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Escriba su número"
                      className="w-full rounded-[10px] bg-white px-4 py-3 outline-none
                                 border border-black/10 focus:ring-2 focus:ring-white/30"
                    />
                  </div>

                  {/* Reason */}
                  <div>
                    <label className="block text-white font-semibold mb-3">
                      Motivo del mensaje:
                    </label>

                    <div className="space-y-2 text-white/95 text-sm">
                      {[
                        "Consultar sobre la App",
                        "Reportar un problema",
                        "Información sobre eventos",
                        "Otro",
                      ].map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="reason"
                            value={option}
                            checked={formData.reason === option}
                            onChange={handleChange}
                            className="accent-[#FF8C09]"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Mensaje:
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Escribir mensaje..."
                      rows={4}
                      className="w-full rounded-[10px] bg-white px-4 py-3 outline-none
                                 border border-black/10 resize-none
                                 focus:ring-2 focus:ring-white/30"
                      required
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full rounded-[10px] bg-[#FF8C09] text-white font-extrabold
                               py-3 text-lg transition hover:brightness-110 active:brightness-95"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}