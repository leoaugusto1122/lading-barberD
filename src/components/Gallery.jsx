// src/components/Gallery.jsx
import React, { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const galleryItems = [
    {
      id: 1,
      category: 'cortes',
      title: 'Corte Social Moderno',
      description: 'Corte estilizado para ocasiões especiais',
      type: 'cortes',
      popular: true
    },
    {
      id: 2,
      category: 'barbas',
      title: 'Barba Estilo Vintage',
      description: 'Acabamento clássico com toalha quente',
      type: 'barbas',
      popular: false
    },
    {
      id: 3,
      category: 'degrade',
      title: 'Degradê Americano',
      description: 'Transição suave e técnica apurada',
      type: 'cortes',
      popular: true
    },
    {
      id: 4,
      category: 'premium',
      title: 'Pacote Completo',
      description: 'Corte + barba + tratamento premium',
      type: 'premium',
      popular: true
    },
    {
      id: 5,
      category: 'classico',
      title: 'Corte Tradicional',
      description: 'Estilo atemporal com acabamento perfeito',
      type: 'cortes',
      popular: false
    },
    {
      id: 6,
      category: 'barbas',
      title: 'Bigode Estilizado',
      description: 'Design e manutenção profissional',
      type: 'barbas',
      popular: false
    },
    {
      id: 7,
      category: 'degrade',
      title: 'Degradê Navalhado',
      description: 'Técnica avançada com navalha',
      type: 'cortes',
      popular: true
    },
    {
      id: 8,
      category: 'premium',
      title: 'Experiência Completa',
      description: 'Serviço premium com massagem',
      type: 'premium',
      popular: false
    }
  ];

  const filters = [
    { key: 'todos', label: '🎨 Todos os Trabalhos', count: galleryItems.length },
    { key: 'cortes', label: '✂️ Cortes', count: galleryItems.filter(item => item.type === 'cortes').length },
    { key: 'barbas', label: '🧔 Barbas', count: galleryItems.filter(item => item.type === 'barbas').length },
    { key: 'premium', label: '👑 Premium', count: galleryItems.filter(item => item.type === 'premium').length }
  ];

  const filteredItems = activeFilter === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-cinza/10 to-preto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-branco mb-4">
            Nossa <span className="text-destaque">Galeria</span>
          </h2>
          <p className="text-xl text-branco/80 max-w-2xl mx-auto">
            Confira os <span className="text-destaque font-semibold">resultados incríveis</span> dos nossos serviços. 
            Cada trabalho é uma obra de arte única.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.key
                  ? 'bg-destaque text-branco shadow-lg shadow-destaque/30'
                  : 'bg-cinza/50 text-branco/80 hover:bg-cinza hover:text-branco'
              }`}
            >
              {filter.label} 
              <span className={`ml-2 px-2 py-1 rounded-full text-sm ${
                activeFilter === filter.key ? 'bg-branco/20' : 'bg-preto/50'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-preto border-2 border-cinza rounded-2xl overflow-hidden hover:border-destaque transition-all duration-500 transform hover:scale-105 cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-destaque/20 to-red-800/20 flex items-center justify-center relative">
                <div className="text-4xl">
                  {item.type === 'cortes' && '✂️'}
                  {item.type === 'barbas' && '🧔'}
                  {item.type === 'premium' && '👑'}
                </div>
                
                {item.popular && (
                  <div className="absolute top-3 right-3 bg-destaque text-branco px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                    🔥 POPULAR
                  </div>
                )}
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-preto/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-lg font-bold text-branco mb-2">{item.title}</h3>
                    <p className="text-branco/80 text-sm mb-4">{item.description}</p>
                    <button className="bg-destaque text-branco px-4 py-2 rounded-full text-sm font-semibold hover:bg-destaque/90 transition-colors">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-branco group-hover:text-destaque transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-branco/60 text-sm">{item.description}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs ${
                    item.type === 'cortes' ? 'bg-blue-500/20 text-blue-300' :
                    item.type === 'barbas' ? 'bg-green-500/20 text-green-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {item.type === 'cortes' && 'CORTE'}
                    {item.type === 'barbas' && 'BARBA'}
                    {item.type === 'premium' && 'PREMIUM'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-destaque to-red-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-branco mb-4">
              💫 Pronto para Sua Transformação?
            </h3>
            <p className="text-branco/90 mb-6 text-lg">
              Veja na galeria o que podemos fazer por você. 
              <span className="font-bold text-branco"> Agende agora</span> e faça parte dos nossos casos de sucesso!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-branco text-preto px-8 py-3 rounded-full font-semibold hover:bg-branco/90 transition-all duration-300 transform hover:scale-105">
                🗓️ Agendar Horário
              </button>
              <button className="border-2 border-branco text-branco px-8 py-3 rounded-full font-semibold hover:bg-branco hover:text-preto transition-all duration-300 transform hover:scale-105">
                📞 Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;