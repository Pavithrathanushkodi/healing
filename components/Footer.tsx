import React from 'react';
import { HeartPulse, Phone, Instagram, Clock, MapPin, Hospital } from 'lucide-react';
import { WHATSAPP_NUMBER, INSTAGRAM_URL, TIMING_EN, TIMING_TA } from '../constants';

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
              <span className="text-xl font-bold text-white tracking-tight">
                Healing Care
              </span>
            </div>

            <p className="text-stone-400 leading-relaxed">
              Healing Care – Your destination for physical and mental wellness.
              We provide clinic-based and direct home treatments across Tamil Nadu.
              <br /><br />
              ஹீலிங் கேர் – உடல் மற்றும் மன ஆரோக்கியத்திற்கான முழுமையான சிகிச்சை மையம்.
              தமிழ்நாடு முழுவதும் கிளினிக் மற்றும் நேரடி சிகிச்சை சேவை.
            </p>

            <div className="flex gap-4 mt-6">
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
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
              Contact Us
            </h3>

            <a
              href={`tel:+91${WHATSAPP_NUMBER}`}
              className="flex items-center gap-3 hover:text-emerald-500 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center">
                <Phone size={16} className="text-emerald-500" />
              </div>
              <span className="font-medium">+91 {WHATSAPP_NUMBER}</span>
            </a>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
              Working Hours
            </h3>

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

          {/* Clinics & Service Areas */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Clinics & Service Areas
            </h3>

            {/* Tamil Nadu Highlight */}
            <div className="mb-5 px-4 py-3 rounded-xl bg-emerald-600/15 border border-emerald-600/30">
              <p className="text-emerald-400 font-bold text-sm">
                Tamil Nadu – Direct Treatment Available
              </p>
              <p className="text-xs text-stone-400 mt-1">
                தமிழ்நாடு முழுவதும் நேரடி சிகிச்சை வழங்கப்படுகிறது
              </p>
            </div>

            {/* Clinic Locations */}
            <ul className="space-y-3">
              {['Tenkasi', 'Tirunelveli', 'Thoothukudi', 'Chennai'].map(city => (
                <li key={city} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center">
                    <Hospital size={16} className="text-emerald-500" />
                  </div>
                  <span className="font-medium">Clinic Available – {city}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Healing Care Wellness. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
