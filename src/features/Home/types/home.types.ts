import type { Product } from "@/features/Product/types/products.types";
import type { LucideIcon } from "lucide-react";

export interface Brand {
  id: number;
  name: string;
  logo: string;
}

export interface HomeState {
  bestSellers: Product[];
  newArrivals: Product[];
  loading: boolean;
  error: string | null;
}

export interface Metric {
  id: number;
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export interface OutfitItem {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
}

export interface Outfit {
  id: number;
  title: string;
  description: string;
  image: string;
  items: OutfitItem[];
}

export interface CountdownTimerProps {
  targetDate: Date;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Category {
  id: string;
  name: string;
  imagePath: string;
  description: string;
}

export interface CategoryTabProps {
  id: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

export interface CategoryCardProps {
  id: string;
  name: string;
  imagePath: string;
  description: string;
}
