import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_globalComponents/Navbar";
import Footer from "./_globalComponents/Footer";
import { Providers } from "./Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghanendra Purush Dhakal || Writer",
  description: "Chairperson of Ganeshman singh foundation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="flex min-h-screen flex-col items-center justify-betwee overflow-x-hidden p-0 pt-16 m-0 ">
            <Navbar />

            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
