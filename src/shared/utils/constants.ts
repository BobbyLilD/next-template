//Все что касается авторизации

import UtilsENVConfig from "./utils-env-config";

export enum LangTypes {
  RU = 'ru',
  EN = 'en',
}

export class CONSTANTS {
  static API_V1: string = `${UtilsENVConfig.getProcessEnv().NEXT_PUBLIC_BACK_URL}/api/v1`;
  static CURRENT_LANG_DEFAULT: LangTypes = LangTypes.RU;
  static CURRENT_LANG_NAME_LS: string = 'currentLang';
  
  static EMAIL_REGEX: RegExp = /^$|^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}

export class UTILS {
  static isServer = () => typeof window == 'undefined';
}

export enum ENVTypes {
  DEV = 'dev',
  DEV_STAND = 'dev_stand',
  PROD = 'prod',
  PROD_STAND = 'prod_stand',
  TEST = 'test',
}
