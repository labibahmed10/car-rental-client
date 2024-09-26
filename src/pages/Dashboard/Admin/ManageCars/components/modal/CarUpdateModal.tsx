/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, UploadFile } from "antd";
import CarForm from "../form/CarForm";
import { useEffect, useState } from "react";
import { useUpdateCarMutation } from "../../../../../../redux/feature/car/carApi";
import { ICarData, IUpdateProps } from "../../../../../../types/car.types";
import uploadImage from "../../../../../../utils/uploadImage";
import { toast } from "sonner";
import MyButton from "../../../../../../components/common/MyButton";
import { FaRegEdit } from "react-icons/fa";
import CarCommonModal from "../../../../../../components/modal/CarCommonModal";

const CarUpdateModal: React.FC<IUpdateProps> = ({ record }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateCar, { isLoading, isSuccess, isError, error }] = useUpdateCarMutation();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onFinish = async (values: Partial<ICarData>) => {
    const imgUrl = fileList.length > 0 && (await uploadImage(fileList));
    if (imgUrl) {
      const data = {
        ...values,
        image: imgUrl,
        pricePerHour: Number(values.pricePerHour),
      };

      await updateCar({
        carId: record._id as string,
        data,
      });
    } else {
      values.image = record.image;
      await updateCar({
        carId: record._id as string,
        data: {
          ...values,
          pricePerHour: Number(values.pricePerHour),
        },
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
      setIsModalOpen(false);
      toast.success("Car Updated Succefully");
    }

    if (isError) {
      if ((error as any)?.status === 400) {
        toast.error(<span>{`${(error as any)?.data?.errorMessages[0]?.path}-${(error as any)?.data?.errorMessages[0]?.message}`}</span>);
      }
      toast.error((error as any)?.data?.message);
    }
  }, [error, form, isError, isSuccess]);

  return (
    <>
      <MyButton text="Edit" size="middle" icon={<FaRegEdit />} extraStyle="text-sm" onClick={() => setIsModalOpen(true)} />
      <CarCommonModal title="Update the Car" isModalOpen={isModalOpen} onCancel={() => setIsModalOpen(false)}>
        <CarForm fileList={fileList} setFileList={setFileList} onFinish={onFinish} loading={isLoading} form={form} record={record} />
      </CarCommonModal>
    </>
  );
};

export default CarUpdateModal;
