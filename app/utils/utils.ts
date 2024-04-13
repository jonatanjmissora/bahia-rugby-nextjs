export const sortObjectProperties = (object) => {
  const sortedProperties = Object.keys(object).sort((a, b) =>
    a.localeCompare(b)
  );

  return sortedProperties;
};

export const capitalizeString = (string: string) => {
  const firstLetterCap = string.charAt(0).toUpperCase();
  const restOfString = string.slice(1).toLowerCase();
  return firstLetterCap + restOfString;
};

/*****************************************************************************/

export const numberFormat = (num: number) => {
  return num < 10 ? '0' + num : '' + num;
};

/*****************************************************************************/
//  2024-02-11
export const dateFormat = (date: Date) => {
  const [dd, mm, yyyy] = date.split('/');
  const day = numberFormat(dd);
  const month = numberFormat(mm);
  const year = yyyy;
  return `${year}-${month}-${day}`;
};

/*****************************************************************************/

const dayStrArray = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];
const monthStrArray = [
  'ENERO',
  'FEBRERO',
  'MARZO',
  'ABRIL',
  'MAYO',
  'JUNIO',
  'JULIO',
  'AGOSTO',
  'SEPTIEMBRE',
  'OCTUBRE',
  'NOVIEMBRE',
  'DICIEMBRE',
];

/*****************************************************************************/

export const getCurrentDate = (date: Date) => {
  const [dd, mm, yy] = date.split('/');
  const dateStr = `${yy}-${mm}-${dd}`;
  const d = new Date(dateStr);
  const day = dayStrArray[d.getDay()];
  const number = d.getDate();
  const month = monthStrArray[d.getMonth()];

  return [day, number, month];
};

/*****************************************************************************/

export const getMonthStr = (monthNumber: number) => {
  return monthStrArray[monthNumber];
};

/*****************************************************************************/

export const ordernarJugadores = (jugadores, fecha) => {
  const jugadoresPresentes = [];
  const jugadoresAusentes = [];
  Object.entries(jugadores).forEach(([nombre, data]) => {
    if (data.asistencias.includes(fecha)) {
      jugadoresPresentes.push(nombre);
    } else {
      jugadoresAusentes.push(nombre);
    }
  });
  const jugadoresPresentesOrdenados = jugadoresPresentes.sort((a, b) =>
    a.localeCompare(b)
  );
  const jugadoresAusentesOrdenados = jugadoresAusentes.sort((a, b) =>
    a.localeCompare(b)
  );

  return [jugadoresPresentes, jugadoresAusentes];
};

/*****************************************************************************/

export const buildNombreCompleto = (nombre, apellido) => {
  const upperAppellido = apellido.toUpperCase();
  const capitalizeNombre = capitalizeString(nombre);
  return `${upperAppellido}_${capitalizeNombre}`;
};
