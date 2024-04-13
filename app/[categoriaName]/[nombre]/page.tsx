import Link from 'next/link';
import { api } from '../../api';
import TrashSvg from "../../UI/SVG/TrashSvg.js"
import { JugadorAsistencias } from '../../UI/components/JugadorAsistencias';

export default async function JugadorPage({
  params: { categoriaName, nombre },
}: {
  params: { categoriaName: string; nombre: string };
}) {
  const jugador = await api.jugador(nombre);
  const categoriaNombre =
    categoriaName[0].toUpperCase() + '-' + categoriaName.substring(1);

  const fechaActual = new Date().toLocaleDateString();

  return (
    <section className="p-4 relative">
      <div className="font-bold flex justify-between items-center card header">
        <Link href={`/${categoriaName}/info`}>Volver</Link>
        <span className="font-bold text-xl text-center flex-1">
          {categoriaNombre}
        </span>
        <Link href={`/${categoriaName}/${nombre}/editar`}>Editar</Link>
      </div>
      <div className="py-8 flex flex-col gap-2 w-3/4 m-auto">

        <div className="font-bold flex justify-between items-center border-b border-slate-700 my-4">
          <span>{`${jugador.apellido}, ${jugador.nombre}`}</span>
        </div>

        <div className="flex gap-4 justify-between card">
          <span>Direccion:</span> <span>{jugador.domicilio}</span>
        </div>
        <div className="flex gap-4 justify-between card">
          <span>Documento:</span> <span>{jugador.documento}</span>
        </div>
        <div className="flex gap-4 justify-between card">
          <span>Contacto:</span> <span>{jugador.contacto}</span>
        </div>
        <div className="flex gap-4 justify-between card">
          <span>Fecha nac:</span> <span>{jugador.nacimiento}</span>
        </div>
        <div className="card flex gap-4 justify-between">
          <span>Observacion:</span> <span>{jugador.observacion}</span>
        </div>
        <JugadorAsistencias
          asistencias={jugador.asistencias}
          fechaActual={fechaActual}
        />
      </div>

    </section>
  );
}
