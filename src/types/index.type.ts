/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MenuProps } from "antd";
import { UploadFile } from "antd/lib";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { ICarData } from "./car.types";

export interface IResponseType<T> {
  data: T;
  statusCode: number;
  success: boolean;
  message: string;
  token?: string;
}

export interface IDashboardLayout {
  items: MenuProps["items"];
}

export interface IProtectedRoute {
  allowedRole: "user" | "admin";
  children: ReactNode;
}

export interface IButtonProps {
  text: string;
  disable?: boolean;
  icon?: ReactNode;
  extraStyle?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (param?: unknown) => void;
  size?: "large" | "middle" | "small";
  loading?: boolean;
}

export interface IImageUpload {
  fileList: UploadFile[];
  setFileList: (fileList: UploadFile[]) => void;
  imageUrl: string | undefined;
}

export interface IFormProps {
  form: any;
  onFinish: (values: any) => void;
  loading: boolean;
  record?: ICarData;
  fileList: UploadFile[];
  setFileList: (fileList: UploadFile[]) => void;
}

export interface IModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
