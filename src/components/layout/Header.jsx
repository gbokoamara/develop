import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "presentation", label: "Présentation", href: "#presentation" },
    { id: "services", label: "services", href: "#services" },
    // { id: 'temoignages', label: 'Témoignages', href: '#temoignages' },
    { id: "contact", label: "Contact", href: "#contact" },
    { id: "about", label: "about", href: "#about" },
  ];

    const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-sky-500  backdrop-blur-sm shadow-sm">
        <nav className=" mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div className="grid  place-items-center">
                <h1 className="text-xl font-bold text-emerald-900">Develop</h1>
                <p className="text-xs text-gray-500">Digital Solutions</p>
              </div>
            </a>

            {/* Navigation Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-emerald-700 font-medium transition-colors duration-200 py-2 px-1 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}

              {/* Bouton Contact */}
              <button
                onClick={() => scrollToSection("#contact")}
                className="bg-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors duration-200 shadow-md ml-4"
              >
                Nous contacter
              </button>
            </div>

            {/* Menu Burger Mobile */}
            <button
              className="md:hidden text-gray-700 hover:text-emerald-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Mobile */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <ul className="space-y-3 pt-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="flex w-full text-left text-white hover:text-emerald-700 font-medium py-2 px-4 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    onClick={() => scrollToSection("#contact")}
                    className="flex w-full text-center bg-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors duration-200 mt-2"
                  >
                    Nous contacter
                  </button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};
