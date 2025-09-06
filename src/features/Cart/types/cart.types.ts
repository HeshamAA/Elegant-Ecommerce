import { Product } from "@/features/Cart";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

export type productIds = {
  id: number;
  color: string;
  quantity: number;
};

export interface CartState {
  productIds: productIds[];
  isOpen: boolean;
  productFullInfo: Product[];
}
