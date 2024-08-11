import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueMontrealFont = localFont({
  src: [{
    weight: "300",
    style: "normal",
    path: 'fonts/PPNeueMontreal-Book.woff2',
  }, {
    weight: "400",
    style: "normal",
    path: 'fonts/PPNeueMontreal-Regular.woff2',
  }],
  variable: '--font-neue-montreal',
})

export const metadata: Metadata = {
  title: "Андрей",
  description: "пишу...",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${neueMontrealFont.className} ${neueMontrealFont.variable}`}>{children}</body>
    </html>
  );
}
