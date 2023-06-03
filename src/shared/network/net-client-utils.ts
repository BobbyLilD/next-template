import { AxiosResponse } from 'axios';
import { INetResult } from './net-client-types';

//Дефолтные заголовки для отправки файлов на сервер
export const MEDIA_HEADERS = {
  'Content-Type': 'multipart/form-data',
};

export const OCTET_STREAM_HEADERS = {
  'Content-Type': 'application/octet-stream',
};

export function handleAxiosSuccess<RESPONSE_TYPE = any, REQUEST_TYPE = any>(
  response: AxiosResponse<RESPONSE_TYPE, REQUEST_TYPE>,
): INetResult<RESPONSE_TYPE> {
  return {
    isSuccess: true,
    code: response.status,
    data: response.data,
  };
}

//обработчик ошибок
export function handleAxiosError(error: any): INetResult {
  const result: INetResult = {
    isSuccess: false,
    code: 500,
    message: 'Произошла неизвестная ошибка',
    errorData: null,
  };

  //Если там в ошибке нихрена нет -> сразу отдаем данные об этом
  if (error.response) {
    //Достаем код
    if (typeof error.response.status === 'number') {
      result.code = error.response.status;
    }
    //Достаем сообщение + данные
    if (error.response.data) {
      //Если в ошибке есть сообщение
      if (typeof error.response.data.message === 'string') {
        result.message = error.response.data.message;
      }

      //Если в ошибке есть errorData
      if (error.response.data.errorData) {
        result.errorData = error.response.data.errorData;
      }
    }
  }

  return result;
}
