// src/components/Services.jsx
import React from 'react';

const Services = () => {
  const services = [
    {
      name: 'Corte Clássico',
      description: 'Corte tradicional com tesoura e máquina, finalizado com acabamento perfeito e produtos premium',
      price: 'R$ 35',
      duration: '30min',
      popular: true,
      features: ['Acabamento perfeito', 'Produtos premium', 'Estilo personalizado']
    },
    {
      name: 'Corte e Barba',
      description: 'Corte completo + barba feita com toalha quente, gel relaxante e finalização impecável',
      price: 'R$ 60',
      duration: '45min',
      popular: true,
      features: ['Toalha quente', 'Gel relaxante', 'Hidratação']
    },
    {
      name: 'Tratamento Capilar',
      description: 'Hidratação profunda e reconstrução dos fios com produtos especializados para saúde do cabelo',
      price: 'R$ 45',
      duration: '40min',
      popular: false,
      features: ['Hidratação profunda', 'Reconstrução', 'Selagem']
    },
    {
      name: 'Corte Social',
      description: 'Corte moderno e estilizado para ocasiões especiais, com design exclusivo',
      price: 'R$ 40',
      duration: '35min',
      popular: false,
      features: ['Design exclusivo', 'Estilo moderno', 'Para ocasiões']
    },
    {
      name: 'Pacote Premium',
      description: 'Experiência completa: corte + barba + tratamento facial + hidratação + massagem',
      price: 'R$ 90',
      duration: '75min',
      popular: true,
      features: ['Experiência completa', 'Massagem relaxante', 'Todos os benefícios']
    },
    {
      name: 'Sobrancelha',
      description: 'Design profissional e manutenção da sobrancelha para realçar sua expressão facial',
      price: 'R$ 20',
      duration: '15min',
      popular: false,
      features: ['Design profissional', 'Realce facial', 'Manutenção']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-preto to-cinza/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-branco mb-4">
            Nossos <span className="text-destaque">Serviços</span>
          </h2>
          <p className="text-xl text-branco/80 max-w-2xl mx-auto">
            Qualidade premium com preços acessíveis. Cada serviço é executado com 
            <span className="text-destaque font-semibold"> excelência e atenção aos detalhes</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`bg-preto border-2 rounded-2xl p-6 relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 ${
                service.popular 
                  ? 'border-destaque shadow-2xl shadow-destaque/20' 
                  : 'border-cinza hover:border-destaque/50'
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-destaque text-branco px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                  🏆 Mais Popular
                </div>
              )}
              
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-branco mb-2 group-hover:text-destaque transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-branco/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Features */}
              <div className="mb-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-branco/60 text-sm mb-1">
                    <span className="text-destaque">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center mb-4 pt-4 border-t border-cinza">
                <span className="text-2xl font-bold text-destaque">{service.price}</span>
                <span className="text-branco/60 bg-cinza/50 px-3 py-1 rounded-full">
                  ⏱️ {service.duration}
                </span>
              </div>
              
              <button className="w-full bg-destaque text-branco py-3 rounded-lg font-semibold hover:bg-destaque/90 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-destaque/30">
                🗓️ Agendar Este Serviço
              </button>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-destaque to-red-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-branco mb-4">
              💈 Primeira Vez na Barbearia?
            </h3>
            <p className="text-branco/90 mb-6">
              Ganhe <span className="font-bold text-branco">10% de desconto</span> no seu primeiro agendamento! 
              Experiencie a qualidade Deivão Barbershop.
            </p>
            <button className="bg-branco text-preto px-8 py-3 rounded-full font-semibold hover:bg-branco/90 transition-all duration-300 transform hover:scale-105">
              🎁 Quero Meu Desconto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;