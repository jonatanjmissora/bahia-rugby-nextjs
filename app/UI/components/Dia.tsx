import { numberFormat } from '@/app/utils/utils';

interface Props {
  fecha: string;
  fechaActual: string;
  indiceSemana: number;
  ultimaSemana: number;
  asistencias: string;
}

export const Dia = ({
  fecha,
  fechaActual,
  indiceSemana,
  ultimaSemana,
  asistencias,
}: Props) => {
  const number = fecha.split('-')[2];
  const [day, month, year] = fechaActual.split('/');
  const fechaActualX = `${year}-${numberFormat(
    parseInt(month, 10)
  )}-${numberFormat(parseInt(day, 10))}`;

  const greyDay =
    ((indiceSemana === 0 && parseInt(number, 10) > 10) ||
      (indiceSemana === ultimaSemana - 1 && parseInt(number, 10) < 10)) &&
    'opacity-50';
  const greenDay = asistencias.includes(fecha) && 'bg-green-400';

  const isToday = fecha === fechaActualX;

  return (
    <div
      className={`w-6 h-full bg-gray-100 flex-1 flex justify-center items-center border-2 ${greyDay} ${greenDay} ${isToday && 'border-2 border-orange-300 text-orange-400'
        }`}
    >
      {number}
    </div>
  );
};
