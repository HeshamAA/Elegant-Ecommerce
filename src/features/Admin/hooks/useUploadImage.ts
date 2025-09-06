
import { useState,showToast,  } from "@/features/Admin";

export const useUploadImage = (onUploadSuccess: (url: string) => void, onUploadError: (error: string) => void) => {
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const [isUploading, setIsUploading] = useState(false);
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleUploadSuccess = (res: any) => {
      setIsUploading(false);
      const newImageUrl = res.url;
      setUploadedImages((prev) => [...prev, newImageUrl]);
  
      if (onUploadSuccess) {
        onUploadSuccess(newImageUrl);
      }
  
      showToast.success("Photo uploaded successfully");
    };
  
    const handleUploadError = (err: unknown) => {
      setIsUploading(false);
      const errorMessage =
        err instanceof Error ? err.message : "Failed to upload image";
  
      if (onUploadError) {
        onUploadError(errorMessage);
      }
  
      showToast.error("An error occurred while uploading the photo");
    };
  
    const handleUploadStart = () => {
      setIsUploading(true);
    };
  
    const removeImage = (index: number) => {
      setUploadedImages((prev) => prev.filter((_, i) => i !== index));
    };

    return {
        uploadedImages,
        isUploading,
        handleUploadSuccess,
        handleUploadError,
        handleUploadStart,
        removeImage,
    }
  
};