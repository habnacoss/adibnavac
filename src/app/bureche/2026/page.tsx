"use client";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { findStudentByHash, VIDEO_1, VIDEO_2 } from "./data";
import "./styles.css";

function GooglePhotosIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.5" cy="8.5" r="4.5" fill="#EA4335" />
      <circle cx="15.5" cy="8.5" r="4.5" fill="#FBBC05" />
      <circle cx="8.5" cy="15.5" r="4.5" fill="#34A853" />
      <circle cx="15.5" cy="15.5" r="4.5" fill="#4285F4" />
    </svg>
  );
}

function DriveIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.28 3h11.44L22 12H2L6.28 3z" fill="#0F9D58" />
      <path d="M2 12l4 7h16l-4-7H2z" fill="#00832D" opacity="0.8" />
      <path d="M22 12l-4 7H6.28L2 12h20z" fill="#34A853" opacity="0.6" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Bureche2026() {
  const searchParams = useSearchParams();
  const hash = searchParams.get("h") ?? "";
  const student = hash ? findStudentByHash(hash) : undefined;
  const displayName = student?.name ?? "Bureche 2026";

  return (
    <main className="container">
      <div className="background-wrap">
        <Image
          src="/bureche/2026/images/background/background.png"
          height={1080}
          width={1920}
          className="background-image"
          alt="Background"
          priority
        />
        <h1 className="student-name-overlay">{displayName}</h1>

        <Image
          src="/bureche/2026/images/background/button 1.png"
          height={1080}
          width={1920}
          className="button-image button-image-1"
          alt="button"
          priority
          onClick={() => {
            if (student) {
              window.location.href = student.photosUrl;
            }
          }}
        />

        <Image
          src="/bureche/2026/images/background/button 2.png"
          height={1080}
          width={1920}
          className="button-image button-image-2"
          alt="button"
          priority
          onClick={() => {
            window.location.href = "https://drive.google.com/drive/folders/1DunRmlrixbvUV-GRBdJmfgVnHSpZEHGA?usp=drive_link";
          }}
        />

        <Image
          src="/bureche/2026/images/background/button 3.png"
          height={1080}
          width={1920}
          className="button-image button-image-3"
          alt="button"
          priority
          onClick={() => {
            window.location.href = "https://www.youtube.com/playlist?list=PLS4QHUGEu79Y";
          }}
        />
      </div>

    </main>
  );
}
