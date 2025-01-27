import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SocketProvider } from "./components/SocketProvider";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";
import {ThemeProvider as NextThemesProvider} from "next-themes";

const inter = Inter({ subsets: ["latin"] });

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
      <SocketProvider>
        <body className={inter.className}>
          <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="light">
              {children}
            </NextThemesProvider>
          </NextUIProvider>
          <Toaster position="top-right" />
        </body>
      </SocketProvider>
    </html>
  );
}
