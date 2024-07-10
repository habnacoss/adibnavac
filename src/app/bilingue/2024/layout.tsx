import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Bilingue 2024",
  description: "Bilingue 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
}
