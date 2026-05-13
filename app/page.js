export default function ECMoveAuto() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center px-6 max-w-5xl">

          <div className="mb-6 inline-block border border-orange-500 px-4 py-2 rounded-full text-orange-400 uppercase tracking-widest text-sm">
            Convoyage Automobile Premium
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            EC <span className="text-orange-500">MOVE AUTO</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Transport et livraison de véhicules partout en France.
            <br />
            Service rapide, sécurisé et professionnel.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <button className="bg-orange-500 hover:bg-orange-600 transition-all px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl">
              Obtenir un devis
            </button>

            <button className="border border-white/30 hover:border-orange-500 hover:text-orange-400 transition-all px-8 py-4 rounded-2xl text-lg">
              WhatsApp Direct
            </button>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-zinc-950">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-orange-500 uppercase tracking-[0.3em] mb-4">
              Nos Services
            </p>

            <h2 className="text-5xl font-black mb-6">
              Des solutions adaptées à tous vos besoins
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Convoyage toutes distances",
              "Livraison concessionnaires",
              "Transfert inter-sites",
              "Service express",
              "Véhicules premium",
              "Utilitaires",
            ].map((service, index) => (

              <div
                key={index}
                className="bg-black border border-white/10 hover:border-orange-500 transition-all rounded-3xl p-8"
              >

                <div className="text-4xl mb-6">🚘</div>

                <h3 className="text-2xl font-bold mb-4">
                  {service}
                </h3>

                <p className="text-gray-400">
                  Service professionnel sécurisé et rapide partout en France.
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-orange-500 uppercase tracking-[0.3em] mb-4">
            Fonctionnement
          </p>

          <h2 className="text-5xl font-black mb-16">
            Comment ça fonctionne ?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Demande de devis",
              "Validation rapide",
              "Prise en charge",
              "Livraison finale",
            ].map((step, index) => (

              <div
                key={index}
                className="border border-white/10 rounded-3xl p-8 bg-zinc-950"
              >

                <div className="w-16 h-16 mx-auto rounded-full bg-orange-500 text-black flex items-center justify-center text-2xl font-black mb-6">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold">
                  {step}
                </h3>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section className="py-24 px-6 bg-zinc-950">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-orange-500 uppercase tracking-[0.3em] mb-4">
              Contact
            </p>

            <h2 className="text-5xl font-black">
              Demande de devis
            </h2>

          </div>

          <div className="grid gap-5">

            <input
              placeholder="Nom / Société"
              className="bg-black border border-white/10 rounded-2xl px-5 py-4"
            />

            <input
              placeholder="Téléphone"
              className="bg-black border border-white/10 rounded-2xl px-5 py-4"
            />

            <input
              placeholder="Email"
              className="bg-black border border-white/10 rounded-2xl px-5 py-4"
            />

            <div className="grid md:grid-cols-2 gap-5">

              <input
                placeholder="Ville de départ"
                className="bg-black border border-white/10 rounded-2xl px-5 py-4"
              />

              <input
                placeholder="Ville d'arrivée"
                className="bg-black border border-white/10 rounded-2xl px-5 py-4"
              />

            </div>

            <textarea
              rows={5}
              placeholder="Votre demande"
              className="bg-black border border-white/10 rounded-2xl px-5 py-4"
            />

            <button className="bg-orange-500 hover:bg-orange-600 transition-all py-5 rounded-2xl text-lg font-bold">
              Recevoir mon devis
            </button>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6 bg-black">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h3 className="text-3xl font-black">
              EC <span className="text-orange-500">MOVE AUTO</span>
            </h3>

            <p className="text-gray-500 mt-2">
              Convoyage automobile premium partout en France.
            </p>

          </div>

          <div className="text-center md:text-right text-gray-400">

            <p>06 32 15 52 35</p>

            <p>ecmoveauto@gmail.com</p>

            <p>59 rue de Ponthieu, 75008 Paris</p>

          </div>
        </div>
      </footer>
    </main>
  );
}
