import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Pictopia",
  description: "AI-powered image transformation tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl="/"
      appearance={{
        variables: {
          colorPrimary: "#63E5E3",
          colorText: "#2dbcbe",
        },
      }}
    >
      <html lang="en">
        <body
          className={cn("font-IBMPlexSans antialiased", IBMPlexSans.variable)}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
