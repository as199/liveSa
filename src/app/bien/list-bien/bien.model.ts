export interface Bien {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  state: number;
  sale: boolean;
  createAt: Date;
}
