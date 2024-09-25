import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import { UploadFile } from "antd/lib";
import { useState } from "react";
import { toast } from "sonner";
import { IImageUpload } from "../../types/index.type";

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export default function ImageUpload({ fileList, setFileList, imageUrl }: IImageUpload) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const onChange = ({ fileList }: { fileList: UploadFile[] }) => {
    const isLt2M = (fileList[0] as RcFile)?.size / 1024 / 1024 >= 2;

    if (isLt2M) {
      toast.error("Image size must be smaller than 2MB !");
      return;
    }

    setFileList(fileList);
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1));
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Upload action={imageUrl} listType="picture-card" fileList={fileList} onChange={onChange} onPreview={handlePreview} beforeUpload={() => false}>
        {fileList.length < 1 && imageUrl ? (
          <img src={imageUrl} alt="avatar" className="w-full h-full object-fill" />
        ) : fileList.length > 0 ? null : (
          uploadButton
        )}
      </Upload>

      {/* image previewing modal */}
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={() => setPreviewOpen(false)}>
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
}
