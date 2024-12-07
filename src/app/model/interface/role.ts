export interface Irole {
  roleId: number;
  role: string;
}

export interface Idesignation {
  designationId: number;
  designation: string;
}

export interface APIResponseModel {
  message: string;
  result: boolean;
  data: any;
}