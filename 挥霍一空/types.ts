export interface Item {
  id: string;
  name: string;
  price: number;
  icon: string;
  category: 'food' | 'tech' | 'transport' | 'real-estate' | 'luxury' | 'power' | 'abstract' | 'future';
}

export interface CartItem {
  item: Item;
  quantity: number;
}

export interface AdvisorResponse {
  commentary: string;
  rating: number; // 1-10 score of absurdity
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: (cart: Record<string, number>) => boolean;
}

export interface NewsHeadline {
  id: string;
  text: string;
  itemId?: string; // If linked to a specific item purchase
}

export interface BadLuckEvent {
  id: string;
  title: string;
  description: string;
  amount: number;
  icon: string;
}