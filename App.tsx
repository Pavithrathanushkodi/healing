
import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Cart from './components/Cart';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import WelcomePopup from './components/WelcomePopup';
import { SERVICES, WHATSAPP_NUMBER, UI_STRINGS } from './constants';
import { CartItem, Service, AppointmentDetails, Language } from './types';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'form'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ta' : 'en');
  };

  const handlePopupChoice = (lang: Language) => {
    setLanguage(lang);
    setShowWelcomePopup(false);
  };

  const t = (key: string) => UI_STRINGS[key]?.[language] || key;

  const addToCart = useCallback((service: Service, withAddon: boolean) => {
    setCart(prev => {
      if (prev.some(item => item.service.id === service.id)) return prev;
      return [...prev, { service, withAddon }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  }, []);

  const handleBookNow = () => {
    setIsCartOpen(false);
    setCurrentView('form');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinalSubmit = (details: AppointmentDetails) => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const serviceList = cart.map(item => {
      let name = item.service.name[language];
      if (item.withAddon && item.service.addOns) {
        name += ` (+ ${item.service.addOns[0].name[language]})`;
      }
      return `• ${name}`;
    }).join('\n');

    const total = cart.reduce((acc, item) => acc + item.service.price + (item.withAddon && item.service.addOns ? item.service.addOns[0].price : 0), 0);
    
    // Clean client phone number for owner action links
    const cleanPhone = details.phone.replace(/[^0-9]/g, '');
    const clientPhoneFormatted = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;

    // Response messages for you (the owner) to send back to the client
    const acceptText = encodeURIComponent(`Hi ${details.name}, your Healing Care appointment for ${details.date} at ${details.time} is ACCEPTED ✅. See you soon!`);
    const changeText = encodeURIComponent(`Hi ${details.name}, regarding your appointment, I'd like to suggest a different time or date. When are you free? 🕒`);

    const message = `🌟 *NEW APPOINTMENT - HEALING CARE* 🌟
-----------------------------------
👤 *Name:* ${details.name}
📍 *Place:* ${details.place}
📞 *Phone:* ${details.phone}
📅 *Date:* ${details.date}
⏰ *Time:* ${details.time}

🛠 *Services:*
${serviceList}

💰 *Total Amount:* ₹${total}
-----------------------------------
🚀 *ACTION BUTTONS:*

✅ *1. ACCEPT (Send Acceptance Message):*
https://wa.me/${clientPhoneFormatted}?text=${acceptText}

🕒 *2. CHANGE (Suggest New Time):*
https://wa.me/${clientPhoneFormatted}?text=${changeText}

📞 *3. CALL (Click to Dial):*
tel:${details.phone}`;

    const encodedMessage = encodeURIComponent(message);
    const finalUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    
    // Robust redirection method: simulates a link click to bypass mobile browser restrictions
    try {
      const link = document.createElement('a');
      link.href = finalUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("WhatsApp redirect failed", error);
      window.location.href = finalUrl; // Fallback
    }
  };

  const categories = [
    { id: 'all', label: { en: 'All', ta: 'அனைத்தும்' } },
    { id: 'massage', label: { en: 'Massage', ta: 'மசாஜ்' } },
    { id: 'treatment', label: { en: 'Treatments', ta: 'சிகிச்சை' } },
    { id: 'hair', label: { en: 'Hair Care', ta: 'முடி பராமரிப்பு' } },
    { id: 'combo', label: { en: 'Combos', ta: 'காம்போ ஆஃபர்' } },
  ];

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      {showWelcomePopup && <WelcomePopup onChoose={handlePopupChoice} />}
      
      <Navbar 
        cartCount={cart.length} 
        language={language}
        onToggleLanguage={toggleLanguage}
        onCartClick={() => setIsCartOpen(true)}
        onHomeClick={() => { setCurrentView('home'); setIsCartOpen(false); }}
      />

      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero language={language} />
            
            <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mb-4 text-center">
                  {t('services_title')}
                </h2>
                <div className="w-20 h-1.5 bg-emerald-600 rounded-full mb-8"></div>
                
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all border ${
                        selectedCategory === cat.id 
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-200' 
                        : 'bg-white text-stone-600 border-stone-200 hover:border-emerald-300'
                      }`}
                    >
                      {cat.label[language]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {filteredServices.map(service => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                    language={language}
                    onAddToCart={addToCart}
                    isAdded={cart.some(item => item.service.id === service.id)}
                  />
                ))}
              </div>
            </section>
          </>
        ) : (
          <AppointmentForm 
            onSubmit={handleFinalSubmit}
            onBack={() => setCurrentView('home')}
            language={language}
          />
        )}
      </main>

      {isCartOpen && (
        <Cart 
          items={cart} 
          language={language}
          onRemove={removeFromCart} 
          onProceed={handleBookNow}
          onClose={() => setIsCartOpen(false)}
        />
      )}

      <Footer />

      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.875 1.215 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
