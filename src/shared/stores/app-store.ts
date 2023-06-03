import { API } from "@/shared/api";
import { makeAutoObservable } from "mobx";
import { CONSTANTS, LangTypes } from "@/shared/utils/constants";
import UtilsENVConfig from "@/shared/utils/utils-env-config";

class AppStore {
  isInit: boolean = false;
  currentLang: LangTypes = LangTypes.EN;

  constructor() {
    makeAutoObservable(this);
  }

  async initApp() {
    console.log("ENV =", UtilsENVConfig.getProcessEnv());
    API.setHost(CONSTANTS.API_V1);

    API.setHeadersGetter(async () => {
      return {
        "x-current-lang": this.getCurrentLang(),
      };
    });

    this.currentLang =
      (window.localStorage.getItem(CONSTANTS.CURRENT_LANG_NAME_LS) as LangTypes) ?? CONSTANTS.CURRENT_LANG_DEFAULT;

    this.isInit = true;
  }

  getCurrentLang() {
    return this.currentLang;
  }

  toggleLang() {
    if (this.isRuLang()) {
      this.setCurrentLang(LangTypes.EN);
    } else {
      this.setCurrentLang(LangTypes.RU);
    }
  }

  isRuLang() {
    return this.currentLang === LangTypes.RU;
  }

  setCurrentLang(lang: LangTypes) {
    window.localStorage.setItem(CONSTANTS.CURRENT_LANG_NAME_LS, lang);
    this.currentLang = lang;
  }
}

export const appStore = new AppStore();
