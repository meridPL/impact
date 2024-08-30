import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Link from "next/link";
import style from "./layout.module.scss";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${style.body}`}>
        <nav className={style.nav}>
          <Link href={"/"}>Main</Link>
          <Link className={style.cart} href={"/cart"}>
            Cart
          </Link>
        </nav>
        <section className={style.section}>{children}</section>
      </body>
    </html>
  );
}
