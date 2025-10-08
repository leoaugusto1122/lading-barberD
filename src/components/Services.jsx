// src/components/Services.jsx
import React from 'react';

const Services = () => {
  const services = [
    {
      name: 'Corte Clássico',
      description: 'Corte tradicional com tesoura e máquina, finalizado com acabamento perfeito',
      price: 'R$ 35',
      duration: '30min',
      popular: true,
      features: ['Acabamento perfeito', 'Produtos premium', 'Estilo personalizado'],
      icon: '✂️'
    },
    {
      name: 'Corte e Barba',
      description: 'Corte completo + barba feita com toalha quente e finalização impecável',
      price: 'R$ 60',
      duration: '45min',
      popular: true,
      features: ['Toalha quente', 'Gel relaxante', 'Hidratação'],
      icon: '🧔'
    },
    {
      name: 'Tratamento Capilar',
      description: 'Hidratação profunda e reconstrução dos fios com produtos especializados',
      price: 'R$ 45',
      duration: '40min',
      popular: false,
      features: ['Hidratação profunda', 'Reconstrução', 'Selagem'],
      icon: '💆'
    },
    {
      name: 'Corte Social',
      description: 'Corte moderno e estilizado para ocasiões especiais',
      price: 'R$ 40',
      duration: '35min',
      popular: false,
      features: ['Design exclusivo', 'Estilo moderno', 'Para ocasiões'],
      icon: '🎩'
    },
    {
      name: 'Pacote Premium',
      description: 'Experiência completa: corte + barba + tratamento + massagem',
      price: 'R$ 90',
      duration: '75min',
      popular: true,
      features: ['Experiência completa', 'Massagem relaxante', 'Todos os benefícios'],
      icon: '👑'
    },
    {
      name: 'Sobrancelha',
      description: 'Design profissional para realçar sua expressão facial',
      price: 'R$ 20',
      duration: '15min',
      popular: false,
      features: ['Design profissional', 'Realce facial', 'Manutenção'],
      icon: '👁️'
    }
  ];

  return (
    <section id="services" className="py-20 bg-preto">
      <div className="container mx-auto px-4">
        {/* Header Minimalista */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-branco mb-4">
            Nossos <span className="text-destaque">Serviços</span>
          </h2>
          <p className="text-xl text-branco/60 max-w-2xl mx-auto">
            Qualidade premium com preços acessíveis. Executado com <span className="text-destaque">excelência e atenção aos detalhes</span>.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`bg-cinza/5 border rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 group ${
                service.popular 
                  ? 'border-destaque/50 bg-destaque/5' 
                  : 'border-cinza/20 hover:border-destaque/30'
              }`}
            >
              {/* Header do Card */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`text-2xl ${
                    service.popular ? 'text-destaque' : 'text-branco/60'
                  }`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold ${
                      service.popular ? 'text-destaque' : 'text-branco'
                    }`}>
                      {service.name}
                    </h3>
                    <p className="text-branco/60 text-sm mt-1">{service.description}</p>
                  </div>
                </div>
                {service.popular && (
                  <span className="bg-destaque text-branco text-xs px-2 py-1 rounded-full font-medium">
                    Popular
                  </span>
                )}
              </div>

              {/* Features */}
              <div className="mb-4 space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-branco/70 text-sm">
                    <span className="text-destaque text-xs">●</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Footer com Preço e Botão */}
              <div className="flex items-center justify-between pt-4 border-t border-cinza/20">
                <div className="text-right">
                  <div className="text-2xl font-bold text-destaque">{service.price}</div>
                  <div className="text-branco/50 text-sm">{service.duration}</div>
                </div>
                <button className="bg-destaque text-branco px-4 py-2 rounded-lg text-sm font-medium hover:bg-destaque/90 transition-colors duration-300">
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Minimalista */}
        <div className="text-center">
          <div className="border border-destaque/30 rounded-2xl p-8 max-w-2xl mx-auto bg-destaque/5">
            <h3 className="text-2xl font-semibold text-branco mb-3">
              Primeira vez na barbearia?
            </h3>
            <p className="text-branco/60 mb-6">
              Ganhe <span className="text-destaque font-semibold">10% de desconto</span> no seu primeiro agendamento
            </p>
            <button className="bg-destaque text-branco px-6 py-3 rounded-lg font-medium hover:bg-destaque/90 transition-colors duration-300">
              Quero meu desconto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;