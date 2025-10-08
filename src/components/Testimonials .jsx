// src/components/Testimonials.jsx
import React, { useState } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Roberto Silva',
      age: 32,
      service: 'Corte e Barba Premium',
      rating: 5,
      comment: 'Melhor barbearia da cidade! O Deivão é um artista. Sempre saio renovado e com um corte impecável. Atenção aos detalhes incrível!',
      avatar: '👨‍💼',
      date: '2 semanas atrás'
    },
    {
      id: 2,
      name: 'Carlos Santos',
      age: 28,
      service: 'Degradê Navalhado',
      rating: 5,
      comment: 'Profissional excepcional! Conheci a barbearia por indicação e superou todas as expectativas. Ambiente limpo e atendimento de primeira.',
      avatar: '🧑‍🔧',
      date: '1 mês atrás'
    },
    {
      id: 3,
      name: 'Miguel Oliveira',
      age: 45,
      service: 'Corte Tradicional',
      rating: 5,
      comment: 'Há 3 anos sou cliente fiel. O Deivão entende exatamente o que quero e sempre sugere melhorias. Serviço consistente e de qualidade.',
      avatar: '👨‍🏫',
      date: '3 dias atrás'
    },
    {
      id: 4,
      name: 'João Pereira',
      age: 25,
      service: 'Pacote Completo',
      rating: 5,
      comment: 'Experiência incrível! Fui pela primeira vez e me surpreendi. Corte, barba, atendimento... Tudo perfeito! Voltarei sempre.',
      avatar: '👨‍🎓',
      date: '1 semana atrás'
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-preto to-cinza/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-branco mb-4">
            O Que <span className="text-destaque">Dizem</span> de Nós
          </h2>
          <p className="text-xl text-branco/80 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho. 
            <span className="text-destaque font-semibold"> Confira as experiências reais</span> de quem já passou pela nossa cadeira.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-cinza/30 to-preto border-2 border-cinza rounded-2xl p-8 relative">
            {/* Quote Icon */}
            <div className="text-destaque text-6xl absolute top-4 left-6 opacity-20">❝</div>
            
            <div className="text-center relative z-10">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-destaque text-2xl">⭐</span>
                ))}
              </div>

              {/* Comment */}
              <blockquote className="text-xl text-branco/90 italic mb-8 leading-relaxed">
                "{testimonials[activeTestimonial].comment}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="text-4xl">{testimonials[activeTestimonial].avatar}</div>
                <div className="text-left">
                  <div className="font-bold text-branco text-lg">{testimonials[activeTestimonial].name}</div>
                  <div className="text-branco/70">
                    {testimonials[activeTestimonial].age} anos • {testimonials[activeTestimonial].service}
                  </div>
                </div>
              </div>

              <div className="text-branco/50 text-sm">
                {testimonials[activeTestimonial].date}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-destaque text-branco w-10 h-10 rounded-full flex items-center justify-center hover:bg-destaque/90 transition-colors duration-300"
            >
              ‹
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-destaque text-branco w-10 h-10 rounded-full flex items-center justify-center hover:bg-destaque/90 transition-colors duration-300"
            >
              ›
            </button>
          </div>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial 
                  ? 'bg-destaque w-8' 
                  : 'bg-cinza hover:bg-destaque/50'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: '4.9', label: 'Avaliação Média', icon: '⭐' },
            { value: '500+', label: 'Avaliações', icon: '📝' },
            { value: '98%', label: 'Clientes Satisfeitos', icon: '😊' },
            { value: '100%', label: 'Recomendam', icon: '👍' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center bg-cinza/20 rounded-2xl p-6 border border-cinza hover:border-destaque transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-destaque mb-1">{stat.value}</div>
              <div className="text-branco/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-destaque to-red-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-branco mb-4">
              💬 Deixe Sua Avaliação!
            </h3>
            <p className="text-branco/90 mb-6">
              Já foi nosso cliente? Compartilhe sua experiência e ajude outras pessoas a descobrirem nosso trabalho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-branco text-preto px-6 py-3 rounded-full font-semibold hover:bg-branco/90 transition-all duration-300">
                ✍️ Avaliar no Google
              </button>
              <button className="border-2 border-branco text-branco px-6 py-3 rounded-full font-semibold hover:bg-branco hover:text-preto transition-all duration-300">
                💬 Avaliar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;