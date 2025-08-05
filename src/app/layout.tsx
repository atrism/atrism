import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atrism - AI TRiSMコンサルティングサービス",
  description: "企業のAI TRiSM（Trust, Risk, Security, Management）を支援するコンサルティングサービス。AIの信頼性、リスク管理、セキュリティ、ガバナンスを包括的にサポートします。",
  keywords: "AI TRiSM, コンサルティング, リスク管理, セキュリティ, ガバナンス, AI信頼性",
  authors: [{ name: "Atrism" }],
  openGraph: {
    title: "Atrism - AI TRiSMコンサルティングサービス",
    description: "企業のAI TRiSMを支援するコンサルティングサービス",
    url: "https://atrism.com",
    siteName: "Atrism",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atrism - AI TRiSMコンサルティングサービス",
    description: "企業のAI TRiSMを支援するコンサルティングサービス",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
