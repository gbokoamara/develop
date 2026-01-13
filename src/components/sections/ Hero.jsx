
export const Hero = () => {
  return (
    <section
  id="presentation"
  className="md:py-32 text-white flex items-center" // plus compact
>
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
      Nous concevons des solutions web modernes
    </h1>

    <p className="mt-4 text-lg md:text-xl text-blue-100">
      Nous accompagnons les PME et entrepreneurs dans la création
      de sites web, e-commerce et applications performantes.
    </p>

    <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
      <a
        href="#contact"
        className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold"
      >
        Demander un devis
      </a>

      <a
        href="https://wa.me/2250758019243"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-blue-400 hover:bg-blue-400 hover:text-blue-950 transition px-6 py-3 rounded-lg font-semibold"
      >
        Nous contacter sur WhatsApp
      </a>
    </div>
  </div>
</section>

  );
};
