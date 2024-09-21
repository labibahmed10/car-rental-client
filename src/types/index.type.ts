import type { MenuProps } from "antd";
import { ReactNode } from "react";

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
