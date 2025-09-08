import React, { useState, useEffect } from 'react';
import { Crown, Star, Diamond, Gift, Users } from 'lucide-react';
import ContactModal from './ContactModal';

interface VIPUser {
  id: number;
  name: string;
  tier: string;
  avatar: string;
  joinDate: string;
import React, { useState, useEffect } from 'react';
import { Crown, Star, Diamond, Gift, Users } from 'lucide-react';
import { discordApi, VIPMember } from '../services/discordApi';
import ContactModal from './ContactModal';

const VIPSection: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [apiVIPs, setApiVIPs] = useState<VIPUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar os membros VIP de uma API
  const fetchVIPs = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://sua-api.com/vips'); // substitua pelo endpoint real
      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }
      const data: VIPUser[] = await response.json();
      setApiVIPs(data);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Erro ao buscar membros VIP.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVIPs();
  }, []);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Diamond': return 'text-blue-400 border-blue-400';
      case 'Gold': return 'text-yellow-400 border-yellow-400';
      case 'Silver': return 'text-gray-400 border-gray-400';
      default: return 'text-gray-400 border-gray-400';
    }
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [vipMembers, setVipMembers] = useState<VIPMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVIPs = async () => {
      try {
        setLoading(true);
        const data = await discordApi.getVIPMembers();
        setVipMembers(data);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'Erro ao buscar membros VIP.');
      } finally {
        setLoading(false);
      }
    };

    fetchVIPs();
  }, []);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'diamond': return 'text-blue-400 border-blue-400';
      case 'gold': return 'text-yellow-400 border-yellow-400';
      case 'silver': return 'text-gray-400 border-gray-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'diamond': return <Diamond className="w-6 h-6 text-blue-400" />;
      case 'gold': return <Crown className="w-6 h-6 text-yellow-400" />;
      case 'silver': return <Star className="w-6 h-6 text-gray-400" />;
      default: return <Star className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <section id="vips" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Membros VIP
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Torne-se um membro VIP e desfrute de benefícios exclusivos, 
            acesso a conteúdo premium e uma experiência única na comunidade
          </p>
        </div>

        {/* Lista de membros VIP vindos da API */}
        {loading && <p className="text-center text-white">Carregando membros VIP...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {apiVIPs.map((vip) => (
              <div
                key={vip.id}
                className="bg-gray-900/60 rounded-xl p-6 border border-gray-700/50 hover:border-red-600/50 transition-colors text-center"
              >
                <div className="relative inline-block mb-4">
                  <img
                    src={vip.avatar}
                    alt={vip.name}
                    className={`w-20 h-20 rounded-full border-2 ${getTierColor(vip.tier)}`}
                  />
                  <div className="absolute -top-2 -right-2">
                    {vip.tier === 'Diamond' && <Diamond className="w-6 h-6 text-blue-400" />}
                    {vip.tier === 'Gold' && <Crown className="w-6 h-6 text-yellow-400" />}
                    {vip.tier === 'Silver' && <Star className="w-6 h-6 text-gray-400" />}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{vip.name}</h4>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getTierColor(vip.tier)}`}>
                  {vip.tier} VIP
                </span>
                <p className="text-gray-400 text-sm mt-2">
                  Membro desde {new Date(vip.joinDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors"
          >
            Tornar-se VIP
          </button>
        </div>

        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
    <section id="vips" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Membros VIP
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Torne-se um membro VIP e desfrute de benefícios exclusivos, 
            acesso a conteúdo premium e uma experiência única na comunidade
          </p>
        </div>

        {/* VIP Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-b from-blue-900/20 to-blue-900/5 rounded-2xl p-8 border border-blue-600/30 hover:border-blue-500/50 transition-colors">
            <div className="text-center">
              <Diamond className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Diamond VIP</h3>
              <p className="text-blue-400 text-xl font-semibold mb-6">R$ 49,90/mês</p>
              <ul className="text-gray-300 space-y-2 mb-8">
                <li>• Canais exclusivos</li>
                <li>• Prioridade no suporte</li>
                <li>• Badge especial</li>
                <li>• Acesso antecipado</li>
                <li>• Sorteios exclusivos</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-b from-yellow-900/20 to-yellow-900/5 rounded-2xl p-8 border border-yellow-600/30 hover:border-yellow-500/50 transition-colors">
            <div className="text-center">
              <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Gold VIP</h3>
              <p className="text-yellow-400 text-xl font-semibold mb-6">R$ 29,90/mês</p>
              <ul className="text-gray-300 space-y-2 mb-8">
                <li>• Canais VIP</li>
                <li>• Badge dourado</li>
                <li>• Eventos especiais</li>
                <li>• Suporte prioritário</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-700/20 to-gray-700/5 rounded-2xl p-8 border border-gray-500/30 hover:border-gray-400/50 transition-colors">
            <div className="text-center">
              <Star className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Silver VIP</h3>
              <p className="text-gray-400 text-xl font-semibold mb-6">R$ 14,90/mês</p>
              <ul className="text-gray-300 space-y-2 mb-8">
                <li>• Canal VIP básico</li>
                <li>• Badge prateado</li>
                <li>• Participação em eventos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Current VIP Members */}
        {loading && <p className="text-center text-white">Carregando membros VIP...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && vipMembers.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-8">Nossos VIPs Atuais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vipMembers.map((vip) => (
                <div
                  key={vip.id}
                  className="bg-gray-900/60 rounded-xl p-6 border border-gray-700/50 hover:border-red-600/50 transition-colors text-center"
                >
                  <div className="relative inline-block mb-4">
                    <img
                      src={vip.avatar ? `https://cdn.discordapp.com/avatars/${vip.id}/${vip.avatar}.png` : '/default-avatar.png'}
                      alt={vip.username}
                      className={`w-20 h-20 rounded-full border-2 ${getTierColor(vip.tier)}`}
                    />
                    <div className="absolute -top-2 -right-2">
                      {getTierIcon(vip.tier)}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{vip.username}</h4>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getTierColor(vip.tier)}`}>
                    {vip.tier.charAt(0).toUpperCase() + vip.tier.slice(1)} VIP
                  </span>
                  <p className="text-gray-400 text-sm mt-2">
                    Membro desde {new Date(vip.joinedAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors"
          >
            Tornar-se VIP
          </button>
        </div>

        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          type="general"
        />
      </div>
    </section>
  );
};

export default VIPSection;