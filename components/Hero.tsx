
import React from 'react';
import { UI_STRINGS } from '../constants';

interface HeroProps {
  language?: 'en' | 'ta';
}

const Hero: React.FC<HeroProps> = ({ language = 'ta' }) => {
  const t = (key: string) => UI_STRINGS[key]?.[language] || key;

  return (
    <div className="relative bg-stone-900 overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1544161515-4af6b1d40af1?q=80&w=2070&auto=format&fit=crop" 
          alt="Healing Care Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/40 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
            {t('hero_title')}
          </h1>
          <p className="text-xl text-stone-300 mb-10 leading-relaxed font-light">
            {t('hero_subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#services" 
              className="px-8 py-3.5 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20 active:scale-95"
            >
              {t('nav_services')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
