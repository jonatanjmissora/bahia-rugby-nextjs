import { jugadoresMock } from "./utils/jugadoresMock";
import type { Jugador } from "./utils/jugadoresMock";

const url: string =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQvk3BaJmJzz0WImcOfWEd7_GxZteJM6XvPIVSl01AvGKHGGPTbFdBY1Jri210ryyVtgmZzXzvJIykd/pub?output=tsv';

const jugadorInitial = {
  categoria: '',
  apellido: '',
  nombre: '',
  documento: '',
  domicilio: '',
  contacto: '',
  nacimiento: '',
  observacion: '',
  asistencias: '',
};

const setCategorias = (jugadoresArray: Jugador[]) => {
  const categorias: Categorias = {
    m11: {
      categoria: 'm11',
      profesores: ['Sosa', 'Mazzello'],
      managers: ['Iribarne'],
      jugadores: {},
    },
    m12: {
      categoria: 'm12',
      profesores: ['Dalmao', 'Garechana'],
      managers: ['Sosa'],
      jugadores: {},
    },
    m13: {
      categoria: 'm13',
      profesores: ['Iribarne', 'Komansky'],
      managers: ['Dalmao', 'Mazello'],
      jugadores: {},
    },
  };

  jugadoresArray.forEach((jugador) => {
    const nombreCompleto = `${jugador.apellido}_${jugador.nombre}`;
    categorias[jugador.categoria].jugadores[nombreCompleto] = jugador;
  });

  return categorias;
};

export const api = {
  jugadoresList: async (): Promise<Jugador[]> => {
    const [, ...data] = await fetch(url)
      .then((res) => res.text())
      .then((text) => text.split('\n'));
    const jugadores: Jugador[] = data.map((row) => {
      const [
        categoria,
        apellido,
        nombre,
        documento,
        domicilio,
        contacto,
        nacimiento,
        observacion,
        asistencias,
      ] = row.split('\r')[0].split('\t');
      return {
        categoria,
        apellido,
        nombre,
        documento,
        domicilio,
        contacto,
        nacimiento,
        observacion,
        asistencias,
      };
    });
    return jugadores;
  },
  jugadoresMock: () => jugadoresMock,
  categoriasMock: () => setCategorias(jugadoresMock),
  jugador: (nombre: string) => {
    const categoriasMock = setCategorias(jugadoresMock);
    const categoriasNameArray = Object.keys(categoriasMock);
    let jugador: Jugador = jugadorInitial;
    for (let categoriaName of categoriasNameArray) {
      if (
        Object.keys(categoriasMock[categoriaName].jugadores).includes(nombre)
      ) {
        jugador = { ...categoriasMock[categoriaName].jugadores[nombre] };
        break;
      }
    }
    return jugador;
  },
};

/*
const getData = async () => {
  const csv = await fetch(url).then((res) => res.text());

  const rows = csv.split('\n');
  const keysArray = rows[0].split('\t');
  const valuesArray = rows.slice(1);

  const jugadores = valuesArray.map((value) => {
    const valueArray = value.split('\r')[0].split('\t');
    const dataObj = {};
    keysArray.forEach((key, index) => (dataObj[key] = valueArray[index]));
    return dataObj;
  });

  console.log('Jugadores :', jugadores);
  return jugadores;
};
*/
