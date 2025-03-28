import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface BannerItemProps {
  id: number,
  name: string,
  image: string | StaticImageData
}

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
  userId?:number
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
  releaseDate: Date;
  requirements: RequirementProps[];
  screenshots: ScreenshotsProps[];
}

export interface RequirementProps {
  id: number;
  gameId: number;
  type: string;
  os?: string | null;
  processor?: string | null;
  memory?: string | null;
  graphics?: string | null;
  directX?: string | null;
  network?: string | null;
  storage?: string | null;
}

export interface ScreenshotsProps {
  id: number;
  gameId: number;
  image: string;
}

export interface ItemGridSectionProps {
  data: ItemCardProps[];
}

export interface FilterProps {
  name: string;
  value: string;
}

export interface FilterMenuProps {
  title: string;
  content: FilterProps[];
  className?: string;
}

export interface GameInfoProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export interface UserLoginProps {
  email: string;
  password: string;
}

export interface UserSession {
  user: {
    id: number,
    name: string;
    email: string;
    image: string | StaticImageData;
  };
  expires: string;
}

export interface UserProps {
  id: number;
  name?: string;
  email: string;
  password: string;
  createAt: Date;
  plan: string;
  image: string;
}

export interface CartItemProps {
  id: number
  cartId: number,
  gameId: number
  game: GameProps,
  physical: boolean
}

export interface CartProps {
  id: number,
  createDate: Date,
  completedDate? :Date,
  status: String,
  promocode? :string,
  deliveryLocation? :string,
  userId: number,
  cartitem: CartItemProps[]
}

export interface CartDataProps {
  id: number,
  userId: number,
  amount: string,
  deliveryLocation?: string,
  promocode?: string,
  numberOfItem?: number,
  newPlan?: string,
  type: string,
  digitalGameIds: number[]
}
