"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Bilingue2024() {
  const searchParams = useSearchParams();
  const student = searchParams.get("student")?.toString() ?? "";
  const photos = searchParams.get("photos")?.toString() ?? "";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{student}</h1>
      <Link href={photos}>Photos</Link>
      <Link href="https://www.instagram.com/adibnavac">@adibnavac</Link>
    </main>
  );
}
