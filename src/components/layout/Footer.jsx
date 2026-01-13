export const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid gap-8 md:grid-cols-3 text-center md:text-left">

          {/* Bloc 1 : identité */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Notre agence
            </h3>
            <p className="text-green-200">
              Nous concevons des solutions web modernes et performantes
              pour les entreprises et entrepreneurs.
            </p>
          </div>

          {/* Bloc 2 : navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-green-200">
              <li><a href="#presentation" className="hover:underline">Accueil</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><a href="#about" className="hover:underline">À propos</a></li>
            </ul>
          </div>

          {/* Bloc 3 : contact */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Contact
            </h3>
            <ul className="space-y-2 text-green-200">
              <li>Email : contact@votresite.com</li>
              <li>WhatsApp : +225 XX XX XX XX</li>
            </ul>
          </div>

        </div>

        {/* Bas de page */}
        <div className="border-t border-green-800 mt-10 pt-6 text-center text-green-300">
          © {new Date().getFullYear()} — Tous droits réservés
        </div>

      </div>
    </footer>
  );
};
