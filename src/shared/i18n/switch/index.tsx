'use client';
import {usePathname, useRouter} from 'next/navigation'

type LangSwitchProps = {
  lang: string;
};

export default function LangSwitch({lang}: LangSwitchProps) {
    const pathname = usePathname();
    const router = useRouter();
    const switchLocale = (locale: string) => {
        let pathSplit = pathname.split('/');
        pathSplit[1] = locale;
        let newPath = pathSplit.join('/')
        console.log(newPath)
        router.push(newPath)
    }

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={() => switchLocale('en')}>en</button>
        <button onClick={() => switchLocale('ru')}>ru</button>
      </div>
    </>
  );
}
