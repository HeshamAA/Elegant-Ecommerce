import { z } from "@/shared/libs";

export const productFormSchema = z.object({
  title: z.string().min(1, "Product title is required"),
  price: z
    .string()
    .min(1, "Price is required")
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
      message: "Price must be a positive number",
    }),
  originalPrice: z.string().optional(),
  category: z.string().min(1, "Category is required"),
  cat_prefix: z.string().min(1, "Category prefix is required"),
  subCategory: z.string().optional(),
  images: z.array(z.string()).default([]),
  colors: z.array(z.string()).min(1, "At least one color is required"),
  sizes: z.array(z.string()).min(1, "At least one size is required"),
  desc: z.string().optional(),
  featured: z.boolean().default(false),
  new: z.boolean().default(false),
  sale: z.boolean().default(false),
  rating: z.string().optional(),
  reviews: z.string().optional(),
  stock: z.string().optional(),
  sold: z.string().optional(),
});

export type ProductFormData = z.infer<typeof productFormSchema>;
