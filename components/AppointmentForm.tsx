import React from 'react';
import { AppointmentDetails, Language } from '../types';
import { Calendar, User, MapPin, Clock, ArrowLeft, Phone, Home, Building2 } from 'lucide-react';
import { UI_STRINGS } from '../constants';

interface AppointmentFormProps {
  onSubmit: (details: AppointmentDetails & { appointmentType: 'home' | 'clinic' }) => void;
  onBack: () => void;
  language: Language;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onSubmit, onBack, language }) => {
  const t = (key: string) => UI_STRINGS[key]?.[language] || key;

  const [appointmentType, setAppointmentType] = React.useState<'home' | 'clinic'>('home');

  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    location: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert(language === 'ta'
        ? 'தயவுசெய்து அனைத்து விவரங்களையும் நிரப்பவும்'
        : 'Please fill all details'
      );
      return;
    }

    // Location required ONLY for home visit
    if (appointmentType === 'home' && !formData.location) {
      alert(language === 'ta'
        ? 'வீட்டு முகவரியை உள்ளிடவும்'
        : 'Please enter home location'
      );
      return;
    }

    onSubmit({ ...formData, appointmentType });
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-stone-500 hover:text-stone-900 mb-8"
      >
        <ArrowLeft size={20} />
        <span>{t('back')}</span>
      </button>

      <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100">

        {/* Appointment Type */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-center mb-4">
            {language === 'ta' ? 'சிகிச்சை வகையை தேர்ந்தெடுக்கவும்' : 'Choose Appointment Type'}
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setAppointmentType('home')}
              className={`p-4 rounded-xl border flex flex-col items-center gap-2 font-bold
                ${appointmentType === 'home'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-50 text-stone-700'
                }`}
            >
              <Home />
              {language === 'ta' ? 'வீட்டிற்கு வருகை' : 'Home Visit'}
            </button>

            <button
              type="button"
              onClick={() => setAppointmentType('clinic')}
              className={`p-4 rounded-xl border flex flex-col items-center gap-2 font-bold
                ${appointmentType === 'clinic'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-50 text-stone-700'
                }`}
            >
              <Building2 />
              {language === 'ta' ? 'கிளினிக்' : 'Clinic Visit'}
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="font-bold flex gap-2 items-center">
              <User size={16} /> {t('name_label')}
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border bg-stone-50"
              placeholder={language === 'ta' ? 'பெயர்' : 'Full Name'}
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="font-bold flex gap-2 items-center">
              <Phone size={16} /> {t('phone_label')}
            </label>
            <input
              type="tel"
              className="w-full px-4 py-3 rounded-xl border bg-stone-50"
              placeholder={language === 'ta' ? 'தொலைபேசி எண்' : 'Mobile Number'}
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          {/* Location ONLY for Home */}
          {appointmentType === 'home' && (
            <div>
              <label className="font-bold flex gap-2 items-center">
                <MapPin size={16} />
                {language === 'ta' ? 'வீட்டு முகவரி' : 'Home Location'}
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border bg-stone-50"
                placeholder={language === 'ta' ? 'முழு முகவரி' : 'Enter full address'}
                value={formData.location}
                onChange={e => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
          )}

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              className="px-4 py-3 rounded-xl border bg-stone-50"
              value={formData.date}
              onChange={e => setFormData({ ...formData, date: e.target.value })}
            />
            <input
              type="time"
              className="px-4 py-3 rounded-xl border bg-stone-50"
              value={formData.time}
              onChange={e => setFormData({ ...formData, time: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg"
          >
            {language === 'ta' ? 'WhatsApp மூலம் அனுப்பு' : 'Send via WhatsApp'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
