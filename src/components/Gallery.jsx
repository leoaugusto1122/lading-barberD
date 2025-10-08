// src/components/Gallery.jsx
import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      category: 'cortes',
      title: 'Corte Social Moderno',
      description: 'Corte estilizado para ocasiões especiais',
      type: 'cortes',
      popular: true,
      image: '/images/gallery/Barba.png'
    },
    {
      id: 2,
      category: 'barbas',
      title: 'Barba Estilo Vintage',
      description: 'Acabamento clássico com toalha quente',
      type: 'barbas',
      popular: false,
      image: '/images/gallery/cabelo.png'
    },
    {
      id: 3,
      category: 'degrade',
      title: 'Degradê Americano',
      description: 'Transição suave e técnica apurada',
      type: 'cortes',
      popular: true,
      image: '/images/gallery/degradeamericano.png'
    },
    {
      id: 4,
      category: 'premium',
      title: 'Pacote Completo',
      description: 'Corte + barba + tratamento premium',
      type: 'premium',
      popular: true,
      image: '/images/gallery/massagemfacial.png'
    },
    {
      id: 5,
      category: 'classico',
      title: 'Corte Tradicional',
      description: 'Estilo atemporal com acabamento perfeito',
      type: 'cortes',
      popular: false,
      image: '/images/gallery/cabelo.png'
    },
    {
      id: 6,
      category: 'barbas',
      title: 'Bigode Estilizado',
      description: 'Design profissional para realçar expressão',
      type: 'barbas',
      popular: false,
      image: '/images/gallery/Barba.png'
    }
  ];

  const filters = [
    { key: 'todos', label: 'Todos', count: galleryItems.length },
    { key: 'cortes', label: 'Cortes', count: galleryItems.filter(item => item.type === 'cortes').length },
    { key: 'barbas', label: 'Barbas', count: galleryItems.filter(item => item.type === 'barbas').length },
    { key: 'premium', label: 'Premium', count: galleryItems.filter(item => item.type === 'premium').length }
  ];

  const filteredItems = activeFilter === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === activeFilter);

  // Auto-rotate carousel
  useEffect(() => {
    if (filteredItems.length > 0 && !isModalOpen) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, filteredItems.length, isModalOpen]);

  const nextSlide = () => {
    if (filteredItems.length > 0) {
      setCurrentIndex(currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (filteredItems.length > 0) {
      setCurrentIndex(currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1);
    }
  };

  const openModal = (index) => {
    const actualIndex = galleryItems.findIndex(item => item.id === filteredItems[index].id);
    setModalImageIndex(actualIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section id="gallery" className="py-20 bg-preto">
      <div className="container mx-auto px-4">
        {/* Header Minimalista */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-branco mb-4">
            Nossa <span className="text-destaque">Galeria</span>
          </h2>
          <p className="text-xl text-branco/60 max-w-2xl mx-auto">
            Confira os resultados dos nossos serviços. <span className="text-destaque">Clique para ampliar</span>.
          </p>
        </div>

        {/* Filtros Minimalistas */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => {
                setActiveFilter(filter.key);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-destaque text-branco'
                  : 'bg-cinza/10 text-branco/70 hover:bg-cinza/20'
              }`}
            >
              {filter.label}
              <span className={`ml-2 text-xs ${
                activeFilter === filter.key ? 'text-branco/80' : 'text-branco/40'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Carousel Principal */}
        {filteredItems.length > 0 && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative">
              {/* Carousel */}
              <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div 
                      className="w-full h-full bg-cover bg-center cursor-pointer"
                      style={{ backgroundImage: `url(${item.image})` }}
                      onClick={() => openModal(index)}
                    >
                      {/* Overlay Minimalista */}
                      <div className="absolute inset-0 bg-preto/0 hover:bg-preto/40 transition-all duration-300 flex items-end">
                        <div className="p-6 text-left w-full bg-gradient-to-t from-preto/80 to-transparent">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-branco mb-1">{item.title}</h3>
                              <p className="text-branco/70 text-sm">{item.description}</p>
                            </div>
                            {item.popular && (
                              <span className="bg-destaque text-branco text-xs px-2 py-1 rounded">
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navegação */}
              {filteredItems.length > 1 && (
                <>
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-preto/50 hover:bg-destaque text-branco w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    ‹
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-preto/50 hover:bg-destaque text-branco w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Indicadores */}
              {filteredItems.length > 1 && (
                <div className="flex justify-center space-x-2 mt-6">
                  {filteredItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-destaque w-6' 
                          : 'bg-cinza/50 hover:bg-destaque/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Grade de Miniaturas */}
        {filteredItems.length > 0 && (
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-12 max-w-4xl mx-auto">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-2 ring-destaque' 
                    : 'hover:ring-1 hover:ring-destaque/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div 
                  className="w-full h-full bg-cover bg-center hover:scale-110 transition-transform duration-300"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </div>
            ))}
          </div>
        )}

        {/* CTA Minimalista */}
        <div className="text-center">
          <div className="border border-destaque/30 rounded-2xl p-8 max-w-2xl mx-auto bg-destaque/5">
            <h3 className="text-2xl font-semibold text-branco mb-3">
              Pronto para sua transformação?
            </h3>
            <p className="text-branco/60 mb-6">
              Veja nossos trabalhos e agende seu horário
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-destaque text-branco px-6 py-3 rounded-lg font-medium hover:bg-destaque/90 transition-colors duration-300">
                Agendar Horário
              </button>
              <button className="border border-branco/30 text-branco px-6 py-3 rounded-lg font-medium hover:bg-branco hover:text-preto transition-all duration-300">
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Minimalista */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-preto/90 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagem */}
            <div 
              className="w-full h-[80vh] bg-cover bg-center rounded"
              style={{ backgroundImage: `url(${galleryItems[modalImageIndex].image})` }}
            />
            
            {/* Informações */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-preto to-transparent p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-branco mb-1">
                    {galleryItems[modalImageIndex].title}
                  </h3>
                  <p className="text-branco/70 text-sm">
                    {galleryItems[modalImageIndex].description}
                  </p>
                </div>
                <div className="text-branco/50 text-sm">
                  {modalImageIndex + 1} / {galleryItems.length}
                </div>
              </div>
            </div>

            {/* Navegação do Modal */}
            <button 
              onClick={prevModalImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-preto/50 hover:bg-destaque text-branco w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            >
              ‹
            </button>
            <button 
              onClick={nextModalImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-preto/50 hover:bg-destaque text-branco w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            >
              ›
            </button>

            {/* Fechar */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 bg-preto/50 hover:bg-destaque text-branco w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;