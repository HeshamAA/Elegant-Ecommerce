
import {  useUploadImage,UploadImageProps ,Button, Card, CardContent, Badge, Upload, X, ImageIcon, CheckCircle, AlertCircle, IKContext, IKImage, IKUpload} from "@/features/Admin";


const UploadImage = ({ className = "", onUploadSuccess, onUploadError }: UploadImageProps) => {
  const { uploadedImages, isUploading, handleUploadSuccess, handleUploadError, handleUploadStart, removeImage } = useUploadImage(onUploadSuccess, onUploadError);
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Upload Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">
                Upload Product Images
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Upload high-quality images for your product. Supported formats:
                JPG, PNG, WebP
              </p>

              <IKContext
                publicKey="public_8lfCmbbas4JnvRtCIuYtUXJSB/I="
                urlEndpoint="https://ik.imagekit.io/heshamwilshere"
              >
                <div className="flex items-center gap-3">
                  <IKUpload
                    fileName="product_image.jpg"
                    folder="/products"
                    useUniqueFileName={true}
                    onSuccess={handleUploadSuccess}
                    onError={handleUploadError}
                    onUploadStart={handleUploadStart}
                    className="hidden"
                    id="image-upload"
                    tags={["product", "ecommerce"]}
                    responseFields={["tags"]}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      document.getElementById("image-upload")?.click()
                    }
                    disabled={isUploading}
                    className="flex items-center gap-2"
                  >
                    {isUploading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4" />
                        Choose Image
                      </>
                    )}
                  </Button>

                  {isUploading && (
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      Processing...
                    </Badge>
                  )}
                </div>
              </IKContext>
            </div>

            <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-lg">
              <ImageIcon className="w-8 h-8 text-muted-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Images Grid */}
      {uploadedImages.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium">
              Uploaded Images ({uploadedImages.length})
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {uploadedImages.map((imageUrl, index) => (
              <Card key={index} className="relative group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <IKContext
                      publicKey="public_8lfCmbbas4JnvRtCIuYtUXJSB/I="
                      urlEndpoint="https://ik.imagekit.io/heshamwilshere"
                    >
                      <IKImage
                        src={imageUrl}
                        alt={`Product image ${index + 1}`}
                        className="w-full h-full object-cover"
                        lqip={{ active: true, quality: 20, blur: 10 }}
                      />
                    </IKContext>

                    {/* Remove Button */}
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 p-0"
                      onClick={() => removeImage(index)}
                    >
                      <X className="w-3 h-3" />
                    </Button>

                    {/* Image Number Badge */}
                    <Badge
                      variant="secondary"
                      className="absolute bottom-2 left-2 text-xs"
                    >
                      {index + 1}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Upload Tips */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-blue-900">Upload Tips</h4>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>• Use high-resolution images (minimum 800x600px)</li>
                <li>• Supported formats: JPG, PNG, WebP</li>
                <li>• Maximum file size: 10MB per image</li>
                <li>• Images will be automatically optimized for web</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadImage;
