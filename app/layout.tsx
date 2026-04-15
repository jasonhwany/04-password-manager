import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "비밀번호 생성기 — MoneyStom7",
  description: "안전하고 강력한 비밀번호를 무료로 생성. 길이·문자 조합 맞춤 설정 가능.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}</body></html>;
}
