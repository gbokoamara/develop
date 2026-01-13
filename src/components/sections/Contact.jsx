
export const Contact = () => {
  return (
    <section
      id="contact"
      className=" text-white py-20"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Parlons de votre projet
        </h2>

        {/* Texte */}
        <p className="text-yellow-100 text-lg mb-10">
          Vous avez une idée ou un besoin précis ?
          Nous vous accompagnons dans la conception
          et la réalisation de votre solution digitale.
        </p>

        {/* Boutons de contact */}
        <div className="flex flex-col md:flex-row justify-center gap-4">

          <a
            href="https://wa.me/225XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-600 hover:bg-yellow-700 transition px-8 py-4 rounded-lg font-semibold"
          >
            Nous contacter sur WhatsApp
          </a>

          <a
            href="mailto:contact@votresite.com"
            className="border border-yellow-400 hover:bg-yellow-400 hover:text-yellow-950 transition px-8 py-4 rounded-lg font-semibold"
          >
            Nous envoyer un email
          </a>

        </div>

      </div>
    </section>
  );
};
