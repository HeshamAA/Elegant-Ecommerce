import {  useState,useSearchParams,Product, useGetProductsQuery, useAddProductMutation, useEditProductMutation, useDeleteProductMutation, useGetUsersQuery, useDeleteUserMutation, Params,showToast } from "@/features/Admin";


interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}


export const useAdmin = () => {
  // Products state
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get(Params.PAGE)) || 1;
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const limit = 10;

  // RTK Query hooks for products
  const [addProduct] = useAddProductMutation();
  const {
    data: productsData,
    isLoading: productsLoading,
    refetch: refetchProducts,
  } = useGetProductsQuery({ page, limit });

  const [editProduct] = useEditProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  // RTK Query hooks for users
  const {
    data: usersData,
    isLoading: usersLoading,
    refetch: refetchUsers,
    error,
  } = useGetUsersQuery(1); // argument is required by the slice, but not used
  const [deleteUser] = useDeleteUserMutation();

  const totalPages = productsData
    ? Math.ceil(productsData.totalCount / limit)
    : 1;

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams({ page: String(newPage) });
    }
  };
  // Delete user function (RTK Query)
  const handleDeleteUser = async (userId: string) => {
    // ...existing code...
    try {
      await deleteUser(Number(userId)).unwrap();
      showToast.success("The user has been deleted successfully.");
      refetchUsers();
    } catch (error) {
     
      showToast.error("Failed to delete user");
    }
  };

  // Delete product function (RTK Query)
  const handleDeleteProduct = async (productId: number) => {
    try {
      await deleteProduct(productId).unwrap();
      showToast.success("The product has been deleted successfully.");
      refetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      showToast.error("Failed to delete product");
    }
  };

  // Add product function (RTK Query)
  const handleAddProduct = async (productData: Product) => {
    try {
      const transformedData = {
        ...productData,
        price: productData.price.toString(),
        originalPrice: productData.originalPrice
          ? productData.originalPrice.toString()
          : null,
        rating: productData.rating ? productData.rating.toString() : 0,
        reviews: productData.reviews ? productData.reviews.toString() : 0,
        stock: productData.stock ? productData.stock.toString() : 0,
        sold: productData.sold ? productData.sold.toString() : 0,
        isFeatured: productData.featured,
        new: productData.new,
        isOnSale: productData.sale,
      };
      await addProduct(transformedData as unknown as Omit<Product, "id">).unwrap();
      showToast.success("The product has been added successfully.");
      refetchProducts();
      resetForm();
    } catch (error) {
      console.error("Error adding product:", error);
      showToast.error("Failed to add product");
    }
  };

  // Update product function (RTK Query)
  const handleUpdateProduct = async (
    productId: number,
    productData: Product
  ) => {
    try {
      const transformedData = {
        ...productData,
        price: productData.price.toString(),
        originalPrice: productData.originalPrice
          ? productData.originalPrice.toString()
          : null,
        rating: productData.rating ? productData.rating.toString() : 0,
        reviews: productData.reviews ? productData.reviews.toString() : 0,
        stock: productData.stock ? productData.stock.toString() : 0,
        sold: productData.sold ? productData.sold.toString() : 0,
        isFeatured: productData.featured,
        new: productData.new,
        isOnSale: productData.sale,
      };
      await editProduct({ id: productId, product: transformedData }).unwrap();
      showToast.success("The product has been updated successfully.");
      refetchProducts();
      resetForm();
    } catch (error) {
      console.error("Error updating product:", error);
      showToast.error("Failed to update product");
    }
  };

  // Handle form submission
  const handleSubmitProduct = async (productData: Product) => {
    if (editingProduct) {
      await handleUpdateProduct(editingProduct.id, productData);
    } else {
      await handleAddProduct(productData);
    }
  };

  // Reset form
  const resetForm = () => {
    setEditingProduct(null);
    setIsAddingProduct(false);
  };

  // Edit product
  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsAddingProduct(true);
  };

  return {
    users: usersData,
    productsArray: productsData,
    isAddingProduct,
    setIsAddingProduct,
    editingProduct,
    handleEditProduct,
    handleDeleteProduct,
    handleSubmitProduct,
    resetForm,
    page,
    searchParams,
    setSearchParams,
    totalPages,
    handlePageChange,
    handleDeleteUser,
    productsLoading,
    usersLoading,
    error,
  };
};
