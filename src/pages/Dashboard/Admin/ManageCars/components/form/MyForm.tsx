import { Form, Input, Select } from "antd";
import ImageUpload from "../../../../../../components/common/ImageUpload";
import MyButton from "../../../../../../components/common/MyButton";
import { IFormProps } from "../../../../../../types/index.type";

export default function MyForm({ fileList, setFileList, onFinish, form, record, loading }: IFormProps) {
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        name: record?.name,
        description: record?.description,
        color: record?.color,
        year: record?.year,
        type: record?.type,
        image: record?.image,
        model: record?.model,
        isElectric: record?.isElectric,
        features: record?.features,
        pricePerHour: Number(record?.pricePerHour),
        location: record?.location,
      }}
      className="space-y-3"
    >
      <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter car name" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description" rules={[{ required: true, message: "Please enter car description" }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Color" name="color" rules={[{ required: true, message: "Please enter car color" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Year" name="year" rules={[{ required: true, message: "Please enter car year" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Type" name="type" rules={[{ required: true, message: "Please select car type" }]}>
        <Select placeholder="search to select product category">
          <Select.Option value="SUV">SUV</Select.Option>
          <Select.Option value="Sedan">Sedan</Select.Option>
          <Select.Option value="Truck">Truck</Select.Option>
        </Select>
      </Form.Item>

      {/* image handle part */}
      <Form.Item label="Upload Image" name="image">
        <ImageUpload fileList={fileList} setFileList={setFileList} imageUrl={record?.image as string} />
      </Form.Item>

      <Form.Item label="Model" name="model" rules={[{ required: true, message: "Please enter car model" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Is Electric" name="isElectric" rules={[{ required: true, message: "Please select if car is electric" }]}>
        <Select>
          <Select.Option value={true}>Yes</Select.Option>
          <Select.Option value={false}>No</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Features" name="features" rules={[{ required: true, message: "Please select car features" }]}>
        <Select mode="multiple">
          <Select.Option value="All-Wheel Drive">All-Wheel Drive</Select.Option>
          <Select.Option value="Blind Spot Monitoring">Blind Spot Monitoring</Select.Option>
          <Select.Option value="Cargo Space">Cargo Space</Select.Option>
          <Select.Option value="Automatic Emergency Braking"> Automatic Emergency Braking</Select.Option>
          <Select.Option value="Adaptive Cruise Control">Adaptive Cruise Control</Select.Option>
          <Select.Option value="Lane Keeping Assist">Lane Keeping Assist</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Price Per Hour" name="pricePerHour" rules={[{ required: true, message: "Please enter car price per hour" }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item label="Location" name="location" rules={[{ required: true, message: "Please enter car location" }]}>
        <Input />
      </Form.Item>

      <Form.Item className="flex justify-end">
        <MyButton type="submit" size="large" text="Submit" loading={loading} />
      </Form.Item>
    </Form>
  );
}
