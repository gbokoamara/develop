
export const Footer = () => {
  return (
    <footer className="relative bg-linear-to-t from-gray-900 via-gray-900 to-black text-white pt-16 pb-10 overflow-hidden">
      {/* Effets décoratifs */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full -translate-x-32 translate-y-32 blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full translate-x-32 -translate-y-32 blur-3xl"></div>

      <div className="relative  mx-auto px-6">
        {/* Grille principale */}
        <div className="grid gap-10 md:grid-cols-12 mb-12">
          {/* Logo et identité */}
          <a href="/" className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-linear-to-br from-blue-500 to-purple-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold">D</span>
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Develop
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">
              Nous concevons et développons des solutions web modernes,
              performantes et sur mesure pour donner vie à vos projets digitaux.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-4">
              {[
                { icon: "💼", label: "LinkedIn", href: "#" },
                { icon: "🐦", label: "Twitter", href: "#" },
                { icon: "📷", label: "Instagram", href: "#" },
                { icon: "👨‍💻", label: "GitHub", href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group  bg-gray-800 hover:bg-linear-to-r hover:from-blue-600 hover:to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </a>

          {/* Navigation */}
          <div className="md:col-span-4 ">
            <h3 className="text-xl font-bold mb-8 relative inline-block ">
              Navigation
              <span className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full -translate-y-1"></span>
            </h3>

            <ul className="space-y-4 md:grid md:grid-cols-3 ">
              {[
                { label: "Accueil", href: "#presentation", icon: "🏠" },
                { label: "Services", href: "#services", icon: "⚡" },
                { label: "Réalisations", href: "#portfolio", icon: "🎯" },
                { label: "À propos", href: "#about", icon: "👤" },
                { label: "Contact", href: "#contact", icon: "📞" },
              ].map((item, index) => (
                <li key={index} >
                  <a
                    href={item.href}
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.icon}
                    </span>
                    <span className="border-b border-transparent group-hover:border-blue-400 transition-border duration-300">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact et infos */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold mb-8 relative inline-block">
              Contact rapide
              <span className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full -translate-y-1"></span>
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:contact@Develop.com"
                className="group flex items-center gap-4 p-4 bg-gray-800/50 hover:bg-gray-800 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-linear-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-lg">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email professionnel</p>
                  <p className="font-medium group-hover:text-blue-300 transition-colors">
                    contact@Develop.com
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/225XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-gray-800/50 hover:bg-gray-800 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-linear-to-br from-green-500/20 to-teal-500/20 p-3 rounded-lg">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp direct</p>
                  <p className="font-medium group-hover:text-green-300 transition-colors">
                    +225 XX XX XX XX
                  </p>
                </div>
              </a>

              {/* Localisation */}
              <div className="flex items-center gap-4 p-4">
                <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 p-3 rounded-lg">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Basé à</p>
                  <p className="font-medium">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Bas de page */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-center md:text-left">
            <p className="mb-2">
              © {new Date().getFullYear()}{" "}
              <span className="text-white font-medium">Develop</span> —
              Freelance web
            </p>
            <p className="text-sm text-gray-500">
              Conception et développement de sites web sur mesure
            </p>
          </div>

          {/* Liens légaux */}
          <div className="flex gap-6">
            {[
              "Mentions légales",
              "Politique de confidentialité",
              "Conditions d'utilisation",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-blue-300 text-sm transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Badge freelance */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/20 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">
              Disponible pour de nouveaux projets
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
