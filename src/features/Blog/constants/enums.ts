import type { Category } from "@/features/Blog"

export const BLOG_CATEGORIES = {
  FashionTips: { id: "fashion-tips", name: "Fashion Tips" },
  Trends: { id: "trends", name: "Trends" },
  Sustainability: { id: "sustainability", name: "Sustainability" },
  Accessories: { id: "accessories", name: "Accessories" },
  Seasonal: { id: "seasonal", name: "Seasonal" },
  OutfitIdeas: { id: "outfit-ideas", name: "Outfit Ideas" },
} as const;


export const categories: Category[] = Object.values(BLOG_CATEGORIES);