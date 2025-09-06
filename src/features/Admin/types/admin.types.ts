import{ Product,ProductFormData} from "@/features/Admin";

export interface ProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  editingProduct: Product | null;
  onSubmit: (data: ProductFormData) => void;
  onReset: () => void;
}

export interface CategoryData {
  name: string;
  prefix: string;
}

export interface UploadImageProps {
  onUploadSuccess?: (url: string) => void;
  onUploadError?: (error: string) => void;
  className?: string;
}