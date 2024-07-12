"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import './styles.css';
import instagram from './images/instagram.png';
import youtube from './images/youtube.png';
import googlephotos from './images/googlephotos.png';
import Image from 'next/image'


export default function Bilingue2024() {
  const searchParams = useSearchParams();
  const student = searchParams.get("student")?.toString() ?? "";
  const photos = searchParams.get("photos")?.toString() ?? "";

  return (
    <main className="flex flex-col max-h-screen items-center font-sans px-5 py-5 md:py-20 lg:pt-10">

      <div className="flex flex-col max-w-2xl my-auto bg-white opacity-95 rounded-3xl px-10 md:px-20 pt-10 pb-3 shadow-2xl">
        <p className="text-center sm:text-sm md:text-lg">
          ¡Felicidades a quienes celebran el paso hacia un horizonte lleno de promesas! Que cada día esté lleno de nuevos comienzos y oportunidades emocionantes.
        </p>

        <hr className="my-3" />

        <Link href={photos} target="_blank" className="text-blue-700 text-sm md:text-lg hover:text-white border border-blue-700 hover:bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
          {/* <Image src={googlephotos} alt="youtube" width={20} height={20} className="inline-block mb-1 mr-2" /> */}
          Fotos de {student}
        </Link>

        <Link href={photos} target="_blank" className="text-blue-700 text-sm md:text-lg hover:text-white border border-blue-700 hover:bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
          {/* <Image src={youtube} alt="youtube" width={20} height={20} className="inline-block mb-1 mr-2" /> */}
          Video de grado
        </Link>

        <Link href={photos} target="_blank" className="text-blue-700 text-sm md:text-lg hover:text-white border border-blue-700 hover:bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
          {/* <Image src={youtube} alt="youtube" width={20} height={20} className="inline-block mb-1 mr-2" /> */}
          Video de la fiesta
        </Link>

        <hr className="my-3" />

        <Link className="mt-auto font-caviar text-center text-sm py-1 px-4 hover:underline hover:text-blue-700" href="https://www.instagram.com/adibnavac" target="_blank">
          @adivnava
        </Link>
      </div>
    </main>
  );
}
