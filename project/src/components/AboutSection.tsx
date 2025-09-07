import React, { useState } from 'react';
import { Users2, Eye } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const staffMembers = [
    {
      id: 1,
      name: 'João Silva',
      role: 'Owner',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Fundador da comunidade 40 Sabores',
    },
    {
      id: 2,
      name: 'Maria Santos',
      role: 'Admin',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Administradora responsável pela moderação',
    },
    {
      id: 3,
      name: 'Pedro Costa',
      role: 'Moderador',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Moderador especializado em eventos',
    },
    {
      id: 4,
      name: 'Ana Oliveira',
      role: 'Moderador',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      bio: 'Moderadora responsável pelo suporte',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-red-900/30">
              <h3 className="text-xl font-bold text-white mb-6">Seções</h3>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-300 hover:bg-red-600/20 hover:text-red-400'
                  }`}
                >
                  <Eye className="w-5 h-5" />
                  Visão Geral
                </button>
                <button
                  onClick={() => setActiveTab('staff')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'staff'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-300 hover:bg-red-600/20 hover:text-red-400'
                  }`}
                >
                  <Users2 className="w-5 h-5" />
                  Equipe Staff
                </button>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/4">
            {activeTab === 'overview' && (
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-red-900/30">
                <h2 className="text-3xl font-bold text-white mb-6">Sobre a 40 Sabores</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    A comunidade 40 Sabores nasceu com o propósito de reunir pessoas apaixonadas por 
                    conversas interessantes, jogos e momentos de diversão. Somos uma família virtual 
                    que valoriza o respeito, a amizade e a inclusão.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Nosso servidor oferece canais temáticos para diferentes interesses, eventos 
                    regulares, sistema de níveis e recompensas, além de uma equipe de moderação 
                    dedicada a manter um ambiente saudável e acolhedor para todos.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-red-900/20 rounded-xl p-6 border border-red-800/30">
                      <h4 className="text-xl font-bold text-red-400 mb-3">Nossa Missão</h4>
                      <p className="text-gray-300">
                        Criar um espaço seguro e divertido onde todos possam expressar sua 
                        personalidade e fazer amizades duradouras.
                      </p>
                    </div>
                    <div className="bg-red-900/20 rounded-xl p-6 border border-red-800/30">
                      <h4 className="text-xl font-bold text-red-400 mb-3">Nossos Valores</h4>
                      <p className="text-gray-300">
                        Respeito mútuo, diversidade, inclusão e a crença de que cada membro 
                        contribui para tornar nossa comunidade ainda melhor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'staff' && (
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-red-900/30">
                <h2 className="text-3xl font-bold text-white mb-6">Nossa Equipe</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Conheça os membros da equipe que trabalham para manter nossa comunidade 
                  segura e divertida para todos.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {staffMembers.map((member) => (
                    <div
                      key={member.id}
                      className="bg-gray-900/60 rounded-xl p-6 border border-gray-700/50 hover:border-red-600/50 transition-colors"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-16 h-16 rounded-full border-2 border-red-600"
                        />
                        <div>
                          <h4 className="text-xl font-bold text-white">{member.name}</h4>
                          <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
                            {member.role}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300">{member.bio}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;