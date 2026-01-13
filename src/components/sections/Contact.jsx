

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative md:py-20 overflow-hidden"
    >
      {/* Arrière-plan avec gradient */}
      {/* <div className="absolute inset-0 bg-linear-to-br from-indigo-900 via-purple-900 to-blue-950"></div> */}
      
      {/* Effets décoratifs */}
      {/* <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-32 translate-y-32 blur-3xl"></div> */}
      
      <div className="relative max-w-5xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center md:mb-16">
          <span className="inline-block px-4 py-1 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-300 font-medium mb-4 border border-blue-500/30">
            Contact rapide
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discutons de votre <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">projet web</span>
          </h2>
          
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            Envoyez-nous un message pour une consultation gratuite et recevez un devis personnalisé sous 24h.
          </p>
        </div>

        {/* Cartes de contact */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Carte WhatsApp */}
          <div className="group relative overflow-hidden bg-linear-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-500">
            <div className="absolute inset-0 bg-linear-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-linear-to-br from-green-500 to-teal-600 p-4 rounded-2xl shadow-lg">
                  <span className="text-3xl">💬</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">WhatsApp Direct</h3>
                  <p className="text-blue-200/70">Réponse en quelques minutes</p>
                </div>
              </div>
              
              <p className="text-blue-100/90 mb-8">
                Parlez-nous directement de votre projet. Idéal pour les questions rapides et les premières estimations.
              </p>
              
              <a
                href="https://wa.me/225XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-3 bg-linear-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-900/30 w-full justify-center"
              >
                <span className="text-xl">📱</span>
                <span>Message WhatsApp</span>
                <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">→</span>
              </a>
            </div>
          </div>

          {/* Carte Email */}
          <div className="group relative overflow-hidden bg-linear-to-br from-purple-900/40 to-pink-800/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-500">
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-linear-to-br from-purple-500 to-pink-600 p-4 rounded-2xl shadow-lg">
                  <span className="text-3xl">✉️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Email Professionnel</h3>
                  <p className="text-purple-200/70">Devis détaillé sous 24h</p>
                </div>
              </div>
              
              <p className="text-purple-100/90 mb-8">
                Envoyez-nous les détails de votre projet pour recevoir une proposition complète et chiffrée.
              </p>
              
              <a
                href="mailto:contact@votresite.com"
                className="group/btn inline-flex items-center gap-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-900/30 w-full justify-center"
              >
                <span className="text-xl">📧</span>
                <span>Envoyer un email</span>
                <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Informations complémentaires */}
        <div className="bg-linear-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold text-lg mb-2">Réponse rapide</h4>
              <p className="text-blue-100/70 text-sm">Moins de 2h en moyenne</p>
            </div>
            
            <div className="p-4">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-bold text-lg mb-2">Premier échange gratuit</h4>
              <p className="text-blue-100/70 text-sm">Analyse approfondie de votre projet</p>
            </div>
            
            <div className="p-4">
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-bold text-lg mb-2">Confidentialité garantie</h4>
              <p className="text-blue-100/70 text-sm">NDA disponible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};