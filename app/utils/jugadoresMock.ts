interface Jugadores {
  [key: string]: Jugador;
}

interface Categoria {
  categoria: string;
  profesores: string[];
  managers: string[];
  jugadores: Jugadores;
}

interface Categorias {
  [key: string]: Categoria;
}

export interface Jugador {
  categoria: string;
  apellido: string;
  nombre: string;
  documento: string;
  domicilio: string;
  contacto: string;
  nacimiento: string;
  observacion: string;
  asistencias: string;
}


export const jugadoresMock: Jugador[] = [
  {
    categoria: 'm11',
    apellido: 'ESPEJO',
    nombre: 'Javier',
    documento: '27331281',
    domicilio: 'casa 1',
    contacto: '2914228306',
    nacimiento: '27/04/1979',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm11',
    apellido: 'FARIAS',
    nombre: 'Ernesto',
    documento: '25576892',
    domicilio: 'casa 2',
    contacto: '2915016830',
    nacimiento: '18/04/1977',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },

  {
    categoria: 'm11',
    apellido: 'FREDA',
    nombre: 'Cristian',
    documento: '24670611',
    domicilio: 'casa 3',
    contacto: '2915033022',
    nacimiento: '21/02/1971',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm11',
    apellido: 'GARECHANA',
    nombre: 'Enrique',
    documento: '25665207',
    domicilio: 'casa 4',
    contacto: '2915038388',
    nacimiento: '22/01/1977',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm11',
    apellido: 'GIQUEAUX',
    nombre: 'Luciano',
    documento: '24772114',
    domicilio: 'casa 5',
    contacto: '2914056291',
    nacimiento: '3/06/1975',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },
  {
    categoria: 'm11',
    apellido: 'GOMEZ',
    nombre: 'Mario',
    documento: '27056720',
    domicilio: 'casa 6',
    contacto: '2914410002',
    nacimiento: '20/01/1979',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },
  {
    categoria: 'm11',
    apellido: 'IRIBARNE',
    nombre: 'Juan',
    documento: '29209018',
    domicilio: 'casa 7',
    contacto: '2914373525',
    nacimiento: '6/09/1977',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm11',
    apellido: 'LUSARRETA',
    nombre: 'Guillermo',
    documento: '26172363',
    domicilio: 'casa 8',
    contacto: '2915074389',
    nacimiento: '22/07/1977',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm11',
    apellido: 'MANGANELLI',
    nombre: 'Enrique',
    documento: '17673652',
    domicilio: 'casa 9',
    contacto: '2915039393',
    nacimiento: '23/03/1966',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm11',
    apellido: 'MARCH',
    nombre: 'Fernando',
    documento: '24772324',
    domicilio: 'casa 10',
    contacto: '2915744691',
    nacimiento: '9/07/1975',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm11',
    apellido: 'MAZZELLO',
    nombre: 'Pablo',
    documento: '25576658',
    domicilio: 'casa 11',
    contacto: '2914725807',
    nacimiento: '7/03/1977',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },
  {
    categoria: 'm11',
    apellido: 'MENECOZZI',
    nombre: 'Cristian',
    documento: '26958813',
    domicilio: 'casa 12',
    contacto: '2915733429',
    nacimiento: '5/11/1978',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },
  {
    categoria: 'm11',
    apellido: 'MISSORA',
    nombre: 'Jonatan',
    documento: '26794337',
    domicilio: 'casa 13',
    contacto: '2914319025',
    nacimiento: '11/08/1978',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },

  {
    categoria: 'm12',
    apellido: 'MUNOZ',
    nombre: 'Martin',
    documento: '24829008',
    domicilio: 'casa 14',
    contacto: '2916426547',
    nacimiento: '18/07/1975',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm12',
    apellido: 'MUNOZ',
    nombre: 'Silvio',
    documento: '26547994',
    domicilio: 'casa 15',
    contacto: '2914765014',
    nacimiento: '30/04/1978',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },

  {
    categoria: 'm12',
    apellido: 'PETRUZELA',
    nombre: 'Nicolas',
    documento: '29905825',
    domicilio: 'casa 16',
    contacto: '2234489937',
    nacimiento: '11/10/1982',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm12',
    apellido: 'PRIEGUE',
    nombre: 'Leonardo',
    documento: '18558619',
    domicilio: 'casa 17',
    contacto: '2914274138',
    nacimiento: '28/10/1967',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm12',
    apellido: 'RIESCO',
    nombre: 'Gonzalo',
    documento: '25948639',
    domicilio: 'casa 18',
    contacto: '2914226525',
    nacimiento: '6/05/1977',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm12',
    apellido: 'ROJAS',
    nombre: 'Maximiliano',
    documento: '23574529',
    domicilio: 'casa 19',
    contacto: '2914669333',
    nacimiento: '25/12/1973',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm12',
    apellido: 'RUIZ',
    nombre: 'Ariel',
    documento: '27195445',
    domicilio: 'casa 20',
    contacto: '2915752374',
    nacimiento: '18/02/1979',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },
  {
    categoria: 'm12',
    apellido: 'SCHAAB',
    nombre: 'Miguel',
    documento: '31941849',
    domicilio: 'casa 21',
    contacto: '2914192336',
    nacimiento: '1/04/1986',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm12',
    apellido: 'SCILINGO',
    nombre: 'Mauricio',
    documento: '25994513',
    domicilio: 'casa 22',
    contacto: '2914611716',
    nacimiento: '16/06/1977',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm12',
    apellido: 'SCUFFI',
    nombre: 'Jorge',
    documento: '27983541',
    domicilio: 'casa 23',
    contacto: '2915262007',
    nacimiento: '6/03/1980',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm12',
    apellido: 'GELABERT',
    nombre: 'Mauro',
    documento: '31779416',
    domicilio: 'casa 31',
    contacto: '2916497840',
    nacimiento: '	27/06/1985',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },
  {
    categoria: 'm12',
    apellido: 'LOPEZ',
    nombre: 'Emanuel',
    documento: '32587264',
    domicilio: 'casa 32',
    contacto: '2914192336',
    nacimiento: '15/07/1985',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm12',
    apellido: 'SGATTONI',
    nombre: 'Nico',
    documento: '28372194',
    domicilio: 'casa 33',
    contacto: '2915739368',
    nacimiento: '29/08/1980',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },
  {
    categoria: 'm12',
    apellido: 'BERDINI',
    nombre: 'Mario',
    documento: '21505552',
    domicilio: 'casa 34',
    contacto: '2914353276',
    nacimiento: '26/06/1970',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },

  {
    categoria: 'm13',
    apellido: 'SANTILLAN',
    nombre: 'Claudio',
    documento: '20522933',
    domicilio: 'casa 35',
    contacto: '2915056977',
    nacimiento: '3/01/1969',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm13',
    apellido: 'MOSCA',
    nombre: 'Juan',
    documento: '24785114',
    domicilio: 'casa 36',
    contacto: '2914192336',
    nacimiento: '12/05/1976',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },

  {
    categoria: 'm13',
    apellido: 'MORLEY',
    nombre: 'Antonio',
    documento: '23521876',
    domicilio: 'casa 37',
    contacto: '2916426547',
    nacimiento: '12/12/1973',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm13',
    apellido: 'ALARCON',
    nombre: 'Laureano',
    documento: '25224816',
    domicilio: 'casa 38',
    contacto: '2914427524',
    nacimiento: '31/05/1976',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },
  {
    categoria: 'm13',
    apellido: 'BLANCO',
    nombre: 'Dario',
    documento: '20233249',
    domicilio: 'casa 39',
    contacto: '2914353276',
    nacimiento: '28/11/1968',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm13',
    apellido: 'BUSTELO',
    nombre: 'Pablo',
    documento: '20095254',
    domicilio: 'casa 40',
    contacto: '2915759873',
    nacimiento: '13/03/1968',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },
  {
    categoria: 'm13',
    apellido: 'CALVO',
    nombre: 'Diego',
    documento: '24785731',
    domicilio: 'casa 41',
    contacto: '2916498880',
    nacimiento: '17/02/1977',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },
  {
    categoria: 'm13',
    apellido: 'DALMAU',
    nombre: 'Bruno',
    documento: '25619753',
    domicilio: 'casa 42',
    contacto: '2914731278',
    nacimiento: '21/01/1977',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm13',
    apellido: 'DAVALOS',
    nombre: 'Gabriel',
    documento: '25215664',
    domicilio: 'casa 43',
    contacto: '2915276177',
    nacimiento: '20/09/1976',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm13',
    apellido: 'ECHEGUREN',
    nombre: 'Fernando',
    documento: '26333078',
    domicilio: 'casa 44',
    contacto: '2915754368',
    nacimiento: '18/10/1977',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm13',
    apellido: 'ESCOBAR',
    nombre: 'Mauro',
    documento: '25576516',
    domicilio: 'casa 45',
    contacto: '2915056977',
    nacimiento: '18/02/1977',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },
  {
    categoria: 'm12',
    apellido: 'SORESI',
    nombre: 'Franco',
    documento: '24337182',
    domicilio: 'casa 24',
    contacto: '2916490634',
    nacimiento: '10/01/1975',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm12',
    apellido: 'SOSA',
    nombre: 'Juan',
    documento: '27331316',
    domicilio: 'casa 25',
    contacto: '2914065567',
    nacimiento: '9/05/1979',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },
  {
    categoria: 'm12',
    apellido: 'TAFFAREL',
    nombre: 'Diego',
    documento: '26731546',
    domicilio: 'casa 26',
    contacto: '2916425855',
    nacimiento: '1/12/1978',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },
  {
    categoria: 'm12',
    apellido: 'TORRES',
    nombre: 'Luciano',
    documento: '24436689',
    domicilio: 'casa 27',
    contacto: '2915112200',
    nacimiento: '24/4/1975',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm12',
    apellido: 'ZUBILLAGA',
    nombre: 'Tomas',
    documento: '26172117',
    domicilio: 'casa 28',
    contacto: '2914195652',
    nacimiento: '14/08/1977',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm12',
    apellido: 'VIRDIS',
    nombre: 'Ignacio',
    documento: '26456029',
    domicilio: 'casa 29',
    contacto: '2914669402',
    nacimiento: '9/01/1978',
    observacion: '',
    asistencias:
      '2024-03-12, 2024-03-14, 2024-03-26, 2024-03-28, 2024-03-30, 2024-04-11',
  },
  {
    categoria: 'm12',
    apellido: 'LOBIANCO',
    nombre: 'Juan',
    documento: '26172428',
    domicilio: 'casa 30',
    contacto: '2914224438',
    nacimiento: '30/08/1977',
    observacion: '',
    asistencias: '2024-03-14, 2024-03-28, 2024-04-09',
  },
];