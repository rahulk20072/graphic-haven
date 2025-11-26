export interface Project {
  id: number;
  title: string;
  category: 'Branding' | 'Web Design' | 'Illustration' | 'Print';
  imageUrl: string;
  description: string;
  client?: string;
  year?: string;
  technologies?: string[];
  clientBrief?: string;
  liveUrl?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  priceStart: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}