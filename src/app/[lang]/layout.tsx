import LangSwitch from "@/shared/i18n/switch"

type RootLayoutProps = {
    children: any,
    params: {
        lang: string
    }
}

export default function RootLayout({children, params}: RootLayoutProps) {
  return (
    <html>
      <head lang={params.lang}/>
      <body>
        <LangSwitch lang={params.lang}/>
        {children}
      </body>
    </html>
  )
}