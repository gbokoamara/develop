
// pages/Telechargement.jsx
import React, { useState } from "react";

export const Telechargement = () => {
  const [files, setFiles] = useState({
    maquette: null,
    logo: null,
    cahierCharge: null
  });
  const [description, setDescription] = useState("");
  const [activeUpload, setActiveUpload] = useState("maquette");

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setFiles(prev => ({...prev, [type]: file}));
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const uploadedFiles = Object.values(files).filter(file => file !== null);
    let message = `Vous avez téléversé ${uploadedFiles.length} fichier(s)\n\n`;
    
    if (files.maquette) message += "✓ Maquette\n";
    if (files.logo) message += "✓ Logo\n";
    if (files.cahierCharge) message += "✓ Cahier de charge\n";
    if (description) message += `\nDescription : ${description}`;
    
    alert(message);
    // Ici tu peux ajouter ton backend pour envoyer les fichiers
  };

  const triggerFileInput = (type) => {
    setActiveUpload(type);
    document.getElementById(`file-${type}`).click();
  };

  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Téléversez votre maquette ou documents
        </h1>
        <p className="mb-6">
          Téléversez votre maquette obligatoirement, et si disponible votre logo et cahier de charge.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Zone de téléchargement pour la maquette (toujours visible) */}
          <div className="flex flex-col gap-2">
            <label className="text-left font-medium">
              Maquette / Prototype (obligatoire) :
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <input
                id="file-maquette"
                type="file"
                onChange={(e) => handleFileChange(e, "maquette")}
                className="hidden"
                accept=".pdf,.jpg,.png,.jpeg,.psd,.ai,.xd,.fig,.sketch"
              />
              <button
                type="button"
                onClick={() => triggerFileInput("maquette")}
                className="bg-blue-100 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-200 transition"
              >
                {files.maquette ? `✓ ${files.maquette.name}` : "Téléverser la maquette"}
              </button>
              <p className="text-sm text-gray-600 mt-2">
                Format acceptés : PDF, JPG, PNG, PSD, AI, XD, FIG, SKETCH
              </p>
            </div>
          </div>

          {/* Zone pour le logo (optionnel) */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="font-medium">
                Logo (optionnel) :
              </label>
              {!files.logo && (
                <button
                  type="button"
                  onClick={() => triggerFileInput("logo")}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Ajouter un logo
                </button>
              )}
            </div>
            {files.logo ? (
              <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
                <span>✓ {files.logo.name}</span>
                <button
                  type="button"
                  onClick={() => triggerFileInput("logo")}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Remplacer
                </button>
              </div>
            ) : (
              <div className="text-gray-500 text-sm text-left">
                Si vous avez un logo, cliquez sur "Ajouter un logo"
              </div>
            )}
            <input
              id="file-logo"
              type="file"
              onChange={(e) => handleFileChange(e, "logo")}
              className="hidden"
              accept=".jpg,.png,.jpeg,.svg,.ai,.eps"
            />
          </div>

          {/* Zone pour le cahier de charge (optionnel) */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="font-medium">
                Cahier de charge (optionnel) :
              </label>
              {!files.cahierCharge && (
                <button
                  type="button"
                  onClick={() => triggerFileInput("cahierCharge")}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Ajouter un cahier de charge
                </button>
              )}
            </div>
            {files.cahierCharge ? (
              <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
                <span>✓ {files.cahierCharge.name}</span>
                <button
                  type="button"
                  onClick={() => triggerFileInput("cahierCharge")}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Remplacer
                </button>
              </div>
            ) : (
              <div className="text-gray-500 text-sm text-left">
                Si vous avez un cahier de charge, cliquez sur "Ajouter un cahier de charge"
              </div>
            )}
            <input
              id="file-cahierCharge"
              type="file"
              onChange={(e) => handleFileChange(e, "cahierCharge")}
              className="hidden"
              accept=".pdf,.doc,.docx,.txt"
            />
          </div>

          {/* Zone de description */}
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-left font-medium">
              Description du projet :
            </label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Décrivez votre projet, vos attentes, le contexte, etc..."
              className="border border-gray-300 p-3 rounded-lg h-32 resize-none"
            />
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            disabled={!files.maquette}
            className={`px-6 py-3 rounded-lg font-semibold transition mt-4 ${
              files.maquette 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {files.maquette ? "Envoyer les fichiers" : "Veuillez téléverser une maquette"}
          </button>
        </form>
      </div>
    </section>
  );
};