
import React from 'react';
import { CartItem, Language } from '../types';
import { Trash2, ShoppingBag, X } from 'lucide-react';
import { UI_STRINGS } from '../constants';

interface CartProps {
  items: CartItem[];
  language: Language;
  onRemove: (index: number) => void;
  onProceed: () => void;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ items, language, onRemove, onProceed, onClose }) => {
  const t = (key: string) => UI_STRINGS[key]?.[language] || key;

  const totalPrice = items.reduce((acc, item) => {
    const base = item.service.price;
    const addon = (item.withAddon && item.service.addOns) ? item.service.addOns[0].price : 0;
    return acc + base + addon;
  }, 0);

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full">
          <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50">
            <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
              <ShoppingBag className="text-emerald-600" />
              {t('cart_title')}
            </h2>
            <button onClick={onClose} className="p-2 text-stone-400 hover:text-stone-900 transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-400">
                  <ShoppingBag size={40} />
                </div>
                <p className="text-stone-500 font-medium">{t('cart_empty')}</p>
                <button 
                  onClick={onClose}
                  className="mt-4 text-emerald-600 font-bold hover:underline"
                >
                  {t('nav_services')}
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item, idx) => {
                  const addon = (item.withAddon && item.service.addOns) ? item.service.addOns[0] : null;
                  const itemTotal = item.service.price + (addon?.price || 0);
                  
                  return (
                    <div key={idx} className="flex gap-4 group">
                      <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-stone-100">
                        <img src={item.service.imageUrl} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-stone-900 leading-tight">{item.service.name[language]}</h4>
                        {addon && (
                          <p className="text-xs text-emerald-600 font-medium mt-1">+ {addon.name[language]}</p>
                        )}
                        <p className="text-sm font-bold text-stone-900 mt-2">₹{itemTotal}</p>
                      </div>
                      <button 
                        onClick={() => onRemove(idx)}
                        className="text-stone-300 hover:text-red-500 transition-colors self-center p-2"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="px-6 py-8 border-t border-stone-100 bg-stone-50">
              <div className="flex justify-between items-center mb-6">
                <span className="text-stone-600 font-medium">{t('total')}:</span>
                <span className="text-2xl font-black text-stone-900 tracking-tight">₹{totalPrice}</span>
              </div>
              <button 
                onClick={onProceed}
                className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 active:scale-[0.98] transition-all shadow-lg shadow-emerald-200"
              >
                {t('checkout')}
              </button>
              <p className="text-center text-[10px] text-stone-400 mt-4 uppercase tracking-widest font-bold">
                WhatsApp மூலம் முன்பதிவு உறுதி செய்யப்படும்
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
