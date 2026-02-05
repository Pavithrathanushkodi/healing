
import React from 'react';
import { HeartPulse, Phone, Instagram, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_NUMBER, INSTAGRAM_URL, TIMING_EN, TIMING_TA, LOCATION_NAME_EN, LOCATION_NAME_TA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-600 p-1.5 rounded-lg text-white">
                <HeartPulse size={24} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Healing Care</span>
            </div>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Healing Care - Your destination for physical and mental wellness. We combine traditional therapies with modern care to restore your balance.
              <br/><br/>
              ஹீலிங் கேர் - உங்களின் உடல் மற்றும் மன ஆரோக்கியத்திற்கான சிறந்த இடம்.
            </p>
            <div className="flex gap-4">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-emerald-500 hover:bg-emerald-600 hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`tel:+91${WHATSAPP_NUMBER}`} 
                  className="flex items-center gap-3 hover:text-emerald-500 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center group-hover:bg-emerald-600/20">
                    <Phone size={16} className="text-emerald-500" />
                  </div>
                  <span className="font-medium">+91 {WHATSAPP_NUMBER}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center mt-0.5">
                  <MapPin size={16} className="text-emerald-500" />
                </div>
                <div>
                  <span className="block font-medium text-white">{LOCATION_NAME_EN}</span>
                  <span className="text-xs text-stone-500">{LOCATION_NAME_TA}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Timing Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Working Hours</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center mt-0.5">
                  <Clock size={16} className="text-emerald-500" />
                </div>
                <div>
                  <p className="font-bold text-white">{TIMING_EN}</p>
                  <p className="text-xs text-stone-500 mt-1">{TIMING_TA}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Location Map</h3>
            <div className="rounded-xl overflow-hidden border border-stone-800 h-48">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.4079450325124!2d77.311543675034!3d8.604724991440801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429f555555555%3A0xc0f8c8b4b7b7b7b7!2sPost%20Office%20Tenkasi!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Healing Care Wellness. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
