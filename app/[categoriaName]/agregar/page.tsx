'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import CheckSvg from '../../UI/SVG/CheckSvg.js';
import CancelSvg from '../../UI/SVG/CancelSvg.js';
export default async function AgregarPage({
  params: { categoriaName },
}: {
  params: { categoriaName: string };
}) {
  const router = useRouter();

  const categoriaNombre =
    categoriaName[0].toUpperCase() + '-' + categoriaName.substring(1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    //TODO crear el jugador para la categoria
    form.reset();
    router.push(`/${categoriaName}/info`);
  };

  return (
    <section className="p-4">
      <div className="font-bold flex justify-between items-center card header">
        <Link className="flex-1" href={`/${categoriaName}/info`}>
          Volver
        </Link>
        <span className="font-bold text-xl text-center flex-1">
          {categoriaNombre}
        </span>
        <span className="flex-1"></span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-3/4 m-auto py-8"
      >
        <h2 className="font-bold border-b border-slate-700 py-2 my-2">
          Agregando jugador:
        </h2>
        <input
          className="text-center card form required"
          type="text"
          placeholder="apellido"
          required
          name="apellido"
        />
        <input
          className="text-center card form required"
          type="text"
          placeholder="nombre"
          required
          name="nombre"
        />
        <input
          className="text-center card form"
          type="text"
          placeholder="documento"
          name="documento"
        />
        <input
          className="text-center card form"
          type="text"
          placeholder="domicilio"
          name="domicilio"
        />
        <input
          className="text-center card form"
          type="text"
          placeholder="contacto"
          name="contacto"
        />
        <input
          className="text-center card form"
          type="text"
          placeholder="nacimiento"
          name="nacimiento"
        />
        <input
          className="text-center card form"
          type="text"
          placeholder="observacion"
          name="observacion"
        />

        <div className="flex justify-end items-center gap-2 mb-4 mt-2">
          <span className="bg-red-700 w-[0.5rem] h-[0.5rem] rounded-full"></span>
          <span className="text-xs">campo obligatorio</span>
        </div>

        <div className="flex flex-1 gap-4">
          <button
            type="submit"
            className="bg-green-500 h-12 flex-1 rounded-lg border border-slate-600 flex justify-center shadow-xl"
          >
            <CheckSvg className="h-full w-[2rem]" />
          </button>
          <Link
            href={`/${categoriaName}/info`}
            className="bg-red-500 flex-1 rounded-lg border border-slate-600 flex justify-center shadow-xl"
          >
            <CancelSvg className="h-full w-[2rem]" />
          </Link>
        </div>
      </form>
    </section>
  );
}
