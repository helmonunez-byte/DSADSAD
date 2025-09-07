import React, { useState, useEffect } from 'react';
import { Crown, Star, Diamond, Gift, Users } from 'lucide-react';
import ContactModal from './ContactModal';

interface VIPUser {
  id: number;
  name: string;
  tier: string;
  avatar: string;
  joinDate: string;
}

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
          type="general"
        />
      </div>
    </section>
  );
};

export default VIPSection;