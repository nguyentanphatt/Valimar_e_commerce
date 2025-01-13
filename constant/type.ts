import { StaticImageData } from "next/image";

export interface ItemCardProps {
  image: StaticImageData;
  name: string;
  isNew?: boolean;
  price: number;
  discount_price?: number;
  discount: number;
  className?: string;
}

export interface ItemProps {
    id: number;
    name: string;
    price: number;
    discount_price: number;
    percent_discount: number;
    image: StaticImageData;
  }

export interface ItemSectionProps {
    data: ItemProps[];
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
