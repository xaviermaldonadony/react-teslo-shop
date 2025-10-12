import type { User } from './user.interface.ts';

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  slug: string;
  stock: number;
  sizes: Size[];
  gender: string;
  tags: string[];
  images: string[];
  user: User;
}

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
export type Gender = 'kid' | 'kid' | 'men' | 'women' | 'unisex';
