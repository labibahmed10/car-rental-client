/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, Form, UploadFile } from "antd";
import MyForm from "../form/MyForm";
import { useEffect, useState } from "react";
import { IModalProps } from "../../../../../../types/index.type";
import { useCreateCarMutation } from "../../../../../../redux/feature/car/carApi";
import { ICarData } from "../../../../../../types/car.types";
import uploadImage from "../../../../../../utils/uploadImage";
import { toast } from "sonner";

const CarModal: React.FC<IModalProps> = ({ isModalOpen, setIsModalOpen }) => {
  const [addCar, { isLoading, isSuccess, isError, error }] = useCreateCarMutation();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onFinish = async (values: ICarData) => {
    console.log(values);
    const imgUrl = await uploadImage(fileList);
    console.log(imgUrl);

    if (imgUrl) {
      const data = {
        ...values,
        image: imgUrl,
        pricePerHour: Number(values.pricePerHour),
      };

      await addCar(data);
    }
  };

  console.log(error);

  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
      setIsModalOpen(false);
      toast.success("Car Created Succefully");
    }

    if (isError) {
      if ((error as any)?.status === 400) {
        toast.error(<span>{`${(error as any)?.data?.errorMessages[0]?.path}-${(error as any)?.data?.errorMessages[0]?.message}`}</span>);
      }
      toast.error((error as any)?.data?.message);
    }
  }, [error, isError, isSuccess]);

  return (
    <Modal
      centered
      title="Add New Car"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      className="max-w-[30rem] w-full max-h-[40rem] overflow-y-auto"
    >
      <MyForm fileList={fileList} setFileList={setFileList} onFinish={onFinish} loading={isLoading} form={form} />
    </Modal>
  );
};

export default CarModal;
