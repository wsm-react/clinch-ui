import type { Metadata } from "next";
import { cn } from "@/lib/utils"
import { Inter as FontSans } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "clinch webapp",
  description: "clinch-ui in create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
