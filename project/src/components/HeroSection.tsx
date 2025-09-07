import React from 'react';
import { Users, MessageCircle, Shield, ExternalLink } from 'lucide-react';
import { useDiscordStats } from '../hooks/useDiscordStats';

const HeroSection: React.FC = () => {
  const { stats, loading } = useDiscordStats();

  const handleJoinDiscord = () => {
    // Aqui seria o link real do Discord
    window.open('https://discord.gg/40sabores', '_blank');
  };

  const scrollToAbout = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-red-900/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Logo */}
        <div className="mb-8">
          <div className="relative inline-block">
            <img
              src="https://images.pexels.com/photos/1666999/pexels-photo-1666999.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="40 Sabores Logo"
              className="w-32 h-32 mx-auto rounded-full border-4 border-red-600 shadow-2xl"
            />
            {/* Santa Hat Effect */}
            <div className="absolute -top-6 -right-2 text-4xl">🎅</div>
          </div>
          <h1 className="mt-6 text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
            40 Sabores
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            A comunidade mais saborosa do Discord
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-red-900/30 hover:border-red-600/50 transition-colors">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-red-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              {loading ? '...' : stats.members_total.toLocaleString()}
            </div>
            <div className="text-gray-300">Membros</div>
          </div>
          
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-red-900/30 hover:border-red-600/50 transition-colors">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-red-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              {loading ? '...' : stats.messages_total.toLocaleString()}
            </div>
            <div className="text-gray-300">Mensagens no servidor</div>
          </div>
          
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-red-900/30 hover:border-red-600/50 transition-colors">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-red-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              {loading ? '...' : stats.staff_count}
            </div>
            <div className="text-gray-300">Staff's</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            PARTICIPE DA COMUNIDADE
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleJoinDiscord}
              className="flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <ExternalLink className="w-5 h-5" />
              Faça parte
            </button>
            <button 
              onClick={scrollToAbout}
              className="px-8 py-4 border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-bold text-lg rounded-xl transition-all duration-300"
            >
              Sobre nós
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;