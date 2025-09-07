import React from 'react';
import { MessageCircle, Instagram, Music, Youtube, Twitch } from 'lucide-react';

const SocialSection: React.FC = () => {
  const socialLinks = [
    {
      name: 'Discord',
      icon: MessageCircle,
      url: '#',
      followers: '1,247 membros',
      color: 'bg-indigo-600 hover:bg-indigo-700',
      description: 'Junte-se ao nosso servidor principal',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      followers: '3.2K seguidores',
      color: 'bg-pink-600 hover:bg-pink-700',
      description: 'Fotos e stories da comunidade',
    },
    {
      name: 'TikTok',
      icon: Music,
      url: '#',
      followers: '892 seguidores',
      color: 'bg-black hover:bg-gray-800',
      description: 'Vídeos divertidos dos membros',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: '#',
      followers: '567 inscritos',
      color: 'bg-red-600 hover:bg-red-700',
      description: 'Canal oficial da comunidade',
    },
    {
      name: 'Twitch',
      icon: Twitch,
      url: '#',
      followers: '234 seguidores',
      color: 'bg-purple-600 hover:bg-purple-700',
      description: 'Lives e gameplay ao vivo',
    },
  ];

  return (
    <section id="redes" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossas Redes Sociais
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Siga-nos em todas as plataformas para ficar por dentro de novidades, 
            eventos e conteúdo exclusivo da comunidade 40 Sabores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <div
                key={index}
                className="group bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-red-900/30 hover:border-red-600/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-4 rounded-full ${social.color} text-white transition-colors`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  {social.name}
                </h3>
                
                <p className="text-red-400 font-semibold text-center mb-4">
                  {social.followers}
                </p>
                
                <p className="text-gray-300 text-center mb-6 text-sm leading-relaxed">
                  {social.description}
                </p>
                
                <div className="text-center">
                  <a
                    href={social.url === '#' ? `https://${social.name.toLowerCase()}.com/40sabores` : social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 ${social.color} text-white font-medium rounded-xl transition-all duration-300 group-hover:scale-105`}
                  >
                    <IconComponent className="w-5 h-5 mr-2" />
                    Seguir
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Feed Preview */}
        <div className="mt-16 bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-red-900/30">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Feed das Redes Sociais
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((post) => (
              <div
                key={post}
                className="bg-gray-900/60 rounded-xl overflow-hidden border border-gray-700/50 hover:border-red-600/50 transition-colors"
              >
                <div className="aspect-video bg-gradient-to-br from-red-600/20 to-purple-600/20 flex items-center justify-center">
                  <MessageCircle className="w-12 h-12 text-red-400" />
                </div>
                <div className="p-4">
                  <h4 className="text-white font-semibold mb-2">
                    Post da Comunidade #{post}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Confira os últimos momentos da nossa comunidade...
                  </p>
                  <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                    <span>2 horas atrás</span>
                    <span>❤️ 24 · 💬 8</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;