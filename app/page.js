"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToDevis = () => {
    const devisSection = document.getElementById("devis");

    if (devisSection) {
      devisSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO VIDEO */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-black-sports-car-driving-1560678166516?download=1080p"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <div className="border border-orange-500 text-orange-400 px-6 py-2 rounded-full inline-block mb-6 tracking-[4px] uppercase text-sm">
            Convoyage automobile premium
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6">
            EC <span className="text-orange-500">MOVE AUTO</span>
          </h1>

          <p className="text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
            Transport et livraison de véhicules partout en France.
            <br />
            Service rapide, sécurisé et professionnel.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button
              onClick={scrollToDevis}
              className="bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl shadow-orange-500/40 transition-all duration-300 hover:scale-105"
            >
              Obtenir un devis
            </button>

            <a
              href="https://wa.me/33632155235"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white hover:border-orange-500 hover:text-orange-400 px-10 py-5 rounded-2xl text-xl transition-all duration-300"
            >
              WhatsApp Direct
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-20">
            Nos Services Premium
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Convoyage toutes distances",
              "Livraison clients & concessions",
              "Transport véhicules premium",
              "Service express",
              "Disponibilité nationale",
              "Suivi personnalisé",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 hover:border-orange-500 p-10 rounded-3xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-orange-500 text-5xl mb-6">🚘</div>

                <h3 className="text-2xl font-bold mb-4">{service}</h3>

                <p className="text-gray-400">
                  Service premium professionnel avec prise en charge rapide et
                  sécurisée.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="py-28 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-20">
            Pourquoi choisir EC Move Auto ?
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              "Ponctualité professionnelle",
              "Convoyage sécurisé",
              "Suivi en temps réel",
              "Disponibilité rapide",
              "Image premium",
              "Intervention partout en France",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-orange-500 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-orange-500 w-4 h-4 rounded-full"></div>

                  <p className="text-xl">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="py-28 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-20">
            Véhicules transportés
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400",
              "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400",
              "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1400",
            ].map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl group"
              >
                <img
                  src={img}
                  alt="Véhicule"
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVIS */}
      <section
        id="devis"
        className="py-28 px-6 bg-black border-t border-zinc-900"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl font-black text-center mb-16">
            Demande de devis
          </h2>

          <form
            action={`mailto:contact@ecmoveauto.fr?subject=Demande de devis convoyage`}
            method="post"
            encType="text/plain"
            className="space-y-6"
          >
            <input
              type="text"
              name="Nom"
              placeholder="Nom / Société"
              required
              className="w-full bg-black border border-zinc-800 rounded-2xl p-6 text-xl focus:outline-none focus:border-orange-500"
            />

            <input
              type="tel"
              name="Téléphone"
              placeholder="Téléphone"
              required
              className="w-full bg-black border border-zinc-800 rounded-2xl p-6 text-xl focus:outline-none focus:border-orange-500"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              required
              className="w-full bg-black border border-zinc-800 rounded-2xl p-6 text-xl focus:outline-none focus:border-orange-500"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="Départ"
                placeholder="Ville de départ"
                className="w-full bg-black border border-zinc-800 rounded-2xl p-6 text-xl focus:outline-none focus:border-orange-500"
              />

              <input
                type="text"
                name="Arrivée"
                placeholder="Ville d'arrivée"
                className="w-full bg-black border border-zinc-800 rounded-2xl p-6 text-xl focus:outline-none focus:border-orange-500"
              />
            </div>

            <textarea
              name="Message"
              rows="6"
              placeholder="Votre demande"
              className="w-full bg-black border border-zinc-800 rounded-2xl p-6 text-xl focus:outline-none focus:border-orange-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 py-6 rounded-2xl text-2xl font-bold transition-all duration-300 hover:scale-[1.02] shadow-2xl shadow-orange-500/30"
            >
              Recevoir mon devis
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-14 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="text-5xl font-black">
              EC <span className="text-orange-500">MOVE AUTO</span>
            </h3>

            <p className="text-gray-400 mt-4 text-xl">
              Convoyage automobile premium partout en France.
            </p>
          </div>

          <div className="text-gray-300 text-lg">
            <p>06 32 15 52 35</p>
            <p>contact@ecmoveauto.fr</p>
            <p>59 rue de Ponthieu, Bureau 326, 75008 Paris</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/33632155235"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      >
        💬
      </a>

      {/* TOP BUTTON */}
      {showTopButton && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-28 right-6 z-[9999] bg-orange-500 hover:bg-orange-600 text-white w-14 h-14 rounded-full shadow-2xl text-2xl transition-all duration-300 hover:scale-110"
        >
          ↑
        </button>
      )}
    </main>
  );
}
