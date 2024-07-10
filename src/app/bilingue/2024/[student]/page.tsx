"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Bilingue({ params }: { params: { student: string } }) {
    const photos = useSearchParams().get("photos") ?? "";
    const { student } = params;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>{student}</h1>
            <Link href={photos}>Photos</Link>
            <Link href="https://www.instagram.com/adibnavac">@adibnavac</Link>
        </main>
    );
}