import Link from 'next/link';
import { api } from './api';
import Image from 'next/image';

export default async function Home() {
  const categorias = await api.categoriasMock();

  return (
    <main className="h-screen flex gap-8 flex-col justify-center items-center bg-green">
      <Image
        className="brightness-75"
        src="./main-logo.svg"
        width="400"
        height="400"
        alt="main-logo"
      />
      <p className="text-black font-bold text-3xl">CATEGORIAS</p>
      <div className="w-full flex justify-center gap-6">
        <Link className="main-button" href="/m11">
          M-11
        </Link>
        <Link className="main-button" href="/m12">
          M-12
        </Link>
        <Link className="main-button " href="/m13">
          M-13
        </Link>
      </div>
    </main>
  );
}
