import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

const BASE_URL = "https://pass.moneystom7.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "비밀번호 생성기 — MoneyStom7",
    template: "%s | MoneyStom7",
  },
  description: "강력하고 안전한 비밀번호를 무료로 생성. 특수문자·숫자·대소문자 조합. Free strong password generator. Create secure random passwords with custom length and character options.",
  keywords: ["비밀번호 생성기", "Password Generator", "무료", "온라인", "계산기", "password generator", "strong password", "secure password", "random password"],
  authors: [{ name: "MoneyStom7" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "비밀번호 생성기 — MoneyStom7",
    description: "강력하고 안전한 비밀번호를 무료로 생성. 특수문자·숫자·대소문자 조합.",
    url: BASE_URL,
    siteName: "MoneyStom7",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "비밀번호 생성기 — MoneyStom7",
    description: "강력하고 안전한 비밀번호를 무료로 생성. 특수문자·숫자·대소문자 조합.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8414331859152952"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
