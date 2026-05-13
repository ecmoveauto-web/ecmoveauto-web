"use client";

import { useState } from "react";

export default function ECMoveAutoPremium() {

  const [form, setForm] = useState({
    depart: "",
    arrivee: "",
    vehicule: "",
    telephone: "",
    email: "",
    infos: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const envoyerDemande = () => {

    const sujet = "Demande de convoyage EC Move Auto";

    const message =
`Nouvelle demande de convoyage

Ville de départ : ${form.depart}

Ville d'arrivée : ${form.arrivee}

Type de véhicule : ${form.vehicule}

Téléphone : ${form.telephone}

Email : ${form.email}

Informations complémentaires :
${form.infos}`;

    window.location.href =
      `mailto:contact@ecmoveauto.fr?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden scroll-smooth">

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.92), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop')",
        }}
      >

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXTE */}
          <div>

            <div className="mb-6 inline-block border border-orange-500/30 bg-orange-500/10 px-4 py-2 rounded-full text-orange-400 text-sm tracking-widest uppercase">
              Convoyage automobile premium
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              <span className="text-white">EC</span>{" "}
              <span className="text-orange-500">MoveAUTO</span>
            </h1>

            <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-200 mb-8">
              On déplace vos véhicules,
              <br />
              pas vos{" "}
              <span className="text-orange-500 font-bold">
                problèmes.
              </span>
            </p>

            {/* BOUTONS */}
            <div className="flex flex-wrap gap-4">

              {/* DEVIS */}
              <a
                href="#devis"
                className="bg-orange-500 hover:bg-orange-600 transition-all px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl shadow-orange-500/20 inline-block"
              >
                Demander un convoyage
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/33632155235?text=Bonjour%20EC%20Move%20Auto,%20je%20souhaite%20obtenir%20un%20devis%20de%20convoyage."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-orange-500 hover:text-orange-400 transition-all px-8 py-4 rounded-2xl text-lg font-semibold backdrop-blur-md inline-block"
              >
                WhatsApp Direct
              </a>

            </div>

            {/* INFOS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

              {[
                ["🔒", "Sécurité", "Garantie"],
                ["⚡", "Rapidité", "& Fiabilité"],
                ["🇫🇷", "France", "Entière"],
                ["🤝", "Service", "Professionnel"],
              ].map((item, index) => (

                <div
                  key={index}
                  className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl p-5 text-center hover:border-orange-500/40 transition-all"
                >

                  <div className="text-3xl mb-3">
                    {item[0]}
                  </div>

                  <div className="text-white font-semibold">
                    {item[1]}
                  </div>

                  <div className="text-orange-400 text-sm">
                    {item[2]}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative hidden lg:flex justify-center">

            <div className="absolute inset-0 blur-3xl bg-orange-500/10 rounded-full" />

            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop"
              alt="Voiture premium"
              className="relative z-10 rounded-[40px] shadow-2xl border border-orange-500/20"
            />

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-28 px-6 bg-gradient-to-b from-black to-zinc-950"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-orange-500 uppercase tracking-[0.3em] mb-4">
              Nos prestations
            </p>

            <h2 className="text-5xl font-black mb-6">
              Services de convoyage haut de gamme
            </h2>

            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Des solutions professionnelles pour particuliers,
              concessions et entreprises.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Convoyage Premium",
                text: "Transport sécurisé de véhicules premium et sportifs.",
              },
              {
                title: "Livraison Concession",
                text: "Livraison VN / VO partout en France.",
              },
              {
                title: "Gestion de Flotte",
                text: "Solutions entreprises et transferts de véhicules.",
              },
              {
                title: "Suivi GPS",
                text: "Localisation et suivi des missions en temps réel.",
              },
              {
                title: "Rapport Digital",
                text: "Photos et état du véhicule avant/après mission.",
              },
              {
                title: "Support Prioritaire",
                text: "Accompagnement professionnel et réactif.",
              },
            ].map((service, index) => (

              <div
                key={index}
                className="bg-zinc-900 border border-white/5 hover:border-orange-500/40 transition-all rounded-[30px] p-8 group"
              >

                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  🚘
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.text}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section
        id="devis"
        className="py-28 px-6 relative overflow-hidden"
      >

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,115,0,0.15),transparent_40%)]" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* TEXTE */}
          <div>

            <p className="text-orange-500 uppercase tracking-[0.3em] mb-4">
              Demande rapide
            </p>

            <h2 className="text-5xl font-black mb-8 leading-tight">
              Obtenez votre devis de convoyage
            </h2>

            <p className="text-gray-400 text-xl leading-relaxed">
              Réservez une mission en quelques minutes avec notre formulaire dynamique.
            </p>

          </div>

          {/* FORMULAIRE */}
          <div className="bg-zinc-950 border border-orange-500/20 rounded-[40px] p-8 shadow-2xl shadow-orange-500/10">

            <div className="grid gap-5">

              <input
                name="depart"
                onChange={handleChange}
                placeholder="Ville de départ"
                className="bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <input
                name="arrivee"
                onChange={handleChange}
                placeholder="Ville d'arrivée"
                className="bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <input
                name="vehicule"
                onChange={handleChange}
                placeholder="Type de véhicule"
                className="bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  name="telephone"
                  onChange={handleChange}
                  placeholder="Téléphone"
                  className="bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
                />

                <input
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                  className="bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
                />

              </div>

              <textarea
                rows={4}
                name="infos"
                onChange={handleChange}
                placeholder="Informations complémentaires"
                className="bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-orange-500"
              />

              {/* BOUTON ENVOI */}
              <button
                onClick={envoyerDemande}
                className="bg-orange-500 hover:bg-orange-600 transition-all py-5 rounded-2xl text-lg font-bold mt-3 shadow-xl shadow-orange-500/20"
              >
                Envoyer ma demande
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-6 bg-black">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h3 className="text-3xl font-black">
              <span className="text-white">EC</span>{" "}
              <span className="text-orange-500">MoveAUTO</span>
            </h3>

            <p className="text-gray-500 mt-2">
              Votre partenaire premium de convoyage automobile.
            </p>

          </div>

          <div className="text-gray-400 text-center md:text-right">

            <p>59 rue de Ponthieu, Bureau 326, 75008 Paris</p>

            <p>contact@ecmoveauto.fr</p>

            <p>06 32 15 52 35</p>

          </div>

        </div>
      </footer>

      {/* BOUTON WHATSAPP FLOTTANT */}
      <a
        href="https://wa.me/33632155235?text=Bonjour%20EC%20Move%20Auto"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl"
      >
        💬
      </a>

    </div>
  );
}
