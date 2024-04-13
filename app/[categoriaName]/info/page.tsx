import Link from 'next/link';
import { api } from '../../api';
import ThumbUpSvg from '../../UI/SVG/ThumbUpSvg.js';
import type { Jugador } from '../..utils/jugadoresMock';
export default async function InfoPage({
  params: { categoriaName },
}: {
  params: { categoriaName: string };
}) {
  const categorias = await api.categoriasMock();
  const categoria = categorias[categoriaName];

  const categoriaNombre =
    categoriaName[0].toUpperCase() + '-' + categoriaName.substring(1);

  const buenaAsistencia = (jugador: Jugador) => {
    const fechaUnMesAtras = new Date();
    fechaUnMesAtras.setDate(fechaUnMesAtras.getDate() - 31);

    const asistencias = jugador.asistencias.split(',');
    const newAsistencias = asistencias.map((asistencia) => {
      const [anio, mes, dia] = asistencia.split('-');
      return new Date(`${mes}/${dia}/${anio}`);
    });
    return (
      newAsistencias.filter((newAsistencia) => newAsistencia > fechaUnMesAtras)
        .length > 3
    );
  };

  return (
    <section className="p-4">
      <div className="font-bold flex justify-between items-center card header">
        <Link className="flex-1" href={`/${categoriaName}`}>
          Volver
        </Link>
        <span className="font-bold text-xl text-center flex-1">
          {categoriaNombre}
        </span>
        <Link className="flex-1 text-right" href={`/${categoriaName}/agregar`}>
          Agregar Jugador
        </Link>
      </div>
      <div className="py-6">
        <div className="flex items-center gap-4 px-4">
          <span className="font-bold text-xl my-2">Profesores: </span>
          <span>{categoria.profesores[0]}</span>
          {categoria.profesores.length > 1 && (
            <>
              <span>-</span>
              <span>{categoria.profesores[1]}</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-4 px-4">
          <span className="font-bold text-xl my-2">Managers: </span>
          <span>{categoria.managers[0]}</span>
          {categoria.managers.length > 1 && (
            <>
              <span>-</span>
              <span>{categoria.managers[1]}</span>
            </>
          )}
        </div>
        <div className="w-3/4 m-auto p-4 flex flex-col gap-2 flex-wrap mb-8">
          {Object.entries(categoria.jugadores).map(
            ([nombreCompleto, jugadorData]) => (
              <Link
                key={nombreCompleto}
                href={`/${categoriaName}/${nombreCompleto}`}
                className="text-xs card flex justify-between items-center "
              >
                <span>
                  <strong>{jugadorData.apellido}</strong>, {jugadorData.nombre}
                </span>
                {buenaAsistencia(jugadorData) ? (
                  <ThumbUpSvg className={'text-green-400'} />
                ) : (
                  <ThumbUpSvg className={'rotate-180 text-orange-400'} />
                )}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
