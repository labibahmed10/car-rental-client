/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, UploadFile } from "antd";
import CarForm from "../form/CarForm";
import { useEffect, useState } from "react";
import { IModalProps } from "../../../../../../types/index.type";
import { useCreateCarMutation } from "../../../../../../redux/feature/car/carApi";
import { ICarData } from "../../../../../../types/car.types";
import uploadImage from "../../../../../../utils/uploadImage";
import { toast } from "sonner";
import CarCommonModal from "../../../../../../components/modal/CarCommonModal";

const CarAddModal: React.FC<IModalProps> = ({ isModalOpen, setIsModalOpen }) => {
  const [addCar, { isLoading, isSuccess, isError, error }] = useCreateCarMutation();
  const [imgUpLoading, setImgUpLoading] = useState(false);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onFinish = async (values: ICarData) => {
    setImgUpLoading(true);
    const imgData = await uploadImage(fileList);

    if (imgData) {
      const data = {
        ...values,
        image: imgData,
        pricePerHour: Number(values.pricePerHour),
      };
      setImgUpLoading(false);
      await addCar(data);
    }
  };

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
    <CarCommonModal title="Add a New Car" isModalOpen={isModalOpen} onCancel={() => setIsModalOpen(false)}>
      <CarForm fileList={fileList} setFileList={setFileList} onFinish={onFinish} loading={isLoading || imgUpLoading} form={form} />
    </CarCommonModal>
  );
};

export default CarAddModal;
