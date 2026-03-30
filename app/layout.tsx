import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krithika Nithyanandam",
  description:
    "Software engineer specialising in Generative AI systems and frontend platforms.",
  openGraph: {
    title: "Krithika Nithyanandam",
    description:
      "Software engineer specialising in Generative AI systems and frontend platforms.",
    url: "https://beingkrithika.com",
    siteName: "Krithika Nithyanandam",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${geistMono.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
