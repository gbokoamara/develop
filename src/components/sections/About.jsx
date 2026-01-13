
export const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden"
    >
      {/* Arrière-plan avec effets */}
      {/* <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-gray-950"></div> */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full translate-x-48 translate-y-48 blur-3xl"></div> */}
      
      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-300 font-medium mb-6 border border-blue-500/30">
            👥 À propos de nous
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Notre agence <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">web</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Nous concevons et développons des solutions web modernes et performantes pour donner vie à vos projets digitaux, 
            avec un accent particulier sur l'expérience utilisateur et la qualité technique.
          </p>
        </div>

        {/* Contenu principal */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          
          {/* Texte de présentation */}
          <div className="space-y-6">
            <div className="group relative">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">🚀</span>
                  Notre philosophie
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Nous croyons en un développement web qui allie performance, élégance et simplicité d'utilisation. 
                  Chaque projet est unique et mérite une attention particulière, depuis la conception jusqu'au déploiement.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-linear-to-r from-slate-900/50 to-slate-800/30 rounded-xl border border-slate-700/30">
              <div className="text-4xl">🎯</div>
              <div>
                <h4 className="font-bold text-lg mb-1">Notre objectif</h4>
                <p className="text-slate-400">
                  Vous fournir une solution qui dépasse vos attentes tout en respectant vos délais et votre budget.
                </p>
              </div>
            </div>
          </div>

          {/* Stack technique */}
          <div className="bg-linear-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-3xl">⚙️</span>
              Nos technologies
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { tech: 'React / Next.js', color: 'from-blue-500 to-cyan-500', icon: '⚛️' },
                { tech: 'Tailwind CSS', color: 'from-teal-500 to-emerald-500', icon: '🎨' },
                { tech: 'Node.js', color: 'from-green-500 to-lime-500', icon: '🟢' },
                { tech: 'TypeScript', color: 'from-blue-600 to-indigo-500', icon: '📘' },
                { tech: 'MongoDB', color: 'from-green-600 to-emerald-600', icon: '🍃' },
                // { tech: 'PostgreSQL', color: 'from-blue-700 to-blue-900', icon: '🐘' },
                { tech: 'Git & CI/CD', color: 'from-orange-500 to-red-500', icon: '🔄' },
                // { tech: 'Figma', color: 'from-purple-500 to-pink-500', icon: '✏️' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-3 p-4 bg-slate-800/30 hover:bg-slate-800/50 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <div className={`bg-linear-to-br ${item.color} p-2 rounded-lg`}>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <span className="font-medium text-slate-200">{item.tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Valeurs / points forts */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Qualité & Fiabilité",
              description: "Code propre, tests rigoureux et solutions performantes garantissant la stabilité de vos applications.",
              icon: "⭐",
              color: "from-blue-500/20 to-blue-600/20",
              border: "border-blue-500/30"
            },
            {
              title: "Accompagnement personnalisé",
              description: "Nous restons disponibles à chaque étape, du cahier des charges au support après déploiement.",
              icon: "🤝",
              color: "from-purple-500/20 to-purple-600/20",
              border: "border-purple-500/30"
            },
            {
              title: "Solutions évolutives",
              description: "Architectures modulaires conçues pour s'adapter à la croissance de votre activité.",
              icon: "📈",
              color: "from-emerald-500/20 to-teal-600/20",
              border: "border-emerald-500/30"
            }
          ].map((value, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-linear-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-linear-to-br ${value.color.replace('/20', '/30')} mb-6 border ${value.border}`}>
                  <span className="text-3xl">{value.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {value.description}
                </p>
                
                <div className={`mt-6 h-1 w-12 bg-linear-to-r ${value.color.replace('20', '100').replace('bg-linear-to-br ', '')} rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/30"
          >
            <span className="text-xl">💬</span>
            Discuter de votre projet
            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
          </a>
          
          <p className="mt-4 text-slate-400">
            Premier échange gratuit • Devis sous 48h • Travail à distance
          </p>
        </div>
      </div>
    </section>
  );
};