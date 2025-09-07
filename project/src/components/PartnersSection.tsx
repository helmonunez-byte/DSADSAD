import React from 'react';
import { ExternalLink, Handshake } from 'lucide-react';
import ContactModal from './ContactModal';

const PartnersSection: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  const partners = [
    {
      id: 1,
      name: 'TechGaming Hub',
      logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Comunidade especializada em jogos e tecnologia',
      members: '2.5K membros',
      link: '#',
      type: 'Comunidade',
    },
    {
      id: 2,
      name: 'StreamLab Studios',
      logo: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Plataforma de streaming e criação de conteúdo',
      members: '892 criadores',
      link: '#',
      type: 'Plataforma',
    },
    {
      id: 3,
      name: 'Digital Creators',
      logo: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Rede de criadores de conteúdo digital',
      members: '1.8K criadores',
      link: '#',
      type: 'Rede',
    },
    {
      id: 4,
      name: 'GameVerse Community',
      logo: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Maior comunidade brasileira de gamers',
      members: '5.2K gamers',
      link: '#',
      type: 'Comunidade',
    },
  ];

  const partnershipBenefits = [
    'Colaborações em eventos',
    'Troca de divulgação',
    'Parcerias em sorteios',
    'Crossover de conteúdo',
    'Rede de apoio mútuo',
  ];

  return (
    <section id="parceiros" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Construímos uma rede sólida de parcerias com comunidades e criadores 
            que compartilham nossos valores de qualidade e diversão
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-red-900/30 hover:border-red-600/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center mb-6">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-20 h-20 rounded-full border-2 border-red-600/50 group-hover:border-red-500 transition-colors"
                />
              </div>
              
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-red-600/20 text-red-400 text-xs font-medium rounded-full mb-3">
                  {partner.type}
                </span>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {partner.name}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {partner.description}
                </p>
                
                <p className="text-red-400 font-semibold text-sm mb-4">
                  {partner.members}
                </p>
                
                <a
                  href={partner.link === '#' ? `https://discord.gg/${partner.name.toLowerCase()}` : partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors group-hover:scale-105"
                >
                  Visitar
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-red-900/30">
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 bg-red-600 rounded-full">
              <Handshake className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Benefícios da Parceria
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {partnershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-900/60 rounded-xl border border-gray-700/50"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 mb-6">
              Interessado em se tornar nosso parceiro?
            </p>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors"
            >
              Entre em Contato
            </button>
          </div>
        </div>

        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          type="partnership"
        />
      </div>
    </section>
  );
};

export default PartnersSection;