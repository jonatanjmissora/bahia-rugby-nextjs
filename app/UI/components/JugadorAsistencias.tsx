'use client';

import React, { useState } from 'react';
import { ALMANAQUE } from '../../utils/constants';
import { LeftChevronSvg } from '../SVG/LeftChevronSvg';
import { RightChevronSvg } from '../SVG/RightChevronSvg';
import { getMonthStr, numberFormat } from '../../utils/utils';
import { Dia } from './Dia';

interface JugadorAsistenciasProps {
  asistencias: string;
  fechaActual: string;
}

export const JugadorAsistencias = ({
  asistencias,
  fechaActual,
}: JugadorAsistenciasProps) => {
  const mesNumeroStrActual = fechaActual.split('/')[1];
  const mesNumeroActual = parseInt(mesNumeroStrActual, 10) - 1;
  const anioNumeroStrActual = fechaActual.split('/')[2];
  const anioNumeroActual = parseInt(anioNumeroStrActual, 10);

  const [month, setMonth] = useState<number>(mesNumeroActual);
  const [year, setYear] = useState<number>(anioNumeroActual);

  const changeMonth = (direction: string) => {
    if (direction === 'left') {
      if (month > 0) setMonth((prev) => prev - 1);
      else {
        if (year === 2024) return;
        else {
          setYear(2024);
          setMonth(11);
        }
      }
    } else {
      if (month < 11) setMonth((prev) => prev + 1);
      else {
        if (year === 2025) return;
        else {
          setYear(2025);
          setMonth(0);
        }
      }
    }
  };

  const hideRightClass =
    month === 11 && year === 2025 ? 'opacity-0' : 'opacity-100';
  const hideLeftClass =
    month === 0 && year === 2024 ? 'opacity-0' : 'opacity-100';

  return (
    <article className="card almanaque">
      <div className="font-semibold flex justify-between items-center">
        <span className="py-1 border-b border-gray-600 ">Asistencias :</span>
        <div className="flex gap-1 justify-between items-center">
          <span
            onClick={() => changeMonth('left')}
            className={`h-8 w-8 flex justify-center items-center ${hideLeftClass}`}
          >
            <LeftChevronSvg className="text-green-700" />
          </span>
          <div className="asistencias-filter-container">
            <span className="asistencias-filter-month">
              {getMonthStr(month)}
            </span>
            <p className="asistencias-filter-year">{year}</p>
          </div>

          <span
            onClick={() => changeMonth('right')}
            className={`h-8 w-8 flex justify-center items-center ${hideRightClass}`}
          >
            <RightChevronSvg className="text-green-700" />
          </span>
        </div>
      </div>
      <div className="flex gap-4 my-1 mx-1">
        <span className="flex-1">Lun</span>
        <span className="flex-1">Mar</span>
        <span className="flex-1">Mie</span>
        <span className="flex-1">Jue</span>
        <span className="flex-1">Vie</span>
        <span className="flex-1">Sab</span>
        <span className="flex-1">Dom</span>
      </div>
      {ALMANAQUE[year][numberFormat(month + 1)].map((semana, indiceSemana) => (
        <div
          key={indiceSemana}
          className="h-8 flex justify-between items-center"
        >
          {semana.map((fecha) => (
            <Dia
              key={fecha}
              fecha={fecha}
              fechaActual={fechaActual}
              indiceSemana={indiceSemana}
              ultimaSemana={ALMANAQUE[year][numberFormat(month + 1)].length}
              asistencias={asistencias}
            />
          ))}
        </div>
      ))}
    </article>
  );
};
