import { UserData } from './user-data.js';
import { City } from './city-type.js';
import { RentType } from './rent-type.enum.js';
import { GoodsType } from './goods-type.enum.js';

export type RentCardType = {
  id: string;
  title: string;
  description: string;
  date: Date;
  city: City;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: RentType;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: GoodsType[];
  host: UserData;
  password: string;
  comments: number;
  latitude: number;
  longitude: number;

}

export type RentCardsType = RentCardType[];
