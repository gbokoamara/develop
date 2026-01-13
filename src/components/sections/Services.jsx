
// pages/Services.jsx
import React from "react";

export const Services = () => {
  const services = [
    {
      id: "vitrine",
      title: "Site vitrine",
      description: "Nous concevons des sites modernes et responsives pour présenter efficacement votre activité.",
      icon: "🖥️",
      gradient: "from-blue-500 to-purple-600",
      choices: [
        { label: "Choisir un site déjà conçu", link: "/selection#vitrine-section", icon: "✅" },
        { label: "Proposer une maquette", link: "/marquette#vitrine", icon: "🎨" },
        { label: "Donner votre idée", link: "/idée#vitrine", icon: "💡" },
      ],
    },
    {
      id: "commerce",
      title: "Site e-commerce",
      description: "Nous développons des plateformes de vente en ligne avec paiement sécurisé et gestion des commandes.",
      icon: "🛒",
      gradient: "from-green-500 to-teal-600",
      choices: [
        { label: "Choisir un site déjà conçu", link: "/selection#commerce-section", icon: "✅" },
        { label: "Proposer une maquette", link: "/marquette#commerce", icon: "🎨" },
        { label: "Donner votre idée", link: "/idée#commerce", icon: "💡" },
      ],
    },
    {
      id: "application",
      title: "Application web",
      description: "Nous créons des applications sur mesure pour automatiser et optimiser vos processus métiers.",
      icon: "⚡",
      gradient: "from-orange-500 to-red-600",
      choices: [
        { label: "Choisir un site déjà conçu", link: "/selection#application-section", icon: "✅" },
        { label: "Proposer une maquette", link: "/marquette#application", icon: "🎨" },
        { label: "Donner votre idée", link: "/idée#application", icon: "💡" },
      ],
    },
  ];

  return (
    <section id="services" className="py-20   text-white" // bg-linear-to-br from-purple-950 via-purple-900 to-indigo-950
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête avec décoration */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 pt-8">
            Nos <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">services</span>
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Choisissez la solution qui correspond à vos besoins et démarrez votre projet
          </p>
        </div>

        {/* Grille des services améliorée */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden bg-linear-to-br from-purple-900/80 to-purple-800/80 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/30"
            >
              {/* Élément décoratif */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${service.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16`}></div>
              
              {/* Icone */}
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${service.gradient} shadow-lg mb-6`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                
                {/* Titre et description */}
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-purple-100/90 mb-8 leading-relaxed">{service.description}</p>

                {/* Boutons de choix améliorés */}
                <div className="space-y-3">
                  {service.choices.map((choice, index) => (
                    <a
                      key={index}
                      href={choice.link}
                      className="group/btn flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl px-5 py-4 transition-all duration-300 hover:translate-x-2 hover:shadow-lg hover:border-white/20"
                    >
                      <span className="text-xl">{choice.icon}</span>
                      <span className="font-medium grow">{choice.label}</span>
                      <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">→</span>
                    </a>
                  ))}
                </div>

                {/* Ligne décorative en bas */}
                <div className={`mt-8 h-1 w-16 bg-linear-to-r ${service.gradient} rounded-full opacity-80`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA global */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-linear-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">Vous hésitez sur le choix ?</h3>
              <p className="text-purple-200">Contactez-nous pour un conseil personnalisé</p>
            </div>
            <a
              href="#contact"
              className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/30 whitespace-nowrap"
            >
              Discuter de mon projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};