import type { Metadata } from "next";
import { GoodOld } from './fonts';
import { Creato } from "./fonts";
import { Augusta } from "./fonts";
import "./globals.css";
import 'aos/dist/aos.css'

export const metadata: Metadata = {
  title: "Jovic Programmer",
  description: "criatividade onde for",
  icons: {
  icon: 'images/vesquicio-icon.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${GoodOld.variable} ${Creato.variable} ${Augusta.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
