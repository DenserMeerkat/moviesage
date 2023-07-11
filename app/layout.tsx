import "./globals.css";
import type { Metadata } from "next";
import RootComponet from "../components/Wrapper";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieSage",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootComponet>{children}</RootComponet>
      </body>
    </html>
  );
}
