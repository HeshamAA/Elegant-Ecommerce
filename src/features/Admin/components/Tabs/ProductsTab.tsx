import { useState,ProductForm, useAdmin, ProductFormData, Product,Card, CardContent, Button, Badge, Trash2, Edit, Plus,Modal,Image } from "@/features/Admin";



const ProductsTab = () => {
  const {
    productsArray,
    handleDeleteProduct,
    handleEditProduct,
    isAddingProduct,
    setIsAddingProduct,
    editingProduct,
    handleSubmitProduct,
    resetForm,
    page,
    handlePageChange,
    totalPages,
  } = useAdmin();

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);

  const handleProductFormSubmit = async (data: ProductFormData) => {
    const product: Product = {
      id: editingProduct?.id ?? Date.now() + Math.floor(Math.random() * 1000),
      title: data.title ?? "", // required
      price: data.price ? Number(data.price) : 0, // required
      originalPrice: data.originalPrice ? Number(data.originalPrice) : undefined,
      cat_prefix: data.cat_prefix ?? "", // required
      subCategory: data.subCategory ?? null,
      images: data.images ?? [], // required
      colors: data.colors ?? [], // required
      sizes: data.sizes ?? [], // required
      desc: data.desc ?? "", // required
      featured: data.featured ?? false,
      new: data.new ?? false,
      sale: data.sale ?? false,
      rating: data.rating ? Number(data.rating) : 0, // required
      reviews: data.reviews ? Number(data.reviews) : 0, // required
      stock: data.stock ? Number(data.stock) : 0,
      sold: data.sold ? Number(data.sold) : 0,
    };
    await handleSubmitProduct(product);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Products Management</h2>
        <Button onClick={() => setIsAddingProduct(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Product Form Dialog */}
      <ProductForm
        isOpen={isAddingProduct}
        onClose={() => setIsAddingProduct(false)}
        editingProduct={editingProduct}
        onSubmit={handleProductFormSubmit}
        onReset={resetForm}
      />

      {/* Products List */}
      <div className="grid gap-4">
        {productsArray?.data?.map((product: Product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                {product.images.length > 0 && (
                  <Image
                    path={product.images[0]}
                    alt={product.title}
                    size="small"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                )}
                <div className="flex-1">
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {product.desc}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                    <div className="flex gap-1">
                      {product.colors.map((color: string) => (
                        <Badge
                          key={color}
                          variant="outline"
                          className="text-xs"
                        >
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditProduct(product)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => {
                      setProductToDelete(product.id);
                      setDeleteModalOpen(true);
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <Button
          variant="outline"
          size="sm"
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Prev
        </Button>
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            variant={i + 1 === page ? "default" : "outline"}
            size="sm"
          >
            {i + 1}
          </Button>
        ))}
        <Button
          variant="outline"
          size="sm"
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </Button>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <Modal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          title="Confirm Delete"
          message="Are you sure you want to delete this product?"
          confirmText="Delete"
          cancelText="Cancel"
          onConfirm={() => {
            if (productToDelete !== null) {
              handleDeleteProduct(productToDelete);
            }
            setDeleteModalOpen(false);
            setProductToDelete(null);
          }}
          variant="destructive"
        />
      )}
    </div>
  );
};

export default ProductsTab;
