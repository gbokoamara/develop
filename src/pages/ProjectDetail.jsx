// pages/ProjectDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = React.useState(null);

  React.useEffect(() => {
    // Récupérer le projet depuis localStorage ou une API
    const savedProject = localStorage.getItem("selectedProject");
    if (savedProject) {
      setProject(JSON.parse(savedProject));
    }
    // Sinon, tu pourrais faire une requête API avec le projectId
  }, [projectId]);

  if (!project) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p>Chargement du projet...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          ← Retour aux projets
        </button>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* En-tête avec image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold">{project.nom}</h1>
            </div>
          </div>

          <div className="p-8">
            {/* Technologies */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Technologies utilisées
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description détaillée */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Description complète
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {project.detailDescription}
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Informations du projet
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-700 mb-2">Budget</h3>
                  <p className="text-2xl font-bold text-blue-900">
                    {project.prix}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {project.status === "en cours"
                      ? "Prix estimé"
                      : "Prix final"}
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-700 mb-2">Statut</h3>
                  <p className="text-lg font-semibold text-green-900">
                    {project.status === "achevé"
                      ? "✓ Projet disponible"
                      : "⚡ En cours de développement"}
                  </p>
                </div>
              </div>
            </div>

            {/* Vidéo démo */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Vidéo de démonstration
              </h2>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                {project.videoDemo ? (
                  <video
                    controls
                    className="w-full h-full"
                    poster={project.image}
                  >
                    <source src={project.videoDemo} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-500">
                      Vidéo de démonstration non disponible
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Bouton de confirmation */}
            <div className="flex gap-4">
              <button
                onClick={() => navigate(-1)}
                className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Voir d'autres projets
              </button>
              <button
                onClick={() => {
                  // Ici, tu peux ajouter la logique pour confirmer le choix
                  // et rediriger vers le formulaire de contact ou téléchargement
                  navigate("/telechargement");
                }}
                className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Confirmer ce choix et continuer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
