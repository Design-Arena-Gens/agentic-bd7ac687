import "@/app/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Providers from "@/app/providers";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta"
});

export const metadata: Metadata = {
  title: "NimbusFlow — Modern SaaS Platform",
  description:
    "NimbusFlow helps product teams orchestrate workflows, automate insights, and deliver delightful customer experiences."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
