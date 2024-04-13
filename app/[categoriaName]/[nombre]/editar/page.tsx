'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/app/api';
import CheckSvg from '@/app/UI/SVG/CheckSvg.js';
import CancelSvg from '@/app/UI/SVG/CancelSvg.js';
import TrashSvg from "@/app/UI/SVG/TrashSvg.js"
import { JugadorAsistencias } from '@/app/UI/components/JugadorAsistencias';

export default async function EditarPage({
  params: { categoriaName, nombre },
}: {
  params: { categoriaName: string; nombre: string };
}) {
  const router = useRouter();
  const jugador = await api.jugador(nombre);
  const categoriaNombre =
    categoriaName[0].toUpperCase() + '-' + categoriaName.substring(1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    //TODO crear el jugador para la categoria
    form.reset();
    router.push('/');
  };

  const handleDelete = () => {
    console.log(`borrando a ${nombre}`)
  }

  return (
    <section className="p-4">
      <div className="font-bold flex justify-between items-center card header">
        <Link className="flex-1" href={`/${categoriaName}/${nombre}`}>
          Volver
        </Link>
        <span className="font-bold text-xl text-center flex-1">
          {categoriaNombre}
        </span>
        <span className="flex-1"></span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-3/4 m-auto"
      >
        <div className="font-bold flex justify-between items-center border-b border-slate-700 my-6">
          <span className='text-xl font-bold'>Editando jugador</span>
          <span onClick={handleDelete}>
            <TrashSvg className={"w-[2.5rem] h-[2.5rem] p-1"} />
          </span>
        </div>

        <div className="flex justify-end items-center gap-2 ">
          <span className="bg-red-700 w-[0.5rem] h-[0.5rem] rounded-full"></span>
          <span className="text-xs">campo obligatorio</span>
        </div>

        <input
          className="w-full text-center card form required"
          type="text"
          placeholder="apellido"
          defaultValue={jugador?.apellido}
          required
          name="apellido"
        />
        <input
          className="text-center card form required"
          type="text"
          placeholder="nombre"
          defaultValue={jugador?.nombre}
          required
          name="nombre"
        />
        <input
          className="text-center card form"
          type="text"
          placeholder="documento"
          defaultValue={jugador?.documento}
          name="documento"
        />
        <input
          className="text-center card form"
          type="text"
          placeholder="domicilio"
          defaultValue={jugador?.domicilio}
          name="domicilio"
        />
        <input
          className="text-center card form"
          type="text"
          placeholder="contacto"
          defaultValue={jugador?.contacto}
          name="contacto"
        />
        <input
          className="text-center card form"
          type="text"
          placeholder="nacimiento"
          defaultValue={jugador?.nacimiento}
          name="nacimiento"
        />
        <input
          className="text-center card form"
          type="text"
          placeholder="observacion"
          defaultValue={jugador?.observacion}
          name="observacion"
        />
        {/* 
        <JugadorAsistencias
          asistencias={jugador?.asistencias}
          fechaActual={"13-04-2024"}
        />
      */}

        <div className="flex flex-1 gap-4">
          <button
            type="submit"
            className="bg-green-500 h-12 flex-1 rounded-lg border border-slate-600 flex justify-center shadow-xl"
          >
            <CheckSvg className="h-full w-[2rem]" />
          </button>
          <Link
            href={`/${categoriaName}/${nombre}`}
            className="bg-red-500 flex-1 rounded-lg border border-slate-600 flex justify-center shadow-xl"
          >
            <CancelSvg className="h-full w-[2rem]" />
          </Link>
        </div>
      </form>
    </section>
  );
}