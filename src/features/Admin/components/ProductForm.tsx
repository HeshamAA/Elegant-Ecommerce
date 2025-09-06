import {  UploadImage, availableCategories, availableColors, availableSizes, ProductFormProps ,useProductForm, Button, Input, Label, Textarea, Checkbox, Badge, Dialog, DialogContent, DialogHeader, DialogTitle, X, IKContext, IKImage, Controller } from "@/features/Admin";


const ProductForm: React.FC<ProductFormProps> = (props) => {
  const {
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
    removeImage,
    handleFormSubmit,
    handleReset,
    isOpen,
    onClose,
    editingProduct
  } = useProductForm(props);

  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {editingProduct ? "Edit Product" : "Add New Product"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Product Title *</Label>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="title"
                    placeholder="Enter product title"
                  />
                )}
              />
              {errors.title && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="price">Price *</Label>
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="price"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                  />
                )}
              />
              {errors.price && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="originalPrice">Original Price</Label>
              <Controller
                name="originalPrice"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="originalPrice"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                  />
                )}
              />
            </div>
            <div>
              <Label htmlFor="subCategory">Sub Category</Label>
              <Controller
                name="subCategory"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="subCategory"
                    placeholder="e.g., t-shirts, jeans"
                  />
                )}
              />
            </div>
          </div>

          {/* Categories */}
          <div>
            <Label className="text-base font-medium">Category *</Label>
            <div className="flex flex-wrap gap-4 mt-2">
              {availableCategories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={field.value === category.name}
                        onCheckedChange={(checked) =>
                          handleCategoryChange(category, !!checked)
                        }
                      />
                    )}
                  />
                  <Label
                    htmlFor={`category-${category.id}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {category.name}
                  </Label>
                </div>
              ))}
            </div>
            {errors.category && (
              <p className="text-sm text-red-500 mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Colors */}
          <div>
            <Label className="text-base font-medium">Available Colors *</Label>
            <div className="flex flex-wrap gap-4 mt-2">
              {availableColors.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox
                    id={`color-${color}`}
                    checked={watchedColors.includes(color)}
                    onCheckedChange={(checked) =>
                      handleColorChange(color, !!checked)
                    }
                  />
                  <Label
                    htmlFor={`color-${color}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {color}
                  </Label>
                </div>
              ))}
            </div>
            {watchedColors.length > 0 && (
              <div className="mt-2">
                <p className="text-sm text-muted-foreground">Selected:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {watchedColors.map((color) => (
                    <Badge key={color} variant="secondary">
                      {color}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {errors.colors && (
              <p className="text-sm text-red-500 mt-1">
                {errors.colors.message}
              </p>
            )}
          </div>

          {/* Sizes */}
          <div>
            <Label className="text-base font-medium">Available Sizes *</Label>
            <div className="flex flex-wrap gap-4 mt-2">
              {availableSizes.map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox
                    id={`size-${size}`}
                    checked={watchedSizes.includes(size)}
                    onCheckedChange={(checked) =>
                      handleSizeChange(size, !!checked)
                    }
                  />
                  <Label
                    htmlFor={`size-${size}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </div>
            {watchedSizes.length > 0 && (
              <div className="mt-2">
                <p className="text-sm text-muted-foreground">Selected:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {watchedSizes.map((size) => (
                    <Badge key={size} variant="secondary">
                      {size}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {errors.sizes && (
              <p className="text-sm text-red-500 mt-1">
                {errors.sizes.message}
              </p>
            )}
          </div>

          {/* Images */}
          <div>
            <Label className="text-base font-medium">Product Images</Label>
            <div className="space-y-4 mt-2">
              <UploadImage onUploadSuccess={handleImageUploadSuccess} />
              {watchedImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {watchedImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <IKContext
                        publicKey="public_8lfCmbbas4JnvRtCIuYtUXJSB/I="
                        urlEndpoint="https://ik.imagekit.io/heshamwilshere"
                      >
                        <IKImage
                          src={image}
                          alt={`Product ${index + 1}`}
                          className="w-full h-24 object-cover rounded-md"
                        />
                      </IKContext>
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeImage(index)}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="desc">Description</Label>
            <Controller
              name="desc"
              control={control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  id="desc"
                  placeholder="Enter product description"
                  rows={3}
                />
              )}
            />
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="rating">Rating</Label>
              <Controller
                name="rating"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="rating"
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    placeholder="4.5"
                  />
                )}
              />
            </div>
            <div>
              <Label htmlFor="reviews">Reviews Count</Label>
              <Controller
                name="reviews"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="reviews"
                    type="number"
                    placeholder="150"
                  />
                )}
              />
            </div>
            <div>
              <Label htmlFor="stock">Stock</Label>
              <Controller
                name="stock"
                control={control}
                render={({ field }) => (
                  <Input {...field} id="stock" type="number" placeholder="50" />
                )}
              />
            </div>
            <div>
              <Label htmlFor="sold">Sold</Label>
              <Controller
                name="sold"
                control={control}
                render={({ field }) => (
                  <Input {...field} id="sold" type="number" placeholder="20" />
                )}
              />
            </div>
          </div>

          {/* Flags */}
          <div className="flex gap-6">
            <div className="flex items-center space-x-2">
              <Controller
                name="featured"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="featured"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor="featured">Featured</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Controller
                name="new"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="new"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor="new">New</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Controller
                name="sale"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="sale"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor="sale">On Sale</Label>
            </div>
          </div>

          <div className="flex gap-2">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? "Saving..."
                : editingProduct
                ? "Update Product"
                : "Add Product"}
            </Button>
            <Button type="button" variant="outline" onClick={handleReset}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductForm;
