import React, { useState } from 'react';
import { Search, Menu, X, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Buscando por: ${searchQuery}`);
      // Aqui seria implementada a busca real
    }
  };

  const handleLogin = () => {
    // Simular login com Discord
    alert('Redirecionando para login com Discord...');
    // window.location.href = '/api/auth/discord';
  };
  return (
    <header className="relative z-50 bg-black/90 backdrop-blur-sm border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://images.pexels.com/photos/1666999/pexels-photo-1666999.jpeg?auto=compress&cs=tinysrgb&w=200"
              alt="40 Sabores"
              className="h-10 w-10 rounded-full border-2 border-red-600"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#sobre" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
              Sobre nós
            </a>
            <a href="#vips" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
              VIPs
            </a>
            <a href="#redes" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
              Redes sociais
            </a>
            <a href="#parceiros" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
              Parceiros
            </a>
            <a href="#influencers" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
              Influencers
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquise membros"
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </form>
          </div>

          {/* Login Button */}
          <div className="hidden md:flex">
            <button 
              onClick={handleLogin}
              className="flex items-center gap-2 px-6 py-2 border-2 border-red-600 text-red-400 font-medium rounded-lg hover:bg-red-600 hover:text-white transition-colors"
            >
              <User className="w-4 h-4" />
              Entrar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-red-900/30">
          <div className="px-4 py-4 space-y-4">
            <form onSubmit={handleSearch} className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquise membros"
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </form>
            <a href="#sobre" className="block text-gray-300 hover:text-red-400 transition-colors font-medium py-2">
              Sobre nós
            </a>
            <a href="#vips" className="block text-gray-300 hover:text-red-400 transition-colors font-medium py-2">
              VIPs
            </a>
            <a href="#redes" className="block text-gray-300 hover:text-red-400 transition-colors font-medium py-2">
              Redes sociais
            </a>
            <a href="#parceiros" className="block text-gray-300 hover:text-red-400 transition-colors font-medium py-2">
              Parceiros
            </a>
            <a href="#influencers" className="block text-gray-300 hover:text-red-400 transition-colors font-medium py-2">
              Influencers
            </a>
            <button 
              onClick={handleLogin}
              className="w-full mt-4 px-6 py-2 border-2 border-red-600 text-red-400 font-medium rounded-lg hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4" />
              Entrar
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;