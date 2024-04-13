import { api } from '../api';
import Link from 'next/link';

export default async function CategoriaPage({
  params: { categoriaName },
}: {
  params: { categoriaName: string };
}) {
  const categorias = await api.categoriasMock();

  const categoriaNombre =
    categoriaName[0].toUpperCase() + '-' + categoriaName.substring(1);

  return (
    <section className="p-4">
      <div className="font-bold flex justify-between items-center card header">
        <Link className="flex-1" href={'/'}>
          Bahia Rugby
        </Link>
        <span className="font-bold text-xl text-center flex-1">
          {categoriaNombre}
        </span>
        <Link className="flex-1 text-right" href={`/${categoriaName}/info`}>
          Info
        </Link>
      </div>

      <div className="w-screen p-4 flex flex-col gap-2 flex-wrap mb-8">
        {Object.entries(categorias[categoriaName].jugadores).map(
          ([nombreCompleto, jugadorData]) => (
            <span
              className="text-xs text-center card w-3/4 m-auto"
              key={nombreCompleto}
            >
              <strong>{jugadorData.apellido}</strong>, {jugadorData.nombre}
            </span>
          )
        )}
      </div>
    </section>
  );
}
