import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Bureche PROMO 2026",
  description: "Bureche 2026 - ADIB Navac",
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
