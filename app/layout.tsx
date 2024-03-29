
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const inter = Roboto({ subsets: ["latin"], variable: '--font-sans' , weight: ['400','500', '700', '900']});

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
      <body className={inter.className}>
        {/* <SessionProvider> */}
        {children}
        {/* </SessionProvider> */}
        </body>
    </html>
  );
}
