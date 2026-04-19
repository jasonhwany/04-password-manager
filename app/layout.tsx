import Script from "next/script"
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "비밀번호 생성기 — MoneyStom7",
  description: "안전하고 강력한 비밀번호를 무료로 생성. 길이·문자 조합 맞춤 설정 가능.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8414331859152952"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body></html>;
}
