import { getTranslator } from "@/i18n";
import { getLocalePartsFrom, locales, ValidLocale } from "@/i18n";
import Link from "next/link";

export async function generateStaticParams() {
  return locales.map((locale) => getLocalePartsFrom({ locale }));
}

export default async function ExamplePage({
  params,
}: {
  params: { lang: string };
}) {
  const translate = await getTranslator(
    `${params.lang}` as ValidLocale // our middleware ensures this is valid
  );
  return (
    <div>
      <h1>{translate("welcome.title")}</h1>
      <Link href={`/${params.lang}/second-page`}>{translate('welcome.link')}</Link>
    </div>
  );
}
