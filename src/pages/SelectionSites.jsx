

// pages/SelectionSites.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const sites = [
  {
    id: "vitrine",
    title: "Sites Vitrine",
    description: "Découvrez nos modèles prêts à l'emploi pour présenter votre activité.",
    link: "/selection#vitrine-section"
  },
  {
    id: "commerce",
    title: "Sites E-commerce",
    description: "Découvrez nos boutiques en ligne prêtes à vendre vos produits.",
    link: "/selection#commerce-section"
  },
  {
    id: "application",
    title: "Applications Web",
    description: "Découvrez nos applications web sur mesure déjà réalisées.",
    link: "/selection#application-section"
  },
];

// const exemplesProjets = {
//   vitrine: [
//     {
//       id: "restaurant-gourmet",
//       nom: "Restaurant Le Gourmet",
//       description: "Site vitrine élégant pour un restaurant gastronomique avec galerie photos, menu interactif et réservation en ligne.",
//       technologies: ["React", "Tailwind CSS", "Node.js"],
//       image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//       imageAlt: "Restaurant élégant avec tables et chaises",
//       detailDescription: "Un site web complet pour restaurant gastronomique avec système de réservation en temps réel, galerie photos haute définition, menu saisonnier interactif, et intégration avec les avis Google.",
//       videoDemo: "https://example.com/videos/restaurant-demo.mp4",
//       status: "achevé",
//       prix: "2 500 €" // Nouveau champ
//     },
//     {
//       id: "studio-yoga-zen",
//       nom: "Studio de Yoga Zen",
//       description: "Site apaisant pour un studio de yoga avec planning des cours, inscriptions en ligne et blog bien-être.",
//       technologies: ["Next.js", "TypeScript", "MongoDB"],
//       image: "https://images.unsplash.com/photo-1545389336-cf09028c9b7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//       imageAlt: "Salle de yoga avec tapis et décoration zen",
//       detailDescription: "Plateforme complète pour studio de yoga incluant planning dynamique, système d'inscription aux cours, gestion des abonnements, blog intégré et espace membre.",
//       videoDemo: "https://example.com/videos/yoga-demo.mp4",
//       status: "achevé",
//       prix: "1 800 €"
//     },
//     {
//       id: "agence-immobiliere-luxe",
//       nom: "Agence Immobilière Luxe",
//       description: "Plateforme haut de gamme pour présenter des biens immobiliers premium avec visites virtuelles 360°.",
//       technologies: ["Vue.js", "Three.js", "Firebase"],
//       image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//       imageAlt: "Villa de luxe avec piscine",
//       detailDescription: "Site premium pour agence immobilière avec visites virtuelles 360°, filtres avancés de recherche, calculatrice de prêt intégrée et prise de rendez-vous en ligne.",
//       videoDemo: "https://example.com/videos/immobilier-demo.mp4",
//       status: "en cours",
//       prix: "3 500 €"
//     }
//   ],
//   commerce: [
//     {
//       id: "boutique-mode-ethique",
//       nom: "Boutique Mode Éthique",
//       description: "E-commerce de vêtements durables avec filtres avancés, recommandations personnalisées et livraison carboneutre.",
//       technologies: ["Shopify", "React", "Stripe"],
//       image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//       imageAlt: "Vêtements suspendus dans une boutique",
//       detailDescription: "Boutique en ligne éco-responsable avec système de recommandations IA, traçabilité des produits, options de livraison verte et programme de fidélité.",
//       videoDemo: "https://example.com/videos/mode-demo.mp4",
//       status: "achevé",
//       prix: "4 200 €"
//     },
//     {
//       id: "artisanat-local",
//       nom: "Artisanat Local",
//       description: "Marketplace pour artisans locaux avec gestion multi-vendeurs, système de reviews et paiements sécurisés.",
//       technologies: ["Laravel", "Vue.js", "PayPal"],
//       image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//       imageAlt: "Objets artisanaux en céramique",
//       detailDescription: "Marketplace dédiée aux artisans locaux avec système de commissions, gestion de stocks multi-vendeurs, messagerie intégrée et outils analytiques.",
//       videoDemo: "https://example.com/videos/artisanat-demo.mp4",
//       status: "en cours",
//       prix: "5 800 €"
//     },
//     {
//       id: "boutique-tech",
//       nom: "Boutique de Tech",
//       description: "Site e-commerce high-tech avec comparaison de produits, configurateur PC et support technique intégré.",
//       technologies: ["Magento", "React", "WebSocket"],
//       image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//       imageAlt: "Ordinateurs et équipements high-tech",
//       detailDescription: "Boutique spécialisée high-tech avec configurateur PC personnalisé, comparaison détaillée des produits, chat support en direct et système de compatibilité.",
//       videoDemo: "https://example.com/videos/tech-demo.mp4",
//       status: "achevé",
//       prix: "3 900 €"
//     }
//   ],
//   application: [
//     {
//       id: "gestion-projets-pro",
//       nom: "Gestion de Projets Pro",
//       description: "Application SaaS de gestion de projets avec tableaux Kanban, suivi du temps et collaboration en temps réel.",
//       technologies: ["React", "Node.js", "Socket.io"],
//       image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//       imageAlt: "Tableau de gestion de projets avec post-its",
//       detailDescription: "Application SaaS complète de gestion de projets avec tableaux Kanban, gestion des ressources, suivi du temps, rapports analytiques et collaboration en temps réel.",
//       videoDemo: "https://example.com/videos/projet-demo.mp4",
//       status: "achevé",
//       prix: "8 500 €"
//     },
//     {
//       id: "plateforme-educative",
//       nom: "Plateforme Éducative",
//       description: "Application d'apprentissage en ligne avec cours vidéo, quiz interactifs et suivi de progression.",
//       technologies: ["Angular", "Django", "PostgreSQL"],
//       image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//       imageAlt: "Personne suivant un cours en ligne sur tablette",
//       detailDescription: "Plateforme éducative complète avec création de cours, système de notation, certifications, forums de discussion et analyse des performances des élèves.",
//       videoDemo: "https://example.com/videos/education-demo.mp4",
//       status: "en cours",
//       prix: "7 200 €"
//     },
//     {
//       id: "reseau-social-pro",
//       nom: "Réseau Social Professionnel",
//       description: "Plateforme de networking pour professionnels avec messagerie, événements et partage de ressources.",
//       technologies: ["React Native", "GraphQL", "AWS"],
//       image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//       imageAlt: "Professionnels en réunion de networking",
//       detailDescription: "Réseau social professionnel avec profils détaillés, messagerie sécurisée, organisation d'événements, partage de documents et recommandations intelligentes.",
//       videoDemo: "https://example.com/videos/reseau-demo.mp4",
//       status: "achevé",
//       prix: "9 500 €"
//     }
//   ]
// };
const exemplesProjets = {
  vitrine: [
    {
      id: "restaurant-gourmet",
      nom: "Restaurant Le Gourmet",
      description: "Site vitrine élégant pour un restaurant gastronomique avec galerie photos, menu interactif et réservation en ligne.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Restaurant élégant avec tables et chaises",
      detailDescription: "Un site web complet pour restaurant gastronomique avec système de réservation en temps réel, galerie photos haute définition, menu saisonnier interactif, et intégration avec les avis Google.",
      videoDemo: "https://example.com/videos/restaurant-demo.mp4",
      status: "achevé",
      prix: "300 000 FCFA"
    },
    {
      id: "studio-yoga-zen",
      nom: "Studio de Yoga Zen",
      description: "Site apaisant pour un studio de yoga avec planning des cours, inscriptions en ligne et blog bien-être.",
      technologies: ["Next.js", "TypeScript", "MongoDB"],
      image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Salle de yoga avec tapis et décoration zen",
      detailDescription: "Plateforme complète pour studio de yoga incluant planning dynamique, système d'inscription aux cours, gestion des abonnements, blog intégré et espace membre.",
      videoDemo: "https://example.com/videos/yoga-demo.mp4",
      status: "en cours",
      prix: "250 000 FCFA"
    },
    {
      id: "agence-immobiliere-luxe",
      nom: "Agence Immobilière Luxe",
      description: "Plateforme haut de gamme pour présenter des biens immobiliers premium avec visites virtuelles 360°.",
      technologies: ["Vue.js", "Three.js", "Firebase"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Villa de luxe avec piscine",
      detailDescription: "Site premium pour agence immobilière avec visites virtuelles 360°, filtres avancés de recherche, calculatrice de prêt intégrée et prise de rendez-vous en ligne.",
      videoDemo: "https://example.com/videos/immobilier-demo.mp4",
      status: "achevé",
      prix: "350 000 FCFA"
    }
  ],

  commerce: [
    {
      id: "boutique-mode-ethique",
      nom: "Boutique Mode Éthique",
      description: "E-commerce de vêtements durables avec filtres avancés, recommandations personnalisées et livraison carboneutre.",
      technologies: ["Shopify", "React", "Stripe"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Vêtements suspendus dans une boutique",
      detailDescription: "Boutique en ligne éco-responsable avec système de recommandations IA, traçabilité des produits, options de livraison verte et programme de fidélité.",
      videoDemo: "https://example.com/videos/mode-demo.mp4",
      status: "achevé",
      prix: "500 000 FCFA"
    },
    {
      id: "artisanat-local",
      nom: "Artisanat Local",
      description: "Marketplace pour artisans locaux avec gestion multi-vendeurs, système de reviews et paiements sécurisés.",
      technologies: ["Laravel", "Vue.js", "PayPal"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Objets artisanaux en céramique",
      detailDescription: "Marketplace dédiée aux artisans locaux avec système de commissions, gestion de stocks multi-vendeurs, messagerie intégrée et outils analytiques.",
      videoDemo: "https://example.com/videos/artisanat-demo.mp4",
      status: "en cours",
      prix: "650 000 FCFA"
    },
    {
      id: "boutique-tech",
      nom: "Boutique de Tech",
      description: "Site e-commerce high-tech avec comparaison de produits, configurateur PC et support technique intégré.",
      technologies: ["Magento", "React", "WebSocket"],
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Ordinateurs et équipements high-tech",
      detailDescription: "Boutique spécialisée high-tech avec configurateur PC personnalisé, comparaison détaillée des produits, chat support en direct et système de compatibilité.",
      videoDemo: "https://example.com/videos/tech-demo.mp4",
      status: "achevé",
      prix: "550 000 FCFA"
    }
  ],

  application: [
    {
      id: "gestion-projets-pro",
      nom: "Gestion de Projets Pro",
      description: "Application SaaS de gestion de projets avec tableaux Kanban, suivi du temps et collaboration en temps réel.",
      technologies: ["React", "Node.js", "Socket.io"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Tableau de gestion de projets avec post-its",
      detailDescription: "Application SaaS complète de gestion de projets avec tableaux Kanban, gestion des ressources, suivi du temps, rapports analytiques et collaboration en temps réel.",
      videoDemo: "https://example.com/videos/projet-demo.mp4",
      status: "achevé",
      prix: "900 000 FCFA"
    },
    {
      id: "plateforme-educative",
      nom: "Plateforme Éducative",
      description: "Application d'apprentissage en ligne avec cours vidéo, quiz interactifs et suivi de progression.",
      technologies: ["Angular", "Django", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Personne suivant un cours en ligne sur tablette",
      detailDescription: "Plateforme éducative complète avec création de cours, système de notation, certifications, forums de discussion et analyse des performances des élèves.",
      videoDemo: "https://example.com/videos/education-demo.mp4",
      status: "en cours",
      prix: "1 000 000 FCFA"
    },
    {
      id: "reseau-social-pro",
      nom: "Réseau Social Professionnel",
      description: "Plateforme de networking pour professionnels avec messagerie, événements et partage de ressources.",
      technologies: ["React Native", "GraphQL", "AWS"],
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      imageAlt: "Professionnels en réunion de networking",
      detailDescription: "Réseau social professionnel avec profils détaillés, messagerie sécurisée, organisation d'événements, partage de documents et recommandations intelligentes.",
      videoDemo: "https://example.com/videos/reseau-demo.mp4",
      status: "achevé",
      prix: "1 200 000 FCFA"
    }
  ]
};


export const SelectionSites = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChooseProject = (project) => {
    if (project.status === "achevé") {
      localStorage.setItem('selectedProject', JSON.stringify(project));
      navigate(`/project-detail/${project.id}`);
    }
  };

  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }
  }, []);

  return (
    <section className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos sites déjà conçus
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {sites.map((site) => (
            <button
              key={site.id}
              onClick={() => scrollToSection(`${site.id}-section`)}
              className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-2xl transition cursor-pointer w-full"
            >
              <h2 className="text-xl font-semibold mb-2">{site.title}</h2>
              <p className="text-gray-700">{site.description}</p>
            </button>
          ))}
        </div>

        {/* Section Sites Vitrine */}
        <div id="vitrine-section" className="mt-20 pt-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Exemples de Sites Vitrine</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {exemplesProjets.vitrine.map((projet) => (
              <div 
                key={projet.id} 
                className={`shadow-lg rounded-xl overflow-hidden flex flex-col ${projet.status === "en cours" ? "opacity-70" : ""}`}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={projet.image} 
                    alt={projet.imageAlt}
                    className={`w-full h-full object-cover ${projet.status === "en cours" ? "grayscale" : ""}`}
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      projet.status === "achevé" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {projet.status === "achevé" ? "✓ Disponible" : "En cours"}
                    </span>
                  </div>
                </div>
                <div className={`p-6 grow ${projet.status === "en cours" ? "bg-gray-50" : "bg-white"}`}>
                  <h4 className="text-xl font-semibold mb-3">{projet.nom}</h4>
                  <p className={`mb-4 ${projet.status === "en cours" ? "text-gray-500" : "text-gray-700"}`}>
                    {projet.description}
                  </p>
                  
                  {/* Prix */}
                  <div className="mb-4">
                    <div className="text-lg font-bold text-blue-700">
                      {projet.prix}
                      <span className="text-sm font-normal text-gray-600 ml-2">
                        {projet.status === "en cours" ? "(Prix estimé)" : ""}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 rounded-full text-sm ${
                          projet.status === "en cours" 
                            ? "bg-gray-200 text-gray-500" 
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 pt-0 bg-white">
                  <button
                    onClick={() => handleChooseProject(projet)}
                    disabled={projet.status === "en cours"}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition ${
                      projet.status === "achevé"
                        ? "bg-green-600 text-white hover:bg-green-700 cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {projet.status === "achevé" ? "Choisir ce projet" : "Projet en cours"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section E-commerce */}
        <div id="commerce-section" className="mt-20 pt-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Exemples de Sites E-commerce</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {exemplesProjets.commerce.map((projet) => (
              <div 
                key={projet.id} 
                className={`shadow-lg rounded-xl overflow-hidden flex flex-col ${projet.status === "en cours" ? "opacity-70" : ""}`}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={projet.image} 
                    alt={projet.imageAlt}
                    className={`w-full h-full object-cover ${projet.status === "en cours" ? "grayscale" : ""}`}
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      projet.status === "achevé" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {projet.status === "achevé" ? "✓ Disponible" : "En cours"}
                    </span>
                  </div>
                </div>
                <div className={`p-6 grow ${projet.status === "en cours" ? "bg-gray-50" : "bg-white"}`}>
                  <h4 className="text-xl font-semibold mb-3">{projet.nom}</h4>
                  <p className={`mb-4 ${projet.status === "en cours" ? "text-gray-500" : "text-gray-700"}`}>
                    {projet.description}
                  </p>
                  
                  {/* Prix */}
                  <div className="mb-4">
                    <div className="text-lg font-bold text-green-700">
                      {projet.prix}
                      <span className="text-sm font-normal text-gray-600 ml-2">
                        {projet.status === "en cours" ? "(Prix estimé)" : ""}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 rounded-full text-sm ${
                          projet.status === "en cours" 
                            ? "bg-gray-200 text-gray-500" 
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 pt-0 bg-white">
                  <button
                    onClick={() => handleChooseProject(projet)}
                    disabled={projet.status === "en cours"}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition ${
                      projet.status === "achevé"
                        ? "bg-green-600 text-white hover:bg-green-700 cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {projet.status === "achevé" ? "Choisir ce projet" : "Projet en cours"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Applications Web */}
        <div id="application-section" className="mt-20 pt-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Exemples d'Applications Web</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {exemplesProjets.application.map((projet) => (
              <div 
                key={projet.id} 
                className={`shadow-lg rounded-xl overflow-hidden flex flex-col ${projet.status === "en cours" ? "opacity-70" : ""}`}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={projet.image} 
                    alt={projet.imageAlt}
                    className={`w-full h-full object-cover ${projet.status === "en cours" ? "grayscale" : ""}`}
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      projet.status === "achevé" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {projet.status === "achevé" ? "✓ Disponible" : "En cours"}
                    </span>
                  </div>
                </div>
                <div className={`p-6 grow ${projet.status === "en cours" ? "bg-gray-50" : "bg-white"}`}>
                  <h4 className="text-xl font-semibold mb-3">{projet.nom}</h4>
                  <p className={`mb-4 ${projet.status === "en cours" ? "text-gray-500" : "text-gray-700"}`}>
                    {projet.description}
                  </p>
                  
                  {/* Prix */}
                  <div className="mb-4">
                    <div className="text-lg font-bold text-purple-700">
                      {projet.prix}
                      <span className="text-sm font-normal text-gray-600 ml-2">
                        {projet.status === "en cours" ? "(Prix estimé)" : ""}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 rounded-full text-sm ${
                          projet.status === "en cours" 
                            ? "bg-gray-200 text-gray-500" 
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 pt-0 bg-white">
                  <button
                    onClick={() => handleChooseProject(projet)}
                    disabled={projet.status === "en cours"}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition ${
                      projet.status === "achevé"
                        ? "bg-green-600 text-white hover:bg-green-700 cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {projet.status === "achevé" ? "Choisir ce projet" : "Projet en cours"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
