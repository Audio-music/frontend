import { Providers } from "@/Contexts";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metalverse",
  description: "A nova essência da música",
  icons: { shortcut: "../assents/image/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
