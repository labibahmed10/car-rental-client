import { useState } from "react";

interface UseImageUploadResult {
  imageURL: string | null;
  loading: boolean;
  error: string | null;
  uploadImage: (file: File) => Promise<void>;
}

const useImageUpload = (): UseImageUploadResult => {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File | null): Promise<void> => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", file as File);

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_IMAGE_URL}?key=${import.meta.env.VITE_APP_IMAGE_API}`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      console.log(data);
      setImageURL(data.data.url);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { imageURL, loading, error, uploadImage };
};

export default useImageUpload;
