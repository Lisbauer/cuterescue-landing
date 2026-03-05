import { useState } from "react";
import emailjs from "@emailjs/browser";
import bgForm from "../assets/images/bg-form.png";

const SERVICE_ID = "service_3lt40pa";
const TEMPLATE_ID = "template_yg0qk8k";
const PUBLIC_KEY = "_1JeKVRWgqdhCbJSZ";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: "Consultar sobre la App",
    message: "",
  });

  const [status, setStatus] = useState({
    sending: false,
    ok: null, // null | true | false
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // si el usuario edita, limpiamos el mensaje de estado
    if (status.ok !== null) {
      setStatus({ sending: false, ok: null, text: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ sending: true, ok: null, text: "" });

   
    const templateParams = {
      from_name: formData.fullName,
      reply_to: formData.email,
      phone: formData.phone || "No informado",
      reason: formData.reason,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      setStatus({
        sending: false,
        ok: true,
        text: "Mensaje enviado con éxito ✓",
      });

      // limpiar el form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        reason: "Consultar sobre la App",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        sending: false,
        ok: false,
        text: "No se pudo enviar el mensaje. Probá de nuevo.",
      });
    }
  };

  return (
    <section id="contacto" className="bg-white py-24 scroll-mt-[130px]">
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
              <div className="text-white">
                <p className="text-xl sm:text-2xl font-light leading-snug">
                  Dudas o consulta acerca <br />
                  de{" "}
                  <span className="text-[#FF8C09] font-semibold">Cute Rescue</span>
                </p>

                <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Entre en contacto
                  con nuestro equipo 
                  de atención al cliente.
                </h2>

                <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-lg">
                  Queremos saber más de vos y de tu mascota.
                </p>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="w-full max-w-md ml-auto space-y-6">
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
                        <label key={option} className="flex items-center gap-3 cursor-pointer">
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

                  <button
                    type="submit"
                    disabled={status.sending}
                    className="w-full rounded-[10px] bg-[#FF8C09] text-white font-extrabold
                               py-3 text-lg transition hover:brightness-110 active:brightness-95
                               disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status.sending ? "Enviando..." : "Enviar mensaje"}
                  </button>

                  {status.ok !== null && (
                    <p
                      className={`text-sm font-semibold ${
                        status.ok ? "text-green-200" : "text-red-200"
                      }`}
                    >
                      {status.text}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}