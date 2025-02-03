import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
