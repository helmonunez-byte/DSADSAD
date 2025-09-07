import React, { useState } from 'react';
import { Users, ExternalLink, Play, Heart, MessageCircle } from 'lucide-react';
import ContactModal from './ContactModal';

const InfluencersSection: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const influencers = [
    {
      id: 1,
      name: 'StreamerPro',
      platform: 'Twitch',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=200',
      followers: '15.2K seguidores',
      specialty: 'Gaming & Entretenimento',
      description: 'Streamer focado em jogos competitivos e interação com a comunidade',
      link: 'https://twitch.tv/streamerpro',
      color: 'bg-purple-600',
      verified: true,
    },
    {
      id: 2,
      name: 'ContentCreator',
      platform: 'YouTube',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200',
      followers: '8.7K inscritos',
      specialty: 'Tutoriais & Reviews',
      description: 'Criadora de conteúdo educativo sobre tecnologia e gaming',
      link: 'https://youtube.com/@contentcreator',
      color: 'bg-red-600',
      verified: true,
    },
    {
      id: 3,
      name: 'InfluencerGamer',
      platform: 'Instagram',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
      followers: '23.1K seguidores',
      specialty: 'Lifestyle & Gaming',
      description: 'Influenciador focado em lifestyle gamer e reviews de produtos',
      link: 'https://instagram.com/influencergamer',
      color: 'bg-pink-600',
      verified: true,
    },
    {
      id: 4,
      name: 'TikTokStar',
      platform: 'TikTok',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
      followers: '45.8K seguidores',
      specialty: 'Conteúdo Viral',
      description: 'Criadora de conteúdo viral com foco em trends e entretenimento',
      link: 'https://tiktok.com/@tiktokstar',
      color: 'bg-black',
      verified: true,
    },
  ];

  const programBenefits = [
    'Divulgação em nossas redes sociais',
    'Acesso a eventos exclusivos',
    'Colaborações com outros influencers',
    'Suporte técnico e criativo',
    'Oportunidades de monetização',
    'Badge verificado na comunidade',
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'twitch': return '🎮';
      case 'youtube': return '📺';
      case 'instagram': return '📸';
      case 'tiktok': return '🎵';
      default: return '🌟';
    }
  };

  return (
    <section id="influencers" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos Influencers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça os criadores de conteúdo que fazem parte da nossa comunidade 
            e ajudam a espalhar a diversão pelos quatro cantos da internet
          </p>
        </div>

        {/* Influencers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {influencers.map((influencer) => (
            <div
              key={influencer.id}
              className="group bg-black/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-red-900/30 hover:border-red-600/50 transition-all duration-300 hover:scale-105"
            >
              {/* Header com avatar e plataforma */}
              <div className="relative p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative">
                    <img
                      src={influencer.avatar}
                      alt={influencer.name}
                      className="w-16 h-16 rounded-full border-2 border-red-600"
                    />
                    {influencer.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl mb-1">{getPlatformIcon(influencer.platform)}</div>
                    <span className="text-xs text-gray-400">{influencer.platform}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{influencer.name}</h3>
                <p className="text-red-400 font-semibold text-sm mb-2">{influencer.followers}</p>
                <span className="inline-block px-3 py-1 bg-red-600/20 text-red-400 text-xs font-medium rounded-full">
                  {influencer.specialty}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="px-6 pb-6">
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {influencer.description}
                </p>

                {/* Stats simuladas */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{Math.floor(Math.random() * 1000) + 500}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{Math.floor(Math.random() * 200) + 50}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    <span>{Math.floor(Math.random() * 50) + 10}K</span>
                  </div>
                </div>

                <a
                  href={influencer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 group-hover:scale-105
                    ${influencer.color} hover:opacity-90 text-white
                  `}
                >
                  Seguir
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Programa de Influencers */}
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-red-900/30">
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 bg-red-600 rounded-full">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Programa de Influencers
          </h3>
          
          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Você é um criador de conteúdo? Junte-se ao nosso programa de influencers 
            e faça parte de uma rede colaborativa de creators talentosos!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {programBenefits.map((benefit, index) => (
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
              Interessado em se tornar um influencer parceiro?
            </p>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors"
            >
              Candidatar-se
            </button>
          </div>
        </div>

        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          type="influencer"
        />
      </div>
    </section>
  );
};

export default InfluencersSection;