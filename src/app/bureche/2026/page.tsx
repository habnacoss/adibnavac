"use client";
import Link from "next/link";
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

export default function bureche2026() {
  const searchParams = useSearchParams();
  const hash = searchParams.get("h") ?? "";
  const student = hash ? findStudentByHash(hash) : undefined;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative z-10">
      <div className="w-full max-w-2xl glass-card overflow-hidden animate-fadeInUp">

        {/* Hero photo — full width, fades at bottom */}
        {student && (
          <div className="hero-photo-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={student.personalPhotos}
              alt={`Foto de ${student.name}`}
              className="hero-photo-img"
            />
            <div className="hero-photo-fade" />
          </div>
        )}

        {/* Card body */}
        <div className={`px-6 md:px-8 pb-6 md:pb-8 ${student ? "-mt-16 relative z-10" : "pt-6 md:pt-8"}`}>

          {/* Header text */}
          <div className="text-center mb-6 animate-fadeInUp delay-100">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight name-glow mb-1">
              {student ? student.name : "Bilingüe 2026"}
            </h1>
            {student && (
              <p
                className="text-amber-200 text-base md:text-lg font-bold mt-1 tracking-wide uppercase opacity-90"
                style={{ fontFamily: "'Gotham Black', sans-serif", letterSpacing: "0.08em" }}
              >
                <br />🎓 Promo 2026
              </p>
            )}
            {student && (
              <p className="text-blue-200 text-sm mt-2 opacity-70">
                ✨ El mundo es tuyo — atrévete a soñar en grande y nunca dejes de volar.
              </p>
            )}
            {!student && hash && (
              <p className="text-red-300 text-sm mt-2">No se encontró el estudiante para este enlace.</p>
            )}
            {!student && !hash && (
              <p className="text-blue-200 text-sm mt-2 opacity-80">
                Usa el enlace personalizado que recibiste para ver tu contenido.
              </p>
            )}
          </div>

          <div className="divider" />

          {student ? (
            <>
              {/* Google Photos album link */}
              <div className="section-card mb-4 animate-fadeInUp delay-200">
                <div className="flex items-center gap-2 mb-3">
                  <GooglePhotosIcon />
                  <h2 className="text-white font-semibold text-base">Tu Álbum de Fotos</h2>
                </div>
                <Link
                  href={student.photosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-photos w-full"
                >
                  <GooglePhotosIcon />
                  Ver todas las fotos de {student.name} ↗
                </Link>
              </div>

              {/* Video 1 — Google Drive */}
              <div className="section-card mb-4 animate-fadeInUp delay-300">
                <div className="flex items-center gap-2 mb-3">
                  <DriveIcon />
                  <h2 className="text-white font-semibold text-base">{VIDEO_1.label}</h2>
                </div>
                <Link
                  href={VIDEO_1.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-drive w-full"
                >
                  <DriveIcon />
                  Ver {VIDEO_1.label} ↗
                </Link>
              </div>

              {/* Video 2 — YouTube embed */}
              <div className="section-card mb-4 animate-fadeInUp delay-400">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <YouTubeIcon />
                    <h2 className="text-white font-semibold text-base">{VIDEO_2.label}</h2>
                  </div>
                  <Link
                    href={VIDEO_2.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-youtube text-xs py-1.5 px-3"
                  >
                    Abrir ↗
                  </Link>
                </div>
                <div className="iframe-container">
                  <iframe
                    src={VIDEO_2.embedUrl}
                    title={VIDEO_2.label}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8 animate-fadeInUp delay-200">
              <div className="error-icon">🎓</div>
              <p className="text-blue-200 text-sm opacity-70 mb-6">
                {hash
                  ? "El enlace no es válido o ha expirado."
                  : "Escanea el código QR o usa el enlace personalizado que recibiste."}
              </p>
              <div className="space-y-4 text-left">
                <div className="section-card">
                  <div className="flex items-center gap-2 mb-3">
                    <DriveIcon />
                    <h2 className="text-white font-semibold text-base">{VIDEO_1.label}</h2>
                  </div>
                  <Link
                    href={VIDEO_1.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-drive w-full"
                  >
                    <DriveIcon />
                    Ver {VIDEO_1.label} ↗
                  </Link>
                </div>
                <div className="section-card">
                  <div className="flex items-center gap-2 mb-3">
                    <YouTubeIcon />
                    <h2 className="text-white font-semibold text-base">{VIDEO_2.label}</h2>
                  </div>
                  <div className="iframe-container">
                    <iframe
                      src={VIDEO_2.embedUrl}
                      title={VIDEO_2.label}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="divider" />

          <Link
            className="block text-center text-xs text-blue-300 hover:text-blue-100 hover:underline transition-colors font-gotham py-1"
            href="https://www.instagram.com/adibnavac"
            target="_blank"
          >
            @adibnavac
          </Link>
        </div>
      </div>
    </main>
  );
}
