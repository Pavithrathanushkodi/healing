
import React from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../types';

interface WelcomePopupProps {
  onChoose: (lang: Language) => void;
}

const WelcomePopup: React.FC<WelcomePopupProps> = ({ onChoose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center border border-emerald-100 animate-in zoom-in-95 duration-300">
        <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Languages className="text-emerald-600" size={32} />
        </div>
        
        <h2 className="text-2xl font-black text-stone-900 mb-2 leading-tight">
          Welcome to Healing Care
        </h2>
        <p className="text-stone-500 mb-6 font-medium">
          Do you want to translate in Tamil now?
          <br />
          <span className="text-sm font-bold text-emerald-700 mt-2 block">
            இணையதளத்தை தமிழில் பார்க்க விரும்புகிறீர்களா?
          </span>
        </p>

        <div className="space-y-3">
          <button
            onClick={() => onChoose('ta')}
            className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all active:scale-95 shadow-lg shadow-emerald-200"
          >
            Yes / ஆம்
          </button>
          <button
            onClick={() => onChoose('en')}
            className="w-full py-3 bg-stone-100 text-stone-600 rounded-2xl font-bold hover:bg-stone-200 transition-all active:scale-95"
          >
            No / இல்லை
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
