export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
  price: number;
  currency: string;
  interval?: 'month' | 'year';
}

export const stripeProducts: StripeProduct[] = [
  {
    id: 'prod_Qppwkha9rEDkYZ',
    priceId: 'price_1PyAGwDsVKlQLmLPcrTVRDUw',
    name: 'AI Chatbot',
    description: 'Maandelijkse Kosten',
    mode: 'subscription',
    price: 40.00,
    currency: 'eur',
    interval: 'month'
  }
];

export function getProductById(id: string): StripeProduct | undefined {
  return stripeProducts.find(product => product.id === id);
}

export function getProductByPriceId(priceId: string): StripeProduct | undefined {
  return stripeProducts.find(product => product.priceId === priceId);
}