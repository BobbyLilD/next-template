export const defaultLocale = "ru";
export let locales = ["ru", "en"] as const;
export type ValidLocale = (typeof locales)[number];

type PathnameLocale = {
  pathname: string;
  locale?: never;
};
type ISOLocale = {
  pathname?: never;
  locale: string;
};

type LocaleSource = PathnameLocale | ISOLocale;

export const getLocalePartsFrom = ({ pathname, locale }: LocaleSource) => {
  if (locale) {
    return {
      lang: locale,
    };
  } else {
    const pathnameParts = pathname!.toLowerCase().split("/");
    return { lang: pathnameParts[1] };
  }
};

const dictionaries: Record<ValidLocale, any> = {
  en: () =>
    import("@/shared/i18n/locales/en.json").then((module) => module.default),
  ru: () =>
    import("@/shared/i18n/locales/ru.json").then((module) => module.default),
} as const;

export const getTranslator = async (locale: ValidLocale) => {
  const dictionary = await dictionaries[locale]();
  return (key: string, params?: { [key: string]: string | number }) => {
    let translation = key
      .split(".")
      .reduce((obj, key) => obj && obj[key], dictionary);
    if (!translation) {
      return key;
    }
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation!.replace(`{{ ${key} }}`, String(value));
      });
    }
    return translation;
  };
};