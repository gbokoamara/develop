
export const Services = () => {
  return (
    <section
      id="services"
      className=" text-white py-20" // bg-purple-950
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos services
        </h2>

        {/* Grille des services */}
        <div className="grid gap-8 md:grid-cols-3">

          <div className="bg-purple-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              Site vitrine
            </h3>
            <p className="text-purple-100">
              Nous concevons des sites modernes et responsives pour
              présenter efficacement votre activité.
            </p>
          </div>

          <div className="bg-purple-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              Site e-commerce
            </h3>
            <p className="text-purple-100">
              Nous développons des plateformes de vente en ligne avec
              paiement sécurisé et gestion des commandes.
            </p>
          </div>

          <div className="bg-purple-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              Application web
            </h3>
            <p className="text-purple-100">
              Nous créons des applications sur mesure pour automatiser
              et optimiser vos processus métiers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};


// export const Services = () => {
//   return (
//     <section id="services" className="py-20 bg-gray-100 text-gray-900">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Titre */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           Ce que nous faisons
//         </h2>

//         {/* Grille des services */}
//         <div className="grid md:grid-cols-3 gap-8">

//           <div className="bg-white shadow-lg p-6 rounded-xl text-center">
//             <h3 className="text-xl font-semibold mb-3">Site vitrine</h3>
//             <p>
//               Nous créons des sites clairs et modernes pour présenter votre activité et attirer vos clients.
//             </p>
//           </div>

//           <div className="bg-white shadow-lg p-6 rounded-xl text-center">
//             <h3 className="text-xl font-semibold mb-3">Site e-commerce</h3>
//             <p>
//               Nous mettons en place des boutiques en ligne avec paiement sécurisé et gestion facile des commandes.
//             </p>
//           </div>

//           <div className="bg-white shadow-lg p-6 rounded-xl text-center">
//             <h3 className="text-xl font-semibold mb-3">Application web sur mesure</h3>
//             <p>
//               Nous développons des applications pour automatiser vos processus et optimiser votre activité.
//             </p>
//           </div>

//         </div>

//         {/* CTA secondaire */}
//         <div className="mt-10 text-center">
//           <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
//             Contactez-nous pour en savoir plus
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };
