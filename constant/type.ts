import { StaticImageData } from "next/image";

export interface ItemCardProps {
  id: number;
  imageUrl: string | StaticImageData;
  name: string;
  price: number;
  discountPrice?: number;
  discountPercent: number;
  className?: string;
}

export interface ItemProps {
  id: number;
  name: string;
  price: number;
  discount_price: number;
  percent_discount: number;
  image: string | StaticImageData;
}

export interface ItemSectionProps {
  data: ItemCardProps[];
  itemPerPage?: number;
  className?: string;
  largeItemId?: number[];
  isNew?: boolean;
}

export interface SubscriptionCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  recommend?: boolean;
  buttonClassName?: string;
}

export interface GameProps {
  developer: string;
  discountPercent: number;
  discountPrice: number;
  gameId: string;
  genre: string;
  id: number;
  imageUrl: string;
  link: string;
  name: string;
  physical: boolean;
  price: number;
  releaseDate: string;
}

export interface ItemGridSectionProps{
  data: ItemCardProps[];
}

export interface FilterProps{
  name:string;
  value:string;
}

export interface FilterMenuProps{
  title: string;
  content: FilterProps[];
  className?: string;
}
