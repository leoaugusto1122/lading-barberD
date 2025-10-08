// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('✅ Agendamento enviado com sucesso! Entraremos em contato para confirmar.');
    setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Nosso Endereço',
      content: 'Rua Principal, 123 - Centro\nSão Paulo, SP - 01234-567',
      link: '#'
    },
    {
      icon: '📞',
      title: 'Telefone/WhatsApp',
      content: '(11) 99999-9999',
      link: 'https://wa.me/5511999999999'
    },
    {
      icon: '📧',
      title: 'Email',
      content: 'contato@deivaobarbershop.com',
      link: 'mailto:contato@deivaobarbershop.com'
    },
    {
      icon: '⏰',
      title: 'Horário de Funcionamento',
      content: 'Segunda a Sexta: 9h às 20h\nSábado: 8h às 18h\nDomingo: 9h às 14h'
    }
  ];

  const socialLinks = [
    {
      icon: '📷',
      name: 'Instagram',
      url: 'https://instagram.com/deivaobarbershop',
      user: '@deivaobarbershop'
    },
    {
      icon: '📘',
      name: 'Facebook',
      url: 'https://facebook.com/deivaobarbershop',
      user: '/deivaobarbershop'
    },
    {
      icon: '💬',
      name: 'WhatsApp',
      url: 'https://wa.me/5511999999999',
      user: '(11) 99999-9999'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-preto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-branco mb-4">
            Entre em <span className="text-destaque">Contato</span>
          </h2>
          <p className="text-xl text-branco/80 max-w-2xl mx-auto">
            Pronto para seu próximo corte? Agende seu horário ou tire suas dúvidas. 
            <span className="text-destaque font-semibold"> Estamos aqui para te atender!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-branco mb-6">📞 Nossas Informações</h3>
            
            {contactInfo.map((item, index) => (
              <div
                key={item.title}
                className="flex items-start space-x-4 bg-cinza/30 rounded-2xl p-6 hover:bg-cinza/50 transition-all duration-300"
              >
                <div className="text-destaque text-2xl mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-branco mb-2">{item.title}</h4>
                  <p className="text-branco/80 whitespace-pre-line leading-relaxed">
                    {item.content}
                  </p>
                  {item.link && (
                    <a 
                      href={item.link} 
                      className="text-destaque hover:text-destaque/80 transition-colors duration-300 font-semibold mt-2 inline-block"
                    >
                      Clique aqui →
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-gradient-to-r from-destaque to-red-800 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-branco mb-4">🌐 Siga-nos nas Redes</h4>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center space-x-3 text-branco hover:text-branco/80 transition-all duration-300 p-3 rounded-lg hover:bg-branco/10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <div>
                      <div className="font-semibold">{social.name}</div>
                      <div className="text-branco/70 text-sm">{social.user}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-cinza/50 to-preto border border-cinza rounded-2xl p-8 shadow-2xl shadow-destaque/10">
            <h3 className="text-2xl font-bold text-branco mb-6">🗓️ Agende Seu Horário</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-branco mb-2 font-semibold">👤 Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-preto border-2 border-cinza rounded-xl px-4 py-3 text-branco focus:border-destaque focus:outline-none transition-colors duration-300"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div>
                  <label className="block text-branco mb-2 font-semibold">📱 Telefone/WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-preto border-2 border-cinza rounded-xl px-4 py-3 text-branco focus:border-destaque focus:outline-none transition-colors duration-300"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-branco mb-2 font-semibold">📧 Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-preto border-2 border-cinza rounded-xl px-4 py-3 text-branco focus:border-destaque focus:outline-none transition-colors duration-300"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-branco mb-2 font-semibold">💈 Serviço Desejado</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-preto border-2 border-cinza rounded-xl px-4 py-3 text-branco focus:border-destaque focus:outline-none transition-colors duration-300"
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="corte-classico">✂️ Corte Clássico - R$ 35</option>
                    <option value="corte-barba">🧔 Corte e Barba - R$ 60</option>
                    <option value="tratamento">💆 Tratamento Capilar - R$ 45</option>
                    <option value="corte-social">🎩 Corte Social - R$ 40</option>
                    <option value="premium">👑 Pacote Premium - R$ 90</option>
                    <option value="sobrancelha">👁️ Sobrancelha - R$ 20</option>
                  </select>
                </div>
                <div>
                  <label className="block text-branco mb-2 font-semibold">📅 Data Preferida</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-preto border-2 border-cinza rounded-xl px-4 py-3 text-branco focus:border-destaque focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-branco mb-2 font-semibold">💬 Mensagem (Opcional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-preto border-2 border-cinza rounded-xl px-4 py-3 text-branco focus:border-destaque focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Alguma observação especial, preferência de horário, ou dúvida..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-destaque text-branco py-4 rounded-xl font-semibold text-lg hover:bg-destaque/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-destaque/30"
              >
                ✅ Confirmar Agendamento
              </button>

              <p className="text-branco/60 text-center text-sm">
                🔒 Seus dados estão seguros. Entraremos em contato para confirmar o agendamento.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;