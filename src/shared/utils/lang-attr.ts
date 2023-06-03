import { LangTypes } from "./constants";

export default class LangAttributes {
  private static mapLangField(fieldName: string, el: any, currentLang: LangTypes) {
    return el[ `${fieldName}_${currentLang}` ] as string;
  }

  public static landDrawerTitle(fieldName: string, currentLang: LangTypes) {
    const langVars: any = {
      services_ru: "Услуги",
      services_en: "Services",
      projects_ru: "Проекты",
      projects_en: "Projects",
      team_ru: "Наша команда",
      team_en: "Team",
      contacts_ru: "Контакты",
      contacts_en: "Contacts",
    };

    return this.mapLangField(fieldName, langVars, currentLang);
  }

  public static langProjectStackListTitle(fieldName: string, currentLang: LangTypes) {
    const langVars: any = {
      title_ru: "Какие технологии мы использовали в проекте?",
      title_en: "What technologies did we use?",
    };

    return this.mapLangField(fieldName, langVars, currentLang);
  }

  public static langProjectStackListDescription(fieldName: string, currentLang: LangTypes) {
    const langVars: any = {
      description_ru: "Мы решили остановиться на следующих библиотеках и фреймворках:",
      description_en: "We decided to focus on the following libraries and frameworks:",
    };

    return this.mapLangField(fieldName, langVars, currentLang);
  }

  public static langProjectListMainProjectTitle(fieldName: string, currentLang: LangTypes) {
    const langVars: any = {
      title_ru: "Омкар",
      title_en: "Omcar",
    };

    return this.mapLangField(fieldName, langVars, currentLang);
  }

  public static langProjectsOurCases(fieldName: string, currentLang: LangTypes) {
    const langVars: any = {
      title_ru: "Наши кейсы",
      title_en: "Our other cases",
    };

    return this.mapLangField(fieldName, langVars, currentLang);
  }

  public static langProjectListEveryProject(fieldName: string, currentLang: LangTypes) {
    const langVars: any = {
      title_ru: "Каждый проект мы:",
      title_en: "Every project we have:",
      designed_ru: "Спроектировали",
      designed_en: "Designed",
      developed_ru: "Разработали",
      developed_en: "Developed",
      agreed_ru: "Согласовали",
      agreed_en: "Agreed",
      launched_ru: "Запустили",
      launched_en: "Launched",
    };

    return this.mapLangField(fieldName, langVars, currentLang);
  }

  public static langServicePageSubtitle(fieldName: string, currentLang: LangTypes) {
    const langVars: any = {
      subtitle_ru: "Наши услуги",
      subtitle_en: "Our services",
    };

    return this.mapLangField(fieldName, langVars, currentLang);
  }

  public static langServiceCardTitle(fieldName: string, currentLang: LangTypes) {
    const langVars: any = {
      title_ru: "Оставить заявку",
      title_en: "Submit application",
    };

    return this.mapLangField(fieldName, langVars, currentLang);
  }

  public static langForm(fieldName: string, currentLang: LangTypes) {
    const langVars: any = {
      smth_wrong_ru: "Что-то пошло не так",
      smth_wrong_en: "Something went wrong",

      claim_success_ru: "Заявка успешно отправлена",
      claim_success_en: "Claim created",

      field_email_ru: "Почта",
      field_email_en: "Email",
      field_email_error_ru: "Почта указана неверно",
      field_email_error_en: "Email is not valid",
      field_email_empty_ru: "Это поле не может быть пустым",
      field_email_empty_en: "This field can not be empty",

      field_name_ru: "Ваше имя",
      field_name_en: "Your name",

      field_message_ru: "Сообщение",
      field_message_en: "Message",

      btn_submit_ru: "Сообщение",
      btn_submit_en: "Message",
    };

    return this.mapLangField(fieldName, langVars, currentLang);
  }

  public static langContacts(fieldName: string, currentLang: LangTypes) {
    const langVars: any = {
      title_ru: "Свяжитесь с нами",
      title_en: "Contact us",

      description_ru: "Проконсультируем по интересующим вас вопросам",
      description_en: "We will advise on issues of interest to you",

      free_ru: "Это бесплатно :)",
      free_en: "It's free",
    };

    return this.mapLangField(fieldName, langVars, currentLang);
  }
  public static teamMember(fieldName: string, currentLang: LangTypes) {
    const langVars: any = {
      title_ru: "Какой стек я использую?",
      title_en: "What stack do I use?",
      subtitle_ru: "Для себя я выбрал следующие технологии:",
      subtitle_en: "I settled on the following technologies:",
      description_ru: "Почему я выбрал эти технологии? Мой опыт",
      description_en: "Why I chose these technologies? My experience",
    }

    return this.mapLangField(fieldName, langVars, currentLang);
  }
}
