import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import CartProvider from "@/provider/cardPRovider";
import ToastProvider from "@/provider/toastProvider";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "E-Commerce Website",
  description:
    "Welcome to our E-Commerce Store! A modern, responsive, and user-friendly platform built using ReactJS, Next.js, and Node.js, ensuring a seamless shopping experience for all customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <ToastProvider />
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
