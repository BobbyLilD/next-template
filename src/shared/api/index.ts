import { NetClient } from "@/shared/network/net-client";
import UtilsENVConfig from "../utils/utils-env-config";

export const API_V1_URL = `${
  UtilsENVConfig.getProcessEnv().NEXT_PUBLIC_BACK_URL
}/api/v1/`;

export const API = new NetClient().setHost(API_V1_URL);

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