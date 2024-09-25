import { UploadFile } from "antd";
import { RcFile } from "antd/es/upload";
import { toast } from "sonner";

const uploadImage = async (file: UploadFile[]): Promise<string | undefined> => {
  const formData = new FormData();
  formData.append("image", file[0].originFileObj as RcFile);

  try {
    const response = await fetch(`${import.meta.env.VITE_APP_IMAGE_URL}?key=${import.meta.env.VITE_APP_IMAGE_API}`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    return await data?.data?.url;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      toast.error(err.message);
    }
  }
};

export default uploadImage;
