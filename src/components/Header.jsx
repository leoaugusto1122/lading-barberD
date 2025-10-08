// src/components/Header.jsx
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-preto/95 backdrop-blur-sm py-2' : 'bg-transparent py-4'
    }`}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-branco">Deivão Barbershop</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-branco hover:text-destaque transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <button className="hidden md:block bg-destaque text-branco px-6 py-2 rounded-full font-semibold hover:bg-destaque/90 transition-colors duration-300">
          Agendar Horário
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-branco text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-preto/95 backdrop-blur-sm border-t border-cinza">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-branco hover:text-destaque transition-colors py-2 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-destaque text-branco px-6 py-3 rounded-full font-semibold hover:bg-destaque/90 transition-colors duration-300 mt-4">
              Agendar Horário
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;