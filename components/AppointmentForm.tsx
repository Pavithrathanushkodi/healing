
import React from 'react';
import { AppointmentDetails, Language } from '../types';
import { Calendar, User, MapPin, Clock, ArrowLeft, Phone } from 'lucide-react';
import { UI_STRINGS } from '../constants';

interface AppointmentFormProps {
  onSubmit: (details: AppointmentDetails) => void;
  onBack: () => void;
  language: Language;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onSubmit, onBack, language }) => {
  const t = (key: string) => UI_STRINGS[key]?.[language] || key;
  const [formData, setFormData] = React.useState<AppointmentDetails>({
    name: '',
    phone: '',
    place: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.place || !formData.date || !formData.time) {
      alert(language === 'ta' ? "தயவுசெய்து அனைத்து விவரங்களையும் நிரப்பவும்" : "Please fill all details");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-stone-500 hover:text-stone-900 mb-8 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">{t('back')}</span>
      </button>

      <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-stone-900 mb-2">{t('appointment_title')}</h2>
          <p className="text-stone-500">{language === 'ta' ? 'சந்திப்புக்கான உங்கள் விவரங்களை உள்ளிடவும்' : 'Enter your details for the appointment'}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-stone-700 flex items-center gap-2">
              <User size={16} className="text-emerald-600" />
              {t('name_label')}
            </label>
            <input 
              type="text" 
              required
              placeholder={language === 'ta' ? 'பெயர்' : 'Full Name'}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-stone-700 flex items-center gap-2">
              <Phone size={16} className="text-emerald-600" />
              {t('phone_label')}
            </label>
            <input 
              type="tel" 
              required
              placeholder={language === 'ta' ? 'தொலைபேசி எண்' : 'Mobile Number'}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-stone-700 flex items-center gap-2">
              <MapPin size={16} className="text-emerald-600" />
              {t('place_label')}
            </label>
            <input 
              type="text" 
              required
              placeholder={language === 'ta' ? 'இடம் / ஊர்' : 'Your City / Town'}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              value={formData.place}
              onChange={(e) => setFormData({...formData, place: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-stone-700 flex items-center gap-2">
                <Calendar size={16} className="text-emerald-600" />
                {t('date_label')}
              </label>
              <input 
                type="date" 
                required
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-stone-700 flex items-center gap-2">
                <Clock size={16} className="text-emerald-600" />
                {t('time_label')}
              </label>
              <input 
                type="time" 
                required
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 active:scale-[0.98] transition-all shadow-lg shadow-emerald-200 mt-4"
          >
            {t('submit_whatsapp')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
