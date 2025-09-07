import React from 'react';
import { useToast } from './hooks/useToast';
import NotificationToast from './components/NotificationToast';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SnowAnimation from './components/SnowAnimation';
import AboutSection from './components/AboutSection';
import VIPSection from './components/VIPSection';
import SocialSection from './components/SocialSection';
import PartnersSection from './components/PartnersSection';
import InfluencersSection from './components/InfluencersSection';
import Footer from './components/Footer';

function App() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Toast Notifications */}
      {toasts.map((toast) => (
        <NotificationToast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          isVisible={true}
          onClose={() => removeToast(toast.id)}
          duration={toast.duration}
        />
      ))}

      <Header />
      <main>
        <div className="relative">
          <HeroSection />
          <SnowAnimation />
        </div>
        <AboutSection />
        <VIPSection />
        <SocialSection />
        <PartnersSection />
        <InfluencersSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;