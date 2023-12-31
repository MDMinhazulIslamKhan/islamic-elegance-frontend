export interface IMeta {
  limit: number;
  page: number;
  count: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
  statusCode: number;
  message: string;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
