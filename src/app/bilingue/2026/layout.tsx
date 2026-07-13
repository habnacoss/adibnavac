import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Bilingüe 2026",
  description: "Bilingüe 2026 - ADIB Navac",
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
