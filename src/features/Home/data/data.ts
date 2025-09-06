import { Heart, Star, ShoppingBag, Truck } from "@/features/Home";
import type { Blog, Metric, Outfit, Brand, Category } from "@/features/Home";

export const blogs: Blog[] = [
  {
    id: 1,
    title: "How to Style Winter Jackets",
    excerpt:
      "Get ready for winter with these stylish jacket combinations that'll keep you warm and trendy.",
    image:
      "https://images.unsplash.com/photo-1548624313-0396284age1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "May 1, 2025",
    category: "Fashion Tips",
  },
  {
    id: 2,
    title: "10 Must-Have Accessories for Summer",
    excerpt:
      "Complete your summer wardrobe with these essential accessories that elevate any outfit.",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "April 28, 2025",
    category: "Accessories",
  },
  {
    id: 3,
    title: "Sustainable Fashion: What You Need to Know",
    excerpt:
      "Learn how to make environmentally conscious choices with your wardrobe without sacrificing style.",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "April 23, 2025",
    category: "Sustainability",
  },
];
export const metrics: Metric[] = [
  {
    id: 1,
    icon: Heart,
    value: "10k+",
    label: "Happy Customers",
  },
  {
    id: 2,
    icon: ShoppingBag,
    value: "500+",
    label: "Fashion Styles",
  },
  {
    id: 3,
    icon: Star,
    value: "4.9",
    label: "Average Rating",
  },
  {
    id: 4,
    icon: Truck,
    value: "24h",
    label: "Fast Delivery",
  },
];
export const outfits: Outfit[] = [
  {
    id: 1,
    title: "Casual Friday",
    description: "Perfect relaxed outfit for the end of work week",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    items: [
      {
        id: 101,
        name: "Relaxed Fit Jeans",
        price: 49.99,
        image:
          "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        color: "Blue",
        size: "M",
      },
      {
        id: 102,
        name: "Cotton T-Shirt",
        price: 24.99,
        image:
          "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        color: "White",
        size: "M",
      },
      {
        id: 103,
        name: "Canvas Sneakers",
        price: 39.99,
        image:
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        color: "White",
        size: "42",
      },
    ],
  },
  {
    id: 2,
    title: "Business Casual",
    description: "Look sharp and professional while staying comfortable",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    items: [
      {
        id: 201,
        name: "Slim Fit Chinos",
        price: 59.99,
        image:
          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        color: "Beige",
        size: "32",
      },
      {
        id: 202,
        name: "Oxford Shirt",
        price: 45.99,
        image:
          "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        color: "Light Blue",
        size: "M",
      },
      {
        id: 203,
        name: "Leather Loafers",
        price: 89.99,
        image:
          "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        color: "Brown",
        size: "43",
      },
    ],
  },
  {
    id: 3,
    title: "Weekend Style",
    description: "Effortlessly cool weekend outfit for any occasion",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    items: [
      {
        id: 301,
        name: "Denim Jacket",
        price: 79.99,
        image:
          "https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        color: "Blue",
        size: "L",
      },
      {
        id: 302,
        name: "Graphic T-Shirt",
        price: 29.99,
        image:
          "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        color: "Black",
        size: "M",
      },
      {
        id: 303,
        name: "Slim Jeans",
        price: 54.99,
        image:
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        color: "Dark Blue",
        size: "32",
      },
    ],
  },
];
export const brands: Brand[] = [
  {
    id: 1,
    name: "Nordgreen",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 2,
    name: "Urbanista",
    logo: "https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 3,
    name: "Timberland",
    logo: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 4,
    name: "Nike",
    logo: "https://images.unsplash.com/photo-1605105897845-3ba6094d3148?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 5,
    name: "Puma",
    logo: "https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 6,
    name: "Adidas",
    logo: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 7,
    name: "Calvin Klein",
    logo: "https://images.unsplash.com/photo-1619533394727-57d522857f89?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 8,
    name: "Tommy Hilfiger",
    logo: "https://images.unsplash.com/photo-1614179689702-66d0fef4c9fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
  },
];
export const categories: Category[] = [
  {
    id: "men",
    name: "Men",
    imagePath: "/home/menCategory.jpg",
    description: "Modern essentials for the everyday man",
  },
  {
    id: "women",
    name: "Women",
    imagePath: "/home/womenCategory.jpg",
    description: "Contemporary styles for every occasion",
  },
  {
    id: "kids",
    name: "Kids",
    imagePath: "/home/kidsCategory.jpg",
    description: "Fun and practical clothing for children",
  },
  {
    id: "sports",
    name: "Sports",
    imagePath: "/home/sportsCategory.jpg",
    description: "Performance wear for active lifestyles",
  },
];
