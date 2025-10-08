// src/components/About.jsx
import React from 'react';

const About = () => {
  const skills = [
    { name: 'Cortes Clássicos', level: 95, icon: '✂️' },
    { name: 'Estilos Modernos', level: 90, icon: '💈' },
    { name: 'Barba & Bigode', level: 92, icon: '🧔' },
    { name: 'Atendimento', level: 98, icon: '⭐' }
  ];

  const milestones = [
    { year: '2014', event: 'Início da Jornada', description: 'Primeira barbearia no centro da cidade' },
    { year: '2017', event: 'Expansão', description: 'Reformulação completa do espaço' },
    { year: '2020', event: 'Excelência', description: 'Certificado de qualidade premium' },
    { year: '2024', event: 'Referência', description: '+2000 clientes satisfeitos' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-preto to-cinza/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-branco mb-4">
            Sobre <span className="text-destaque">Mim</span>
          </h2>
          <p className="text-xl text-branco/80 max-w-3xl mx-auto">
            Conheça a história por trás do barbeiro que transforma não apenas cabelos, 
            mas a <span className="text-destaque font-semibold">confiança e autoestima</span> de cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="bg-cinza/30 rounded-2xl p-6 border border-cinza hover:border-destaque/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-destaque mb-4">🎯 Minha Missão</h3>
              <p className="text-branco/80 leading-relaxed">
                Com mais de <span className="text-destaque font-semibold">10 anos de experiência</span> no mercado, 
                sou o Deivão, barbeiro apaixonado por transformar não apenas cortes de cabelo, 
                mas a confiança e autoestima de cada cliente que passa pela minha cadeira.
              </p>
            </div>

            <div className="bg-cinza/30 rounded-2xl p-6 border border-cinza hover:border-destaque/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-destaque mb-4">💫 Filosofia de Trabalho</h3>
              <p className="text-branco/80 leading-relaxed">
                Minha missão é proporcionar uma <span className="text-destaque font-semibold">experiência única</span>, 
                combinando técnicas tradicionais com as últimas tendências, sempre com atenção 
                aos detalhes e qualidade premium que merecem reconhecimento.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-preto rounded-xl p-4 border border-destaque">
                <div className="text-2xl font-bold text-destaque">10+</div>
                <div className="text-branco/70 text-sm">Anos Experiência</div>
              </div>
              <div className="text-center bg-preto rounded-xl p-4 border border-destaque">
                <div className="text-2xl font-bold text-destaque">2K+</div>
                <div className="text-branco/70 text-sm">Clientes Felizes</div>
              </div>
            </div>
          </div>
          
          {/* Image/Visual Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-destaque to-red-800 rounded-2xl w-full h-96 lg:h-[500px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-preto/20"></div>
              <div className="text-center relative z-10">
                <div className="text-6xl mb-4">💈</div>
                <h3 className="text-2xl font-bold text-branco">Deivão Silva</h3>
                <p className="text-branco/80">Barbeiro Profissional</p>
                <div className="mt-4 flex justify-center space-x-3">
                  <span className="bg-branco/20 text-branco px-3 py-1 rounded-full text-sm">🎖️ Premium</span>
                  <span className="bg-branco/20 text-branco px-3 py-1 rounded-full text-sm">⭐ 5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-branco text-center mb-8">🛠️ Minhas Especialidades</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-cinza/30 rounded-2xl p-6 border border-cinza hover:border-destaque/50 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-branco font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-destaque font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-cinza rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-destaque to-red-800 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-branco text-center mb-8">📅 Minha Jornada</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className="text-center bg-preto border-2 border-cinza rounded-2xl p-6 hover:border-destaque transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-destaque text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {index === 0 && '🚀'}
                  {index === 1 && '📈'}
                  {index === 2 && '🏆'}
                  {index === 3 && '👑'}
                </div>
                <div className="text-2xl font-bold text-destaque mb-2">{milestone.year}</div>
                <h4 className="text-lg font-semibold text-branco mb-2">{milestone.event}</h4>
                <p className="text-branco/70 text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;