import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { roboto } from "./fonts";

export const metadata: Metadata = {
  title: "HOMI",
  description: "Find your new home & homi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={`antialiased`}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
