import { UploadFile } from "antd";
import { RcFile } from "antd/es/upload";
import { toast } from "sonner";

const uploadImage = async (file: UploadFile[]): Promise<string | undefined> => {
  const formData = new FormData();

  formData.append("file", file[0].originFileObj as RcFile);
  formData.append("upload_preset", import.meta.env.VITE_APP_CLOUDINARY_PRESET_NAME);

  try {
    const response = await fetch(`${import.meta.env.VITE_APP_IMAGE_URL}`, {
      method: "POST",
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error("Failed to upload image");
    }
    const data = await response.json();
    return data?.secure_url;
  } 
  catch (err) {
    if (err instanceof Error) {
      toast.error(err.message);
    }
  }
};

export default uploadImage;
