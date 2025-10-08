// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Image com overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("/images/hero-background.png")',
        }}
      >
        <div className="absolute inset-0 bg-preto/70"></div>
      </div>

      {/* Resto do conteúdo permanece igual */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-branco mb-6 leading-tight">
          Estilo Clássico,{' '}
          <span className="text-destaque bg-gradient-to-r from-destaque to-red-800 bg-clip-text text-transparent">
            Acabamento Impecável
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-branco/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Tradição e modernidade se encontram na <span className="text-destaque font-semibold">Deivão Barbershop</span>. 
          Sua experiência premium em cuidados masculinos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="bg-destaque text-branco px-8 py-4 rounded-full font-semibold text-lg hover:bg-destaque/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-destaque/50">
            ✂️ Agendar Horário
          </button>
          <button className="border-2 border-branco text-branco px-8 py-4 rounded-full font-semibold text-lg hover:bg-branco hover:text-preto transition-all duration-300 transform hover:scale-105">
            📋 Ver Serviços
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { value: '5.0', label: '⭐ Avaliação Google', sub: 'Excelência comprovada' },
            { value: '10+', label: '🎯 Anos Experiência', sub: 'Tradição e qualidade' },
            { value: '2K+', label: '💈 Clientes Satisfeitos', sub: 'Resultados que impressionam' },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-preto/50 rounded-2xl p-6 border border-cinza hover:border-destaque transition-colors duration-300 backdrop-blur-sm">
              <div className="text-2xl font-bold text-destaque mb-2">{stat.value}</div>
              <div className="text-branco font-semibold mb-1">{stat.label}</div>
              <div className="text-branco/60 text-sm">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-branco rounded-full flex justify-center">
          <div className="w-1 h-3 bg-branco rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;