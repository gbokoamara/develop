export const About = () => {
  return (
    <section
      id="about"
      className=" text-white py-20" // bg-slate-950
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          À propos de nous
        </h2>

        {/* Texte principal */}
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          Nous sommes une équipe spécialisée dans le développement
          de solutions web modernes. Nous accompagnons les entreprises,
          startups et entrepreneurs dans la création de sites web,
          plateformes e-commerce et applications sur mesure.
        </p>

        {/* Valeurs / points forts */}
        <div className="grid gap-6 md:grid-cols-3 mt-10">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Qualité</h3>
            <p className="text-slate-400">
              Nous livrons des solutions fiables, performantes
              et maintenables.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Accompagnement</h3>
            <p className="text-slate-400">
              Nous restons proches de nos clients à chaque étape
              du projet.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Évolutivité</h3>
            <p className="text-slate-400">
              Nous concevons des solutions pensées pour évoluer
              avec votre activité.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
