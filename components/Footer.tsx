
import React from 'react';
import { HeartPulse, Phone, Mail, MapPin } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-600 p-1.5 rounded-lg text-white">
                <HeartPulse size={24} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Healing Care</span>
            </div>
            <p className="text-stone-400 mb-6 leading-relaxed">
              ஹீலிங் கேர் - உங்களின் உடல் மற்றும் மன ஆரோக்கியத்திற்கான சிறந்த இடம். பாரம்பரிய மற்றும் நவீன சிகிச்சை முறைகள்.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">தொடர்புக்கு</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500" />
                <span>+91 {WHATSAPP_NUMBER}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500" />
                <span>contact@healingcare.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-emerald-500" />
                <span>Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">வேலை நேரம்</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>திங்கள் - சனி:</span>
                <span className="text-white">09:00 AM - 08:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>ஞாயிறு:</span>
                <span className="text-white">10:00 AM - 04:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-16 pt-8 text-center text-sm text-stone-500">
          <p>© {new Date().getFullYear()} Healing Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
