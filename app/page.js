"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [missions, setMissions] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      setMissions((prev) => {
        if (prev < 248) {
          return prev + 2;
        }
        return 248;
      });
    }, 20);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
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
      {/* NAVBAR PREMIUM */}
      <nav className="fixed top-0 left-0 w-full z-[9999] backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          {/* LOGO ANIMÉ */}
          <div className="text-3xl font-black tracking-wide">
            <span className="text-white animate-pulse">EC</span>{" "}
            <span className="text-orange-500">MOVE AUTO</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-lg">
            <a
              href="#services"
              className="hover:text-orange-500 transition"
            >
              Services
            </a>

            <a
              href="#missions"
              className="hover:text-orange-500 transition"
            >
              Missions
            </a>

            <a
              href="#devis"
              className="hover:text-orange-500 transition"
            >
              Devis
            </a>

            <a
              href="https://wa.me/33632155235"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

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

      {/* COMPTEUR MISSIONS */}
      <section
        id="missions"
        className="py-24 bg-gradient-to-b from-black to-zinc-950"
      >
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-5xl font-black mb-12">
            Nos résultats parlent d’eux-mêmes
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
              <h3 className="text-6xl font-black text-orange-500 mb-4">
                {missions}+
              </h3>

              <p className="text-gray-300 text-xl">
                Missions réalisées
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
              <h3 className="text-6xl font-black text-orange-500 mb-4">
                24h
              </h3>

              <p className="text-gray-300 text-xl">
                Réactivité moyenne
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
              <h3 className="text-6xl font-black text-orange-500 mb-4">
                France
              </h3>

              <p className="text-gray-300 text-xl">
                Couverture nationale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-28 px-6 bg-black"
      >
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
                <div className="text-orange-500 text-5xl mb-6">
                  🚘
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service}
                </h3>

                <p className="text-gray-400">
                  Service premium professionnel avec prise en charge rapide et sécurisée.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVIS */}
      <section
        id="devis"
        className="py-28 px-6 bg-zinc-950"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl font-black text-center mb-16">
            Demande de devis
          </h2>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Nom / Société"
              className="w-full bg-black border border-zinc-800 rounded-2xl p-6 text-xl focus:outline-none focus:border-orange-500"
            />

            <input
              type="tel"
              placeholder="Téléphone"
              className="w-full bg-black border border-zinc-800 rounded-2xl p-6 text-xl focus:outline-none focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-black border border-zinc-800 rounded-2xl p-6 text-xl focus:outline-none focus:border-orange-500"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Ville de départ"
                className="w-full bg-black border border-zinc-800 rounded-2xl p-6 text-xl focus:outline-none focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="Ville d'arrivée"
                className="w-full bg-black border border-zinc-800 rounded-2xl p-6 text-xl focus:outline-none focus:border-orange-500"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Votre demande"
              className="w-full bg-black border border-zinc-800 rounded-2xl p-6 text-xl focus:outline-none focus:border-orange-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 py-6 rounded-2xl text-2xl font-bold transition-all duration-300 hover:scale-[1.02]"
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
