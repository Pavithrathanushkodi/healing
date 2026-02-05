
import React from 'react';
import { Service, Language } from '../types';
import { Plus, Clock, Sparkles, X } from 'lucide-react';
import { UI_STRINGS } from '../constants';

interface ServiceCardProps {
  service: Service;
  language: Language;
  onAddToCart: (service: Service, withAddon: boolean) => void;
  isAdded: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, language, onAddToCart, isAdded }) => {
  const [showAddonOptions, setShowAddonOptions] = React.useState(false);
  const t = (key: string) => UI_STRINGS[key]?.[language] || key;

  const handleAdd = (withAddon: boolean = false) => {
    onAddToCart(service, withAddon);
    setShowAddonOptions(false);
  };

  const toggleOptions = () => {
    setShowAddonOptions(!showAddonOptions);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow relative">
      <div className="relative h-48 sm:h-56">
        <img 
          src={service.imageUrl} 
          alt={service.name[language]} 
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${service.id}/800/600`;
          }}
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-emerald-800 font-bold shadow-sm flex items-center gap-1">
          <span className="text-xs">₹</span>{service.price}
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-stone-900 leading-tight mb-1">{service.name[language]}</h3>
        {language === 'ta' && <p className="text-[10px] text-stone-400 font-medium mb-2 uppercase tracking-tight">{service.name.en}</p>}
        
        <p className="text-stone-600 text-sm mb-4 line-clamp-3">
          {service.description[language]}
        </p>

        {service.duration && (
          <div className="flex items-center gap-2 text-stone-500 text-xs mb-4">
            <Clock size={14} />
            <span>{service.duration}</span>
          </div>
        )}

        <div className="mt-auto relative">
          {service.addOns && !isAdded ? (
            <div className="space-y-2">
              <button
                onClick={toggleOptions}
                className={`w-full py-2.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors ${
                  showAddonOptions 
                  ? 'bg-stone-100 text-stone-600' 
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                {showAddonOptions ? (
                   <>
                     <X size={18} />
                     <span>{t('cancel')}</span>
                   </>
                ) : (
                  <>
                    <Plus size={18} />
                    <span>{t('select_option')}</span>
                  </>
                )}
              </button>
              
              {showAddonOptions && (
                <div className="absolute bottom-full left-0 right-0 mb-3 bg-white border border-stone-200 rounded-xl p-4 shadow-2xl z-20 animate-in fade-in slide-in-from-bottom-2">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                      {t('choose_type')}
                    </p>
                    <button onClick={() => setShowAddonOptions(false)} className="text-stone-400 hover:text-stone-900">
                      <X size={14} />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <button 
                      onClick={() => handleAdd(false)}
                      className="w-full text-left p-3 rounded-xl hover:bg-stone-50 border border-stone-100 flex justify-between items-center group transition-colors"
                    >
                      <span className="text-sm font-bold text-stone-700">{t('basic_service')}</span>
                      <span className="text-emerald-600 font-black">₹{service.price}</span>
                    </button>
                    {service.addOns.map((addon, idx) => (
                      <button 
                        key={idx}
                        onClick={() => handleAdd(true)}
                        className="w-full text-left p-3 rounded-xl hover:bg-emerald-50 border border-emerald-100 flex justify-between items-center group transition-colors"
                      >
                        <span className="text-sm font-bold text-stone-700">{addon.name[language]}</span>
                        <span className="text-emerald-600 font-black">₹{service.price + addon.price}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => handleAdd(false)}
              disabled={isAdded}
              className={`w-full py-2.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                isAdded 
                ? 'bg-emerald-100 text-emerald-800 cursor-default shadow-inner' 
                : 'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 shadow-md shadow-emerald-100'
              }`}
            >
              {isAdded ? (
                <>
                  <Sparkles size={18} />
                  <span>{t('added')}</span>
                </>
              ) : (
                <>
                  <Plus size={18} />
                  <span>{t('add_to_cart')}</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
