import React from 'react';
import { MessageCircle, Instagram, Music, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://images.pexels.com/photos/1666999/pexels-photo-1666999.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="40 Sabores"
                className="h-12 w-12 rounded-full border-2 border-red-600"
              />
              <h3 className="text-2xl font-bold text-white">40 Sabores</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              A comunidade mais saborosa do Discord. Junte-se a nós para 
              conversas interessantes, jogos divertidos e amizades duradouras.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-black hover:bg-gray-800 text-white rounded-full transition-colors border border-white"
                aria-label="TikTok"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-red-400 transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#vips" className="text-gray-300 hover:text-red-400 transition-colors">
                  Membros VIP
                </a>
              </li>
              <li>
                <a href="#parceiros" className="text-gray-300 hover:text-red-400 transition-colors">
                  Parceiros
                </a>
              </li>
              <li>
                <a href="#influencers" className="text-gray-300 hover:text-red-400 transition-colors">
                  Influencers
                </a>
              </li>
            </ul>
          </div>

          {/* Community Stats */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Comunidade</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Membros</span>
                <span className="text-red-400 font-semibold">1,247</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Online</span>
                <span className="text-green-400 font-semibold">324</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Staff</span>
                <span className="text-blue-400 font-semibold">12</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-red-900/30 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center text-gray-300 mb-4 md:mb-0">
            <span>© 2024 40 Sabores. Feito com</span>
            <Heart className="w-4 h-4 text-red-500 mx-2" />
            <span>para a comunidade.</span>
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-red-400 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-red-400 transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-red-400 transition-colors">
              Suporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;