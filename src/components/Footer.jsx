// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', href: '#home', icon: '🏠' },
    { name: 'Sobre Mim', href: '#about', icon: '👨‍💼' },
    { name: 'Serviços', href: '#services', icon: '✂️' },
    { name: 'Galeria', href: '#gallery', icon: '🖼️' },
    { name: 'Avaliações', href: '#testimonials', icon: '⭐' },
    { name: 'Contato', href: '#contact', icon: '📞' }
  ];

  const servicesList = [
    { name: 'Corte Clássico', price: 'R$ 35' },
    { name: 'Corte e Barba', price: 'R$ 60' },
    { name: 'Tratamento Capilar', price: 'R$ 45' },
    { name: 'Corte Social', price: 'R$ 40' },
    { name: 'Pacote Premium', price: 'R$ 90' },
    { name: 'Sobrancelha', price: 'R$ 20' }
  ];

  const contactInfo = [
    { icon: '📍', info: 'Rua Principal, 123 - Centro', details: 'São Paulo, SP - 01234-567' },
    { icon: '📞', info: '(11) 99999-9999', details: 'WhatsApp Disponível' },
    { icon: '📧', info: 'contato@deivaobarbershop.com', details: 'Respondemos em 24h' },
    { icon: '⏰', info: 'Segunda a Sexta: 9h-20h', details: 'Sábado: 8h-18h | Domingo: 9h-14h' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#', handle: '@deivaobarbershop' },
    { name: 'Facebook', icon: '📘', url: '#', handle: '/deivaobarbershop' },
    { name: 'WhatsApp', icon: '💬', url: '#', handle: '(11) 99999-9999' },
    { name: 'Google', icon: '🏢', url: '#', handle: 'Avalie no Google' }
  ];

  return (
    <footer className="bg-gradient-to-t from-preto to-cinza/30 border-t border-cinza">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-branco mb-2">Deivão Barbershop</h3>
              <p className="text-branco/70 leading-relaxed">
                Tradição e modernidade se encontram para proporcionar a melhor 
                experiência em cuidados masculinos desde 2014.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="mb-6">
              <h4 className="text-branco font-semibold mb-3">🌐 Siga Nossas Redes</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center space-x-2 text-branco/70 hover:text-destaque transition-colors duration-300 p-2 rounded-lg hover:bg-cinza/30"
                  >
                    <span className="text-lg">{social.icon}</span>
                    <div>
                      <div className="text-sm font-medium">{social.name}</div>
                      <div className="text-xs text-branco/50">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-branco mb-4">🔗 Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-branco/70 hover:text-destaque transition-colors duration-300 py-1"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-branco mb-4">💈 Nossos Serviços</h4>
            <ul className="space-y-2">
              {servicesList.map((service) => (
                <li key={service.name} className="flex justify-between items-center text-branco/70 hover:text-branco transition-colors duration-300 py-1">
                  <span>{service.name}</span>
                  <span className="text-destaque font-semibold text-sm">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-branco mb-4">📞 Contato & Localização</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-destaque text-lg mt-1">{contact.icon}</span>
                  <div>
                    <div className="text-branco font-medium">{contact.info}</div>
                    <div className="text-branco/60 text-sm">{contact.details}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="w-full bg-destaque text-branco py-3 rounded-lg font-semibold hover:bg-destaque/90 transition-all duration-300 transform hover:scale-105 mt-6 shadow-lg hover:shadow-destaque/30">
              🗓️ Agendar Horário Agora
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cinza">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-branco/60 text-center md:text-left">
              <p>
                © {currentYear} <span className="text-destaque font-semibold">Deivão Barbershop</span>. 
                Todos os direitos reservados.
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap justify-center space-x-6 text-branco/60">
              <a href="#" className="hover:text-destaque transition-colors duration-300 text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-destaque transition-colors duration-300 text-sm">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-destaque transition-colors duration-300 text-sm">
                FAQ
              </a>
            </div>

            {/* Development Credit */}
            <div className="text-branco/40 text-sm">
              Desenvolvido com ❤️ para sua melhor experiência
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Fixed Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5511999999999"
          className="bg-green-500 text-branco w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-2xl">💬</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;