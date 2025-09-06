import { ProductFormData, productFormSchema, ProductFormProps, CategoryData,useEffect,zodResolver,useForm } from "@/features/Admin";

export const useProductForm = ({
    isOpen,
    onClose,
    editingProduct,
    onSubmit,
    onReset,
}: ProductFormProps) => {


  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      title: "",
      price: "",
      originalPrice: "",
      category: "",
      cat_prefix: "",
      subCategory: "",
      images: [],
      colors: [],
      sizes: [],
      desc: "",
      featured: false,
      new: false,
      sale: false,
      rating: "",
      reviews: "",
      stock: "",
      sold: "",
    },
  });

  const watchedColors = watch("colors");
  const watchedSizes = watch("sizes");
  const watchedImages = watch("images");

  useEffect(() => {
    if (editingProduct) {
      reset({
  title: editingProduct.title,
  price: editingProduct.price.toString(),
  originalPrice: editingProduct.originalPrice?.toString() || "",
  cat_prefix: editingProduct.cat_prefix,
  subCategory: editingProduct.subCategory ?? "",
  images: editingProduct.images,
  colors: editingProduct.colors,
  sizes: editingProduct.sizes,
  desc: editingProduct.desc,
  featured: editingProduct.featured ?? false,
  new: editingProduct.new ?? false,
  sale: editingProduct.sale ?? false,
  rating: editingProduct.rating?.toString() || "",
  reviews: editingProduct.reviews?.toString() || "",
  stock: editingProduct.stock?.toString() || "",
  sold: editingProduct.sold?.toString() || "",
      });
    } else {
      reset();
    }
  }, [editingProduct, reset]);

  const handleColorChange = (color: string, checked: boolean) => {
    const currentColors = watchedColors;
    if (checked) {
      setValue("colors", [...currentColors, color]);
    } else {
      setValue("colors", currentColors.filter((c) => c !== color));
    }
  };

  const handleSizeChange = (size: string, checked: boolean) => {
    const currentSizes = watchedSizes;
    if (checked) {
      setValue("sizes", [...currentSizes, size]);
    } else {
      setValue("sizes", currentSizes.filter((s) => s !== size));
    }
  };

  const handleCategoryChange = (categoryData: CategoryData, checked: boolean) => {
    if (checked) {
      setValue("category", categoryData.name);
      setValue("cat_prefix", categoryData.prefix);
    } else {
      setValue("category", "");
      setValue("cat_prefix", "");
    }
  };

  const handleImageUploadSuccess = (url: string) => {
    const currentImages = watchedImages;
    setValue("images", [...currentImages, url]);
  };

  const removeImage = (index: number) => {
    const currentImages = watchedImages;
    setValue("images", currentImages.filter((_, i) => i !== index));
  };

  const handleFormSubmit = (data: ProductFormData) => {
    if (onSubmit) onSubmit(data);
  };

  const handleReset = () => {
    reset();
    if (onReset) onReset();
  };



  return {
    control,
    handleSubmit,
    errors,
    isSubmitting,
    watchedColors,
    watchedSizes,
    watchedImages,
    handleColorChange,
    handleSizeChange,
    handleCategoryChange,
    handleImageUploadSuccess,
    editingProduct,
    removeImage,
    handleFormSubmit,
    handleReset,
    isOpen,
    onClose,
  };
};