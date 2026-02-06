
export interface Translation {
  [key: string]: {
    en: string;
    ta: string;
  };
}

export interface LocalizedString {
  en: string;
  ta: string;
}

export interface Service {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  price: number;
  imageUrl: string;
  category: string;
  duration?: string;
  addOns?: { name: LocalizedString; price: number }[];
}

export interface CartItem {
  service: Service;
  withAddon?: boolean;
}

export interface AppointmentDetails {
  name: string;
  place: string;
  date: string;
  time: string;
  cart: CartItem[];
}
export type Language = 'en' | 'ta';
