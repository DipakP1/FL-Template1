"use client";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../../globals.css";
const inter = Inter({ subsets: ["latin"] });
import { SnackbarProvider } from "notistack";
import { useState, useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <html lang="en">
      <body className={`dark:bg-black ${inter.className}`}>
        <SnackbarProvider dense />
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          {loading ? <>Loading....</> : children}
        </ThemeProvider>
      </body>
    </html>
  );
}
