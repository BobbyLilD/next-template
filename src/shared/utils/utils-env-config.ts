class ProcessENV {
  //URL
  public NEXT_PUBLIC_BACK_URL: string = "https://...";

  public PORT: number = 3000; //Дефолтный порт
}

export default class UtilsENVConfig {
  static getProcessEnv(): ProcessENV {
    const env = new ProcessENV();
    env.NEXT_PUBLIC_BACK_URL = process.env.NEXT_PUBLIC_BACK_URL as string;
    return env;
  }
}
