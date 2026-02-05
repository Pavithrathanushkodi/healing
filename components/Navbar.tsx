
import React from 'react';
import { ShoppingCart, HeartPulse, Languages } from 'lucide-react';
import { Language, Translation } from '../types';
import { UI_STRINGS } from '../constants';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onHomeClick: () => void;
  language: Language;
  onToggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onHomeClick, language, onToggleLanguage }) => {
  const t = (key: string) => UI_STRINGS[key]?.[language] || key;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={onHomeClick}
          >
            <div className="bg-emerald-600 p-1.5 rounded-lg text-white group-hover:scale-110 transition-transform">
              <HeartPulse size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-stone-900 leading-none">Healing Care</span>
              <span className="text-xs font-medium text-emerald-700 leading-none mt-1 uppercase tracking-wider">ஹீலிங் கேர்</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <button 
              onClick={onToggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors text-sm font-bold"
            >
              <Languages size={18} className="text-emerald-600" />
              {language === 'en' ? 'தமிழ்' : 'English'}
            </button>

            <button 
              onClick={onCartClick}
              className="relative p-2 text-stone-600 hover:text-emerald-600 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
