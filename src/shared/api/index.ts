import { NetClient } from "@/shared/network/net-client";

export const API = new NetClient();

export interface ResMessageOk {
  message: string;
}

export interface ResUploadFileList {
  fileList: ResUploadFile[];
}

export interface ResUploadFile {
  id: string;
  extension: string;
  size: number;
  originalName: string;
  type: string;
  url: string;
}