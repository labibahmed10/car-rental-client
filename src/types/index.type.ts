export interface IResponseType<T> {
  data: T;
  statusCode: number;
  success: boolean;
  message: string;
  token: string;
}
