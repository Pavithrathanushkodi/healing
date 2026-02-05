
import { Service, Translation } from './types';

export const WHATSAPP_NUMBER = "8190942026";
export const INSTAGRAM_URL = "https://www.instagram.com/call____me____yaro?igsh=Zm9mbTk2dHFndDJz";
export const LOCATION_NAME_EN = "Tenkasi Post Office, Tamil Nadu";
export const LOCATION_NAME_TA = "தென்காசி போஸ்ட் ஆபீஸ், தமிழ்நாடு";
export const TIMING_EN = "Mon - Sun: 9:00 AM - 10:00 PM";
export const TIMING_TA = "திங்கள் - ஞாயிறு: காலை 9:00 - இரவு 10:00";

export const UI_STRINGS: Translation = {
  nav_services: { en: "Our Services", ta: "சேவைகள்" },
  nav_about: { en: "About Us", ta: "எங்களைப் பற்றி" },
  nav_contact: { en: "Contact", ta: "தொடர்பு கொள்ள" },
  hero_title: { 
    en: "Healing Care: Traditional Wellness & Massage", 
    ta: "ஹீலிங் கேர்: பாரம்பரிய நலம் மற்றும் மசாஜ்" 
  },
  hero_subtitle: { 
    en: "Restore your health with our specialized Varma and traditional therapies.", 
    ta: "எமது சிறப்பு வர்ம மற்றும் பாரம்பரிய சிகிச்சைகள் மூலம் உங்கள் ஆரோக்கியத்தை மேம்படுத்துங்கள்." 
  },
  hero_cta: { en: "Book on WhatsApp", ta: "வாட்ஸ்அப்பில் பதிவு செய்க" },
  services_title: { en: "Service Menu", ta: "சிகிச்சை விவரங்கள்" },
  price_prefix: { en: "Price: ₹", ta: "கட்டணம்: ₹" },
  get_quote: { en: "Book Now", ta: "இப்போதே பதிவு செய்க" },
  footer_address: { en: "Healing Care Wellness, Tenkasi", ta: "ஹீலிங் கேர் வெல்னஸ், தென்காசி" },
  footer_rights: { en: "All rights reserved.", ta: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை." },
  whatsapp_message: { en: "Hi! I want to book: ", ta: "வணக்கம்! நான் இந்த சேவையை பதிவு செய்ய விரும்புகிறேன்: " },
  add_to_cart: { en: "Add to Cart", ta: "கூடையில் சேர்" },
  added: { en: "Added", ta: "சேர்க்கப்பட்டது" },
  cart_title: { en: "Your Cart", ta: "உங்கள் கூடை" },
  cart_empty: { en: "Your cart is empty", ta: "கூடை காலியாக உள்ளது" },
  checkout: { en: "Proceed to Appointment", ta: "முன்பதிவு செய்ய" },
  total: { en: "Total Amount", ta: "மொத்த தொகை" },
  name_label: { en: "Your Name", ta: "உங்கள் பெயர்" },
  phone_label: { en: "Phone Number", ta: "தொலைபேசி எண்" },
  place_label: { en: "Your Place", ta: "இடம் / ஊர்" },
  date_label: { en: "Date", ta: "தேதி" },
  time_label: { en: "Time", ta: "நேரம்" },
  submit_whatsapp: { en: "Confirm on WhatsApp", ta: "WhatsApp-ல் சமர்ப்பிக்க" },
  back: { en: "Back", ta: "பின்னால் செல்ல" },
  appointment_title: { en: "Appointment Details", ta: "முன்பதிவு விவரங்கள்" },
  select_option: { en: "Select Option", ta: "தேர்ந்தெடு" },
  cancel: { en: "Cancel", ta: "ரத்து செய்" },
  choose_type: { en: "Choose Type", ta: "வகையைத் தேர்ந்தெடு" },
  basic_service: { en: "Basic Service", ta: "அடிப்படை சேவை" }
};

export const SERVICES: Service[] = [
  {
    id: "thai-massage",
    name: { en: "Basic Thai Massage Strokes", ta: "பேசிக் தாய் மசாஜ் ஸ்ட்ரோக்ஸ்" },
    description: { en: "Traditional Thai rhythmic stretching and pressure therapy.", ta: "உடல் அழுத்த புள்ளிகளை தூண்டும் பாரம்பரிய தாய் மசாஜ்." },
    price: 999,
    imageUrl: "/images/Thaai-massage.jpeg",
    category: "massage"
  },
  {
    id: "oil-massage-base",
    name: { en: "Oil Massage", ta: "எண்ணெய் மசாஜ்" },
    description: {
      en: "A relaxing full-body oil massage that helps reduce stress, improve blood circulation, and relieve body pain.",
      ta: "முழு உடலுக்கும் செய்யப்படும் எண்ணெய் மசாஜ். இது உடல் வலிகளை குறைத்து, இரத்த ஓட்டத்தை மேம்படுத்தி, மன அழுத்தத்தை தணிக்க உதவுகிறது."
    },
    price: 1300,
    imageUrl: "/images/oil.jpg",
    category: "massage"
  },
  {
    id: "varma-thadaval-1",
    name: { en: "Vali Nivarana Varma Thadaval", ta: "வலி நிவாரண வர்ம தடவல்" },
    description: {
      en: "A focused Varma therapy using Murivu Oil to relieve joint pain and chronic body aches.",
      ta: "முரிவு எண்ணெய் பயன்படுத்தி செய்யப்படும் வர்ம தடவல் சிகிச்சை. மூட்டு வலி மற்றும் நீண்ட நாள் வலிகளை குறைக்க உதவுகிறது."
    },
    price: 1600,
    duration: "1.30 Hours",
    imageUrl: "https://images.unsplash.com/photo-1544161515-4af6b1d40af1?q=80&w=1000&auto=format&fit=crop",
    category: "massage",
    addOns: [{ name: { en: "Head Massage (Mudiyor Koonthal Oil)", ta: "தலை மசாஜ் (முதியோர் கூந்தல் எண்ணெய்)" }, price: 200 }]
  },
  {
    id: "araku-massage",
    name: { en: "Araku Santhanathi Thailam", ta: "அரக்கு சந்தனாதி தைல மசாஜ்" },
    description: {
      en: "A cooling oil massage that reduces body heat and refreshes the body.",
      ta: "உடல் சூட்டை தணிக்கும் குளிர்ச்சியான எண்ணெய் மசாஜ். உடலுக்கு புத்துணர்ச்சி அளிக்கிறது."
    },
    price: 2000,
    duration: "2 Hours",
    imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop",
    category: "massage",
    addOns: [{ name: { en: "Head Massage (Mudiyor Koonthal Oil)", ta: "தலை மசாஜ் (முதியோர் கூந்தல் எண்ணெய்)" }, price: 200 }]
  },
  {
    id: "normal-oil-thadaval",
    name: { en: "Normal Oil Mullu Udal Thadaval", ta: "சாதாரண எண்ணெய் உடல் மசாஜ்" },
    description: {
      en: "A gentle full-body oil massage for relaxation and daily body care.",
      ta: "சாதாரண எண்ணெய் கொண்டு செய்யப்படும் மென்மையான முழு உடல் மசாஜ்."
    },
    price: 1400,
    duration: "1 Hour",
    imageUrl: "/images/normal oil massage.jpg",
    category: "massage",
    addOns: [{ name: { en: "Head Massage (Mudiyor Koonthal Oil)", ta: "தலை மசாஜ் (முதியோர் கூந்தல் எண்ணெய்)" }, price: 200 }]
  },
  {
    id: "cream-massage",
    name: { en: "Cream Massage", ta: "கிரீம் மசாஜ்" },
    description: { 
      en: "Soothing cream massage for skin softening and muscle relaxation. Available in Basic and Advance types.", 
      ta: "தோல் மென்மை மற்றும் தசை தளர்வுக்காக செய்யப்படும் இதமான மசாஜ். அடிப்படை மற்றும் அட்வான்ஸ் வகைகள் உண்டு." 
    },
    price: 1800,
    imageUrl: "/images/cream massage.jpg",
    category: "massage",
    addOns: [{ 
      name: { en: "Advance Cream Massage", ta: "அட்வான்ஸ் கிரீம் மசாஜ்" }, 
      price: 700 
    }]
  },
  {
    id: "shirodhara",
    name: { en: "Head Massage Shirodhara", ta: "சிரோதாரா (தலை மசாஜ்)" },
    description: {
      en: "A calming therapy where warm oil is gently poured on the forehead.",
      ta: "நெற்றியில் எண்ணெய் ஊற்றி செய்யப்படும் சிரோதாரா சிகிச்சை."
    },
    price: 888,
    imageUrl: "/images/head-massage.jpg",
    category: "treatment"
  },
  {
    id: "kaal-pisangal",
    name: { en: "Foot Reflexology", ta: "பாத அழுத்த புள்ளி சிகிச்சை" },
    description: { en: "Pressure therapy focused on feet to stimulate full body wellness.", ta: "உடல் முழுவதுடன் தொடர்புடைய பாத அழுத்த புள்ளிகளை தூண்டும் சிகிச்சை மசாஜ்." },
    price: 500,
    imageUrl: "/images/foot refloxology.jpg",
    category: "treatment"
  },
  {
    id: "stream-bath",
    name: { en: "Stream Bath", ta: "ஸ்டீம் பாத்" },
    description: { en: "Herbal steam therapy for body detoxification.", ta: "மூலிகை நீராவி மூலம் உடலை சுத்திகரிக்கும் முறை." },
    price: 280,
    imageUrl: "/images/stream-path.jpeg",
    category: "other"
  },
  {
    id: "cupping",
    name: { en: "Cupping Therapy", ta: "கப்பிங் தெரபி" },
    description: { en: "Traditional suction therapy for blood flow.", ta: "இரத்த ஓட்டத்தை தூண்டும் கப்பிங் சிகிச்சை." },
    price: 999,
    imageUrl: "/images/cupping.jpg",
    category: "treatment"
  },
  {
    id: "varma-thokkanam-2500",
    name: { en: "Varma Thokkanam (2500)", ta: "வர்ம தொக்கணம் (2500)" },
    description: { en: "Controlled movements to correct nerve and muscle alignment.", ta: "நரம்பு மற்றும் தசை சீரமைப்பை சரி செய்து, உடலில் தேங்கிய சக்தியை விடுவிக்க இந்த முறை உதவுகிறது." },
    price: 2500,
    imageUrl: "/images/varma thokkanam.png",
    category: "treatment"
  },
  {
    id: "varma-thokkanam-3500",
    name: { en: "Varma Thokkanam (3500)", ta: "வர்ம தொக்கணம் (3500)" },
    description: { en: "Advanced deep pressure techniques for long-term pain relief.", ta: "ஆழமான வர்ம புள்ளிகளில் மேம்பட்ட அழுத்த முறைகள் பயன்படுத்தி சீர் செய்யும் சிகிச்சை." },
    price: 3500,
    imageUrl: "/images/varma thokkanam.png",
    category: "treatment"
  },
  {
    id: "kizhi-therapy",
    name: { en: "Kizhi Therapy", ta: "கிழி சிகிச்சை" },
    description: {
      en: "Traditional herbal bundle fomentation (Othadam) for pain and stiffness.",
      ta: "சூடான மூலிகை பொட்டலங்களால் செய்யப்படும் பாரம்பரிய ஒத்தடம் சிகிச்சை."
    },
    price: 66,
    imageUrl: "/images/kizhli.jpg",
    category: "treatment"
  },
  {
    id: "nethra-tharpanam",
    name: { en: "Nethra Tharpanam", ta: "நேத்ர தர்ப்பணம்" },
    description: {
      en: "Eye therapy where warm ghee is retained around eyes to relieve strain.",
      ta: "கண்களைச் சுற்றி சூடான நெய் ஊற்றி செய்யப்படும் பாரம்பரிய கண் சிகிச்சை."
    },
    price: 1000,
    imageUrl: "/images/nethra thappanam.png",
    category: "treatment"
  },
  {
    id: "janu-basti",
    name: { en: "Janu Basti", ta: "ஜாணு பஸ்தி" },
    description: { 
      en: "Ayurvedic treatment for knee osteoarthritis and joint health.", 
      ta: "முட்டு வலி 및 மூட்டு ஆரோக்கியத்திற்கான ஆயுர்வேத சிகிச்சை."
    },
    price: 500,
    imageUrl: "/images/janu-basti-treatment.png",
    category: "treatment"
  },
  {
    id: "kati-basti",
    name: { en: "Kati Basti", ta: "கடி பஸ்தி" },
    description: { 
      en: "Lower back therapy using warm herbal oil to reduce stiffness.", 
      ta: "கீழ்புற முதுகுக்கான ஆயுர்வேத சிகிச்சை. வலி மற்றும் இறுக்கத்தை குறைக்கும்."
    },
    price: 500,
    imageUrl: "/images/kati basti.jpg",
    category: "treatment"
  },
  {
    id: "dandruff-treatment",
    name: { en: "Dandruff Treatment", ta: "பொடுகு சிகிச்சை" },
    description: { en: "Herbal powder–based scalp cleansing treatment.", ta: "மூலிகை பொடி பயன்படுத்தி செய்யப்படும் பொடுகு சிகிச்சை." },
    price: 250,
    imageUrl: "/images/dandruff.png",
    category: "hair"
  },
  {
    id: "hair-care",
    name: { en: "Hair Care Treatment", ta: "கூந்தல் பராமரிப்பு சிகிச்சை" },
    description: {
      en: "Scalp nourishment with natural herbs to control hair fall.",
      ta: "முடி உதிர்வை கட்டுப்படுத்தி, முடி வேர்களை வலுப்படுத்தும் சிகிச்சை."
    },
    price: 400,
    imageUrl: "/images/haircare.png",
    category: "hair"
  },
  {
    id: "facial",
    name: { en: "Facial", ta: "முக பராமரிப்பு சிகிச்சை" },
    description: {
      en: "Natural herbal cleansing for glowing skin and freshness.",
      ta: "முகத்திற்கு பளபளப்பு மற்றும் புத்துணர்ச்சி அளிக்கும் இயற்கை சிகிச்சை."
    },
    price: 500,
    imageUrl: "/images/facial.png",
    category: "treatment"
  },
  {
    id: "combo-2800",
    name: { en: "Relaxation Combo", ta: "ரிலாக்சேஷன் காம்போ" },
    description: { en: "Oil Massage + Shirodhara + Foot Reflexology.", ta: "எண்ணெய் மசாஜ் + சிரோதாரா + பாத ரிஃப்ளெக்சாலஜி." },
    price: 2800,
    imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1000&auto=format&fit=crop",
    category: "combo",
  },
  {
    id: "combo-3800",
    name: { en: "Advanced Healing Combo", ta: "மேம்பட்ட ஹீலிங் காம்போ" },
    description: { en: "Oil Massage, Shirodhara, Foot Reflexology, Thai Massage & Chiropractic.", ta: "முழு உடல் மசாஜ், சிரோதாரா, பாத ரிஃப்ளெக்சாலஜி, தாய் மசாஜ் & கைரோபிராக்டிக்." },
    price: 3800,
    imageUrl: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop",
    category: "combo",
  }
];
