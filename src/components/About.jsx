// src/components/About.jsx
import React from 'react';

const About = () => {
  const stats = [
    { value: '10+', label: 'Anos de Experiência' },
    { value: '2K+', label: 'Clientes Satisfeitos' }
  ];

  const skills = [
    { name: 'Cortes Clássicos', level: 95 },
    { name: 'Estilos Modernos', level: 90 },
    { name: 'Barba & Bigode', level: 92 },
    { name: 'Atendimento', level: 98 }
  ];

  const milestones = [
    { year: '2014', event: 'Início da Jornada' },
    { year: '2017', event: 'Expansão' },
    { year: '2020', event: 'Excelência' },
    { year: '2024', event: 'Referência' }
  ];

  return (
    <section id="about" className="py-20 bg-preto">
      <div className="container mx-auto px-4">
        {/* Header Minimalista */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-branco mb-4">
            Sobre <span className="text-destaque">Mim</span>
          </h2>
          <p className="text-xl text-branco/60 max-w-2xl mx-auto leading-relaxed">
            Conheça a história por trás do barbeiro que transforma não apenas cabelos, 
            mas a <span className="text-destaque">confiança e autoestima</span> de cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content - Lado Esquerdo */}
          <div className="space-y-8">
            {/* Missão */}
            <div className="border-l-4 border-destaque pl-6">
              <h3 className="text-2xl font-semibold text-branco mb-3">Minha Missão</h3>
              <p className="text-branco/70 leading-relaxed">
                Com mais de <span className="text-destaque">10 anos de experiência</span>, sou o Deivão, 
                barbeiro apaixonado por transformar não apenas cortes de cabelo, mas a confiança 
                e autoestima de cada cliente que passa pela minha cadeira.
              </p>
            </div>

            {/* Filosofia */}
            <div className="border-l-4 border-destaque pl-6">
              <h3 className="text-2xl font-semibold text-branco mb-3">Minha Filosofia</h3>
              <p className="text-branco/70 leading-relaxed">
                Proporcionar uma <span className="text-destaque">experiência única</span>, combinando 
                técnicas tradicionais com as últimas tendências, sempre com atenção aos detalhes 
                e qualidade premium.
              </p>
            </div>

            {/* Stats Simples */}
            <div className="flex space-x-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-destaque mb-1">{stat.value}</div>
                  <div className="text-branco/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Imagem/Visual - Lado Direito */}
          <div className="relative">
            <div className="bg-gradient-to-br from-destaque/20 to-destaque/5 rounded-2xl w-full h-96 lg:h-[500px] flex items-center justify-center border border-cinza/30">
              <div className="text-center">
                <div className="text-6xl mb-4">💈</div>
                <h3 className="text-2xl font-bold text-branco mb-2">Deivão Silva</h3>
                <p className="text-branco/60">Barbeiro Profissional</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <span className="bg-destaque/20 text-destaque px-3 py-1 rounded-full text-sm border border-destaque/30">Premium</span>
                  <span className="bg-destaque/20 text-destaque px-3 py-1 rounded-full text-sm border border-destaque/30">⭐ 5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills - Mais Clean */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-branco text-center mb-8">Especialidades</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-cinza/10 rounded-lg p-4 border border-cinza/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-branco font-medium">{skill.name}</span>
                  <span className="text-destaque font-bold text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-cinza/30 rounded-full h-2">
                  <div 
                    className="bg-destaque h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Minimalista */}
        <div>
          <h3 className="text-2xl font-semibold text-branco text-center mb-8">Minha Jornada</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className="text-center bg-cinza/5 rounded-xl p-6 border border-cinza/20 hover:border-destaque/30 transition-all duration-300"
              >
                <div className="text-destaque text-2xl mb-3">
                  {index === 0 && '🚀'}
                  {index === 1 && '📈'}
                  {index === 2 && '🏆'}
                  {index === 3 && '👑'}
                </div>
                <div className="text-lg font-bold text-destaque mb-1">{milestone.year}</div>
                <h4 className="text-branco font-medium text-sm">{milestone.event}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;