interface EnlaceMetadata {
  url: string;
  texto: string;
}

enum JuegoEnum {
  SHADOW_OF_CHERNOBYL,
  CLEAR_SKY,
  CALL_OF_PRYPIAT,
}

enum TipoEnum {
  VANILLA_MOD,
  HISTORIA,
  FREEPLAY,
}

interface Modificacion {
  tipo: TipoEnum;
  juego: JuegoEnum;
  portadaPath: string;
  titulo: string;
  autor: string;
  sinopsis: string;
  traduccion: string;
  fecha_lanzamiento: string;
  descripcion: string;
  caracteristicas: string[];
  enlaces: EnlaceMetadata[];
  isStandalone: boolean;
  imagenesGaleria: string[];
  aclaraciones?: string[];
  pasosInstalacion?: string[];
}

const MODS: Modificacion[] = [
  {
    autor: 'Artistpavel, Argus, Trojanuch, Sergy172',
    traduccion: 'Vanilla',
    titulo: 'Shadow Of Chernobyl Complete mod 1.5',
    fecha_lanzamiento: '2009 - Ultima actualización  9/04/2025',
    sinopsis: `Eres rescatado luego de un accidente en los camiones de la muerte, tras 
               despertar has perdido la memoria y tu única pista es tu PDA con la misión de matar 
               a un tal Strelok. La búsqueda por recuperar la memoria y encontrar a Strelok te lleva 
               a recorrer la Zona de exclusión.`,
    descripcion: `Una de las modificaciones mas recomendadas si buscas rejugar la saga 
                  con un lavado de cara sin sufrir cambios significativos. Un mod totalmente grafico 
                  que añade una experiencia visualmente actualizada sin pedir muchos, siendo 
                  accesible para la mayoria de usuarios. Entre lo mas destacado se añade Iluminación 
                  natural, amplias vistas panorámicas, profundidad de campo, mapeo de paralaje, 
                  SSAO, Más de 900 archivos de texturas reelaborados, incluidos vehículos y conjuntos 
                  de armaduras con edición manual de relieve.`,
    caracteristicas: [
      'Mejoras en la transisión de Noche y Día.',
      'Distancia de dibujado y vistas ampliadas.',
      'Nuevo diseño de Luna en multifase.',
      'Recreación de objetos especiales.',
      'Iluminación de alto rango dinámico mejorada y efectos solares.',
      'Aumento de los ciclos meteorológicos y variedad climática.',
      'Superficies mojadas durante la lluvia.',
      'Mapa de constelaciones nocturnas de alta resolución.',
      'Animaciones de agua mejoradas.',
      'Texturas de alta resolución.',
      'Vegetación mejorada.',
      'Añade SSAO Mejorado.',
      'Agrega un sitema de particulas.',
      'Fuego dinámico.',
      'Mejoras en la I.A.',
      'Corrección de bugs.',
      'Mejoras en sonido.',
    ],
    enlaces: [
      {
        texto: 'Tutorial',
        url: 'https://www.youtube.com/watch?v=vZgvQkzbRFY',
      },
      {
        texto: 'Pagina oficial',
        url: 'https://www.moddb.com/mods/stalker-complete-2009',
      },
      {
        texto: 'Complete Mod 1.5',
        url: 'https://www.moddb.com/mods/stalker-complete-2009/downloads/stalker-complete-15',
      },
    ],
    portadaPath: '@soc/vanilla_mods/01/portada.webp',
    imagenesGaleria: [
      '@soc/vanilla_mods/01/1.webp',
      '@soc/vanilla_mods/01/2.webp',
      '@soc/vanilla_mods/01/3.webp',
      '@soc/vanilla_mods/01/4.webp',
    ],
    aclaraciones: [
      'El mod requiere tener Shadow of Chernobyl ya que se toma el juego base para aplicar las mejoras.',
      'Se deja un tutorial del camrada OmegaKira  para instalarlo.',
    ],
    isStandalone: false,
    juego: JuegoEnum.SHADOW_OF_CHERNOBYL,
    tipo: TipoEnum.VANILLA_MOD,
  },
  {
    autor: 'Autumnal Wanderers',
    titulo: 'Autumn aurora',
    traduccion: 'Davoker (basada en wardust)',
    fecha_lanzamiento: '2014',
    sinopsis: `Eres rescatado luego de un accidente en los camiones de la muerte, tras 
      despertar has perdido la memoria y tu única pista es tu PDA con la misión de matar 
      a un tal Strelok. La búsqueda por recuperar la memoria y encontrar a Strelok te lleva 
      a recorrer la Zona de exclusión.`,
    descripcion: `La segunda versión de Autumn Aurora ahora trae la atmósfera otoñal a 
      la Zona y revisa por completo los gráficos, el sonido y la jugabilidad de S.T.A.L.K.E.R.  
      Shadow of Chernobyl. El mod se basa en el Proyecto de recuperación de zonas más 
      nuevo, contiene AtmosFear oficial para SoC que nunca antes se había lanzado, el 
      mismo ha sido ampliamente rediseñado para que coincida con el estilo de otoño. 
      También tiene un nuevo Absolute Nature oficial para ShoC (nunca lanzado como 
      independiente) con nuevos modelos de árbol de AN3 CoP. El mod es la oportunidad 
      perfecta para todos los fans de S.T.A.L.K.E.R. a sumergirse nuevamente en la Zona 
      con un estilo completamente diferente. `,
    caracteristicas: [
      'Mejoras gráficas, de sonido y jugabilidad.',
      'Nuevas Zonas.',
      'Añade Atmosfear con estación de otoño.',
      'Agrega Absolute Nature.',
    ],
    enlaces: [
      {
        texto: 'Tráiler',
        url: 'https://www.youtube.com/watch?v=yGhV5w9‐KSE',
      },
      {
        texto: 'Mod',
        url: 'https://www.moddb.com/mods/autumn-aurora-compilation-mod/downloads/autumn-aurora-21-by-autumnal-wanderers?fbclid=IwAR1bqCT7b_88h8GOx5V6vTyBgEpfN01EK5ndDZYJMM8ww4cRP75vjmQKhkY',
      },
      {
        texto: 'Traducción al español',
        url: 'https://www.moddb.com/games/stalker/downloads/traduccin-a-espaol-de-autumn-aurora-21-ampliada?fbclid=IwAR0vassQ4_REdTEnrUSf675hwT0rXM6ih_mOTB-NOySuRS6fz0S-I367Mpk',
      },
      {
        texto: 'Modelos HD',
        url: 'https://www.moddb.com/mods/shadow-of-chernobyl-hd-models-addon/downloads/shoc-hd-models-addon?fbclid=IwAR1u8zv8UH85Mpn10eFAveS2822rAmCcp2qrqL33h26vCqwbdw9vMYeUb9g',
      },
      {
        texto: 'Texturas opcionales para los brazos de marcado',
        url: 'https://www.moddb.com/games/stalker/addons/better-hands-for-autumn-aurora-21?fbclid=IwAR0P8g05glQ3sfDJ5aQdsEMG1q1BIiXUXIYI8NP--dDjngKaGtHOkmjRTTg',
      },
      {
        texto: 'Addon para restablecer el hud',
        url: 'https://www.moddb.com/games/stalker/addons/vanilla-hud-info-for-autumn-aurora-21?fbclid=IwAR1o9yUGRSJeg0E39xpo8x7vaeUj5Lw6e_IJLS7uWMDym9dgrTjSuQ5ESxA',
      },
    ],
    portadaPath: '@soc/vanilla_mods/02/portada.webp',
    imagenesGaleria: [
      '@soc/vanilla_mods/02/1.webp',
      '@soc/vanilla_mods/02/2.webp',
      '@soc/vanilla_mods/02/3.webp',
      '@soc/vanilla_mods/02/4.webp',
    ],
    aclaraciones: [
      `Nota del traductor: es una mejora y ampliación de la traducción a Español del mod 
       Autumn Aurora 2.1 del usuario "wardust", es la traducción completa y no se 
       necesita la original. Solo copiar la carpeta "gamedata" en el directorio principal del 
       juego, sobrescribís cuando lo pida, sin miedo y  listo.`,
      `Importante: Normalmente el mod cambia los audios a ruso pero revisando en otras 
       páginas llegue a encontrar un comentario en inglés para eliminar los audios del mod: 
       "Elimine (o cambie el nombre) del contenido de la carpeta Gamedata\\Sounds
       \\Characters_voice EXCEPTO: Gamedata\\Sounds\\Characters_voices\\scenario\\bar
       \\radio_music Gamedata\\Sounds\\Characters_voice\\scenario\\megafon 
       Gamedata\\Sounds\\Characters_voice\\scenario\\video\\aa2_splash( dos archivos con _l 
       y _r) Alternativamente, descomprima esta carpeta de sus datos de juego y cópiela."`,
    ],
    isStandalone: false,
    juego: JuegoEnum.SHADOW_OF_CHERNOBYL,
    tipo: TipoEnum.VANILLA_MOD,
  },
  {
    autor: 'stalker‐mods.clan.su (Ferr‐um)',
    titulo: 'STALKER SHADOW OF CHERNOBYL UPDATE 1.4.2',
    traduccion: 'Kamtek & Danruhard Tenno',
    fecha_lanzamiento: '2023',
    sinopsis: `Eres rescatado luego de un accidente en los camiones de la muerte, tras 
      despertar  has  perdido la  memoria  y  tu  única pista  es  tu  PDA  con  la  misión de  matar  a  
      un  tal  Strelok. La  búsqueda por  recuperar  la  memoria y encontrar  a Strelok te lleva a 
      recorrer la Zona de exclusión.`,
    descripcion: `Es un nuevo mod global a modo de remake del juego S.T.A.L.K.E.R. Shadow of 
      Chernobyl con nuevos gráficos refinados y nuevas tecnologías junto a otras antiguas que 
      fueron recicladas. Se basa en OGSR‐Engine x64. Se hicieron cambios mínimos en la trama, 
      principalmente solo al comienzo del juego.`,
    caracteristicas: [
      'Mejoras graficas usando el motor OGSR.',
      'Modelos mejorados y reemplazados de objetos, armas, artefactos, etc.',
      'Modelos mejorados de personajes y animaciones.',
      'Clima, sonidos y efectos reemplazados y mejorados.',
      'Cambios en el equilibrio del juego.',
    ],
    aclaraciones: [
      'Nota de traducción: La traducción no está al 100% ya que hay algunos textos que no pude encontrar en los archivos, pero son muy pocos y no afectarán en nada a la jugabilidad.',
    ],
    enlaces: [
      {
        texto: 'Tutorial',
        url: 'https://www.youtube.com/watch?v=0bfwmKB3P4g',
      },
      {
        texto: 'Link al mod',
        url: 'https://drive.google.com/file/d/1Q-uqb-yZObG-s7d6zDBRq7tCxqsKPRNP/view',
      },
      {
        texto: 'Traducción al español',
        url: 'https://www.moddb.com/games/stalker/downloads/stalker-soc-update-traduccin-espaol',
      },
      {
        texto: 'Texturas Low Poly(para Pc`s humildes)',
        url: 'https://drive.google.com/file/d/1ED5iYDeQ6hvrILr3VWCUBJEA0dP1kMb2/view',
      },
      {
        texto: 'Texturas Low Poly Mirror',
        url: 'https://drive.google.com/file/d/1ZBi9YKEk9pMlzZPUwFror8_Q3CvUELxr/view',
      },
    ],
    portadaPath: '@soc/vanilla_mods/03/portada.webp',
    imagenesGaleria: [
      '@soc/vanilla_mods/03/1.webp',
      '@soc/vanilla_mods/03/2.webp',
      '@soc/vanilla_mods/03/3.webp',
      '@soc/vanilla_mods/03/4.webp',
    ],
    isStandalone: false,
    juego: JuegoEnum.SHADOW_OF_CHERNOBYL,
    tipo: TipoEnum.VANILLA_MOD,
  },
  {
    portadaPath: '@soc/historia/04/portada.webp',
    imagenesGaleria: [
      '@soc/historia/04/1.webp',
      '@soc/historia/04/2.webp',
      '@soc/historia/04/3.webp',
      '@soc/historia/04/4.webp',
    ],
    autor: 'Balhash Brothers Team',
    titulo: '28/12/2007',
    traduccion: 'samael229683',
    fecha_lanzamiento: '28/12/2007',
    sinopsis: `14 de abril de 2006. Después de una explosión en el territorio de la Central Nuclear 
        de Chernóbil, el equipo Delta aterriza en la zona afectada para investigar las causas de este 
        acontecimiento, pero el primer día se pierde la comunicación con ellos y el cuartel general 
        decide enviar a los equipos Alfa y Beta para buscarlos. Un explorador llamado Strelok 
        también fue enviado a la Zona. Durante la operación de búsqueda, "Beta" sufre una 
        emboscada y "Alpha" desaparece sin dejar rastro. El protagonista se enfrenta a una tarea 
        difícil: encontrar "Alfa", llegar a tiempo para ayudar a "Beta" y resolver el misterio del 
        equipo "Delta".`,
    descripcion: `Este mod está realizado bajo la base de SOC pero remasterizado en el motor 
        OGSR, segun el autor se busco trasladar la sensacion de Doom 3 por lo que casi no hay npc, 
        salvo en el bar, se considera un mod dificil, ya que enfrentaras ordas de mutantes, pero 
        tendras hasta la posibilidad de transportarte en vehiculo y usarlo como arma.`,
    caracteristicas: [
      'Historia totalmente nueva',
      'Amplia variedad de Zombies.',
      'Actualizado al motor OGSR.',
      'Paquete de Armas añadido.',
      'Se añadió Stalker Two-K',
      'Gran variedad de mutantes.',
    ],
    enlaces: [
      {
        texto: 'Parte 1',
        url: 'https://www.moddb.com/mods/stalker-zona-de-derrota-ogsr-repack-espaol-by-samael229683/downloads/stalker-zona-de-derrota-ogsr-repack-espaol-parte-1',
      },
      {
        texto: 'Parte 2',
        url: 'https://www.moddb.com/mods/stalker-zona-de-derrota-ogsr-repack-espaol-by-samael229683/downloads/stalker-zona-de-derrota-ogsr-repack-espaol-parte-2',
      },
      {
        texto: 'Parte 3',
        url: 'https://www.moddb.com/mods/stalker-zona-de-derrota-ogsr-repack-espaol-by-samael229683/downloads/stalker-zona-de-derrota-ogsr-repack-espaol-parte-3',
      },
    ],
    aclaraciones: [
      `Importante: una vez instalado, para que el juego funcione correctamente, es 
         necesario crear un acceso directo del ejecutable "xrEngine.exe", que se 
         encuentra en la carpeta raíz del juego llamada "bin_x64" y después agregar el 
         parámetro: (-steam) sin paréntesis, a la ruta de destino del acceso directo`,
      `Nota del traductor: En carpeta raíz del juego llamada "IMPORTANTE", 
        encontrarán programas extra e indicaciones para el funcionamiento  del mod.
        Se tradujo la gran mayoría de objetos, artefactos, armas y diálogos del juego, 
        encontrarás algun que otro detalle en ruso, pero no arruinará la experiencia.`,
      `No desperdicies las balas de plata, las necesitarás para pasar el mod y son 
         muy escasas.`,
      `Esta versión ya cuenta con parche de corrección así que no requiere agregarle 
        nada más.`,
      `Se agregó un parche "opcional" para aumentar el tamaño de la fuente de los 
        diálogos del juego, lo podrás encontrar dentro de la carpeta "Importante". Para 
        revertir los cambios solo copia el contenido de la carpeta llamada "copia de 
        seguridad" y borra el archivo llamado "talk_16.xml" que está en la carpeta "ui".`,
    ],
    isStandalone: true,
    juego: JuegoEnum.SHADOW_OF_CHERNOBYL,
    tipo: TipoEnum.HISTORIA,
  },
  {
    portadaPath: '@soc/historia/05/portada.webp',
    imagenesGaleria: [
      '@soc/historia/05/1.webp',
      '@soc/historia/05/2.webp',
      '@soc/historia/05/3.webp',
      '@soc/historia/05/4.webp',
    ],
    autor: 'dez0wave',
    titulo: 'priboi Story',
    traduccion: 'STALKERHispano',
    fecha_lanzamiento: '2008',
    sinopsis: `Un año después de la historia de Marcado. El teniente militar Priboi Slipchenko, es 
    enviado a la Zona... Una organización secreta, llamada UHSF, fue responsable del incidente 
    del '86. Tenían una base en Dead City pero los mercenarios los aniquilaron a finales de los 
    80. La organización se vino abajo y los últimos miembros vivos desaparecieron hasta hoy.
    Más de 20 documentos clasificados importantes estaban escondidos en la zona y necesitará 
    encontrarlos para completar el rompecabezas.`,
    descripcion: `este Mod puede presentar varios bugs, su trama es interesante y se le suman  
    muchas  adiciones nuevas  al  gameplay,  desde  personajes, vehículos e  ítems que resultan 
    en una experiencia que se siente nueva sin perder su base en lo clásico ya que es un mod que 
    nace en el año 2008 de los creadores de Lost Alpha.`,
    caracteristicas: [
      'Añadido un ENB personal.',
      'Estadísticas de artefactos ajustadas.',
      'Equilibrio de efectos y estadísticas de objetos.',
      'Modificación de algo de música para mayor inmersión.',
      'Se reelaboraron las texturas de la interfaz del inventario de artefactos para una versión adaptada.',
    ],
    enlaces: [
      {
        texto:
          'https://drive.google.com/file/d/1GiK0gJeyibKmtYASrRObzAwgnHtE3y5x/view?fbclid=IwAR3wLPq‐8pthy9_FGk5uqUrp3HPMwrlFPnX1VjUjgGrmVzrr1B7pCCVTEco',
        url: 'Enlace de descarga',
      },
    ],
    aclaraciones: [
      `Aclaración Importante: deben tener cuidado con los códigos de las puertas que aparecen en la pda del juego ya que no son todos correctos, en 
      la carpeta del mod esta un pdf con la guía, hay que buscarlos ahí ya que eso es un arma de doble filo porque algunos códigos abren puertas que 
      todavia no tenian que abrir y rompen la historia.`,
    ],
    isStandalone: true,
    juego: JuegoEnum.SHADOW_OF_CHERNOBYL,
    tipo: TipoEnum.HISTORIA,
  },
  {
    portadaPath: '@soc/historia/06/portada.webp',
    imagenesGaleria: [
      '@soc/historia/06/1.webp',
      '@soc/historia/06/2.webp',
      '@soc/historia/06/3.webp',
      '@soc/historia/06/4.webp',
    ],
    autor: 'Zaurus & Crew',
    titulo: 'APOCALIPSIS',
    traduccion: 'Cacho Ale',
    fecha_lanzamiento: '04/04/2011',
    sinopsis: `Luego de los acontecimientos de Shadow of Chernobyl, Strelok vuelve al 
    Cordón para al fin marcharse de la Zona, pero al llegar se encuentra con la noticia 
    de que han perdió contacto con Yantar, el curioso evento nos pone en la misión de 
    averiguar qué ocurre desembocando en una aventura cargada de misterios. `,
    descripcion: `Es un mod de campaña bastante líneal y llevadero. Es el primero de la 
    trilogía Apocalipsis de los desarrolladores Zaurus & Crew, seguido de S.T.A.L.K.E.R. ‐ Search ‐ DIES IRAE y  S.T.A.L.K.E.R. ‐ Duty ‐ Philosophy of War.`,
    caracteristicas: [
      'Estable y con buen rendimiento.',
      'Los enemigos respawnean rápido.',
      'Los cadáveres se acumulan y no desaparecen.',
      'Nuevos artefactos.',
      'Nuevas Armas.',
    ],
    enlaces: [
      {
        texto: 'Enlace de descarga',
        url: 'https://drive.google.com/file/d/1W8wY30DyM2hyp2T3bWpjuENCKVqXyVF_/view?fbclid=IwAR1b8k1C4ykK1BL4Cdz E96ZDsAJls‐KTz0k0qiMcH_ab_4lSX5oda1i0LK8',
      },
    ],
    isStandalone: true,
    juego: JuegoEnum.SHADOW_OF_CHERNOBYL,
    tipo: TipoEnum.HISTORIA,
  },
  {
    portadaPath: '@soc/historia/07/portada.webp',
    imagenesGaleria: [
      '@soc/historia/07/1.webp',
      '@soc/historia/07/2.webp',
      '@soc/historia/07/3.webp',
      '@soc/historia/07/4.webp',
    ],
    autor: 'Zaurus & Crew',
    titulo: 'S.T.A.L.K.E.R. search dies irae',
    traduccion: 'Cachoale',
    fecha_lanzamiento: '2011',
    sinopsis: `Durante el otoño de 2012, la radio de un grupo de búsqueda se estropea y a los  
    muchachos les quedan pocos suministros. Slaven, un ex soldado francotirador de la Infantería 
    Naval de Ucrania, decide ir solo a la planta de energía y echar un vistazo. Durante su expedición 
    por la central eléctrica suceden cosas extrañas que despertarán su interés.`,
    descripcion: `Este excelente mod es parte de los 5 mods desarrollados por Zaurus & Crew y 
    están conectados parcialmente entre sí por algunos personajes de Apocalypse, Duty: 
    Philosophy Of War, Fallen Star ‐ Mercenary's Honor, The Last Stalker.`,
    caracteristicas: [
      'Los requerimientos son los mismos que en Shadow of Chernobyl.',
      'La dificultad se puede catalogar como media.',
      'La configuración se guarda en la misma carpeta del mod, para no crear conflictos con otros mods instalados o con el propio SOC.',
      'Addons adaptados por Kamtek que mejoran gráficos y el aspecto técnico',
    ],
    enlaces: [
      {
        texto: 'Enlace de descarga',
        url: 'https://www.mediafire.com/file/740ktmcsht1qtxl/Dies_Irae_Spanish_Standalone_Repack.7z/file',
      },
    ],
    isStandalone: true,
    juego: JuegoEnum.SHADOW_OF_CHERNOBYL,
    tipo: TipoEnum.HISTORIA,
  },
  {
    portadaPath: '@soc/historia/08/portada.webp',
    imagenesGaleria: [
      '@soc/historia/08/1.webp',
      '@soc/historia/08/2.webp',
      '@soc/historia/08/3.webp',
      '@soc/historia/08/4.webp',
    ],
    autor: 'Zaurus & Crew',
    titulo: 'S.T.A.L.K.E.R. DUTY: THE PHOLOSOPHY OF WAR',
    traduccion: 'Kamtek',
    fecha_lanzamiento: '2012',
    sinopsis: `Nos centramos en el deber de los soldados y su papel en la guerra. La historia se desarrolla en una nueva 
    área del juego, donde los jugadores asumen el papel de un miembro del grupo militar Duty, que debe luchar contra 
    enemigos y tomar decisiones difíciles mientras se enfrenta a las consecuencias de sus acciones.`,
    descripcion: `El mod es el tercero de la saga de mods que inician con Apocalipsis de Zaurus' Crew, presenta nuevas 
    misiones y objetivos, así como armas, armaduras y equipos adicionales. Además, los jugadores deben equilibrar su 
    relación con otros personajes, lo que puede afectar la forma en que otros personajes interactúan con ellos en el 
    futuro. A esta edición se le ha integrado un pack de armas, se han corregido Bugs, se adaptó a la última versión de 
    Shadow of Chernobyl para brindar más estabilidad y adicional a ello se agregaron modelos HD para que trabajen 
    con este Mod.`,
    caracteristicas: [
      'Mapas de Call of Pripyat trasladados a Shadow of Chernobyl.',
      'Añade mejoras gráficas.',
      'Agrega texturas de alta resolución.',
      'Nuevos modelos de armas.',
      'Animaciones mejoradas.',
      'Añade nuevos ítems.',
    ],
    enlaces: [
      {
        texto: 'Enlace de descarga',
        url: 'https://drive.google.com/drive/folders/1J6wbAHBWw2JOiczt-FwKeJMP_M_CGTKZ?fbclid=IwAR1lIJrjWHhJGEmkqVmom1b1-A84pCNqAnQNN5GSxvHslOXzmaBeZNnlk5Y',
      },
    ],
    aclaraciones: [
      `Repack realizado por Ramon Retamar, por lo que no necesitas ams que descargar y descomprimir.
       Los savegames y la configuración se guardan en la misma carpeta del mod, para no crear conflictos con los 3 
       juegos o con otros mods.`,
    ],
    isStandalone: false,
    juego: JuegoEnum.SHADOW_OF_CHERNOBYL,
    tipo: TipoEnum.HISTORIA,
  },
  {
    portadaPath: '@soc/historia/09/portada.webp',
    imagenesGaleria: [
      '@soc/historia/09/1.webp',
      '@soc/historia/09/2.webp',
      '@soc/historia/09/3.webp',
      '@soc/historia/09/4.webp',
    ],
    autor: "Zaurus' Crew",
    titulo: 'Fallen Star',
    traduccion: 'Usando google translate',
    fecha_lanzamiento: '2013',
    sinopsis: `La historia nos pone en la piel de JJ que tiene la tarea de encontrar 
    y entregar un vehículo conducido por un personaje que forma parte de la 
    saga de mods de Zaurus. La misión nos lleva a diferentes lugares y te hace 
    interferir con la GRC, una corporación estadounidense que alquiló parte de 
    la Zona y se estableció allí.`,
    descripcion: `este Mod con historia alternativa para Shadow of Chernobyl es el 
    cuarto de la serie creada por Zaurus’ Crew, tiene lugar en varios mapas, puede 
    presentar una dificultad alta, por lo que se recomienda tener a mano una guía, 
    también puede experimentar varios bugs. Como dato adicional, existe una 
    secuela llamada “The Last Stalker” pero se encuentra sin traducir.`,
    caracteristicas: [
      'Nuevos mapas',
      'Añade nuevos personajes',
      'Nuevas Facciones',
      'Conducción de vehículos',
      'Se reelaboraron las texturas de la interfaz del inventario de artefactos para una versión adaptada',
    ],
    enlaces: [
      {
        texto: 'Enlace de descarga',
        url: 'https://drive.google.com/drive/folders/1Nmv_nJ109TrQF-gxLDHLdPrDUdOpo8QV',
      },
    ],
    aclaraciones: [
      `En la carpeta "Fallen Star Language Pack 1.1" están las 
      traducciones a distintos idiomas, para cambiar el idioma solamente hay que 
      sobrescribir unos archivos en gamedata, muy simple. 
      La configuración, los savegames y las capturas de pantalla se guardan en la 
      misma carpeta del mod.`,
    ],
    isStandalone: true,
    juego: JuegoEnum.SHADOW_OF_CHERNOBYL,
    tipo: TipoEnum.HISTORIA,
  },
  {
    portadaPath: '@soc/historia/10/portada.webp',
    imagenesGaleria: [
      '@soc/historia/10/1.webp',
      '@soc/historia/10/2.webp',
      '@soc/historia/10/3.webp',
      '@soc/historia/10/4.webp',
    ],
    autor: 'Team FOTO',
    titulo: 'F.O.T.O.G.R.A.F.',
    traduccion: 'Manu Flores con ayuda de Kamtek y Qokd',
    fecha_lanzamiento: '13/12/2013',
    sinopsis: `Un fotografo, reportero de guerra, viaja a la Zona “antes del comienzo 
    de los tiempos”, cuando aún no se ha determinado nada, cuando no existen 
    principios conocidos ni leyes establecidas, cuando sólo existe un “Algo” 
    misterioso y desconocido que tendrá ser descubierto, habiendo encontrado 
    cosas misteriosas e inexplicables en el camino, fenómenos y secretos.`,
    descripcion: `este Mod esta basado en Shadow of Chernóbyl y presenta un 
    gameplay que mezcla la nvestigación, aventura y superviviencia. Cuenta con 
    una gran variedad de misiones de historia y secundarias, siendo estas ultimas 
    alrededor de 60, dandote muchas horas de juego si eres completista. Este mod 
    ha sido muy elogiado y muy recomendado por la comunidad.`,
    caracteristicas: [
      'Basado en Shadow of Chernobyl.',
      'Misiones variadas.',
      'Nuevo sistema de Artefactos.',
      'Nuevas Mecánicas.',
      'Añade un paquete de armas.',
      'Actuaciones de voz.',
      'Buena optimización',
    ],
    enlaces: [
      {
        texto: 'Enlace de descarga',
        url: 'https://drive.google.com/drive/folders/1QmI5Pxzik7S1La-kj6U_i-JymX1nd8cM',
      },
      {
        texto: 'Enlace de descarga de Traduccion',
        url: 'https://www.moddb.com/games/stalker/addons/stalker-fotograf-mod-traduccin-al-espaol',
      },
    ],
    aclaraciones: [
      `Traducción al español en colaboración con Qokd y ayuda de 
       Kamtek. La mismt se encuentra al 99% excepto noticias dinámicas del PDA, 
       ciertas etiquetas de armas y misiones.`,
    ],
    isStandalone: true,
    juego: JuegoEnum.SHADOW_OF_CHERNOBYL,
    tipo: TipoEnum.HISTORIA,
  },
  {
    portadaPath: '@soc/historia/11/portada.webp',
    imagenesGaleria: [
      '@soc/historia/11/1.webp',
      '@soc/historia/11/2.webp',
      '@soc/historia/11/3.webp',
      '@soc/historia/11/4.webp',
    ],
    autor: 'dez0wave',
    titulo: "Lost Alpha Developer's Cut",
    traduccion: 'Keisirius',
    fecha_lanzamiento: '2014',
    sinopsis: `Eres rescatado luego  de  un  accidente  en  los  camiones  de  la muerte,  tras  despertar has  
    perdido la memoria y tu única pista es tu PDA con la misión de matar a un tal Strelok. La búsqueda por 
    recuperar la memoria y encontrar a Strelok te lleva a recorrer la Zona de exclusión.`,
    descripcion: `este mod nace de versiones previas al lanzamiento del primer S.T.A.L.K.E.R., el 
    equipo desarrollador se dispuso a recopilar información, bluids antiguas, recrear mapas y 
    conceptos que se habían eliminado en la versión final del juego. Lost Alpha es un 
    desarrollo que expande el título  original convirtiéndolo en una nueva experiencia.`,
    caracteristicas: [
      'Nuevos Mapas.',
      'Nuevos trajes, armas y artefactos.',
      'Gráficos mejorados.',
      'Sistema de conducción.',
      'Nuevos mutantes.',
      'Historia expandida.',
    ],
    enlaces: [
      {
        texto: 'Enlace descarga parte 1',
        url: 'https://www.moddb.com/mods/lost-alpha/downloads/stalker-lost-alpha-v14007-dc-1-of-6',
      },
      {
        texto: 'Enlace descarga parte 2',
        url: 'https://www.moddb.com/mods/lost-alpha/downloads/stalker-lost-alpha-v14007-dc-2-of-6',
      },
      {
        texto: 'Enlace descarga parte 3',
        url: 'https://www.moddb.com/mods/lost-alpha/downloads/stalker-lost-alpha-v14007-dc-3-of-6',
      },
      {
        texto: 'Enlace descarga parte 4',
        url: 'https://www.moddb.com/mods/lost-alpha/downloads/stalker-lost-alpha-v14007-dc-4-of-6',
      },
      {
        texto: 'Enlace descarga parte 5',
        url: 'https://www.moddb.com/mods/lost-alpha/downloads/stalker-lost-alpha-v14007-dc-5-of-6',
      },
      {
        texto: 'Enlace descarga parte 6',
        url: 'https://www.moddb.com/mods/lost-alpha/downloads/stalker-lost-alpha-v14007-dc-6-of-6',
      },
      {
        texto: 'Enlace de descarga de traducción',
        url: 'https://www.moddb.com/mods/lost-alpha/addons/stalker-lost-alpha-extended-traduccin-en-espaol-v14007792',
      },
      {
        texto: 'Enlace descarga parche de correcion',
        url: 'https://www.moddb.com/downloads/arreglo-de-traduccion-a-espaol-para-stalker-lost-alpha',
      },
    ],
    aclaraciones: [
      'extrae la carpeta "gamedata" en el directorio  principal del juego y sustituye todos los archivos en caso de que te lo pida.',
      'La traducción no tiene "tildes" ni "ñ" alguna, puesto que el juego no lo soporta dado que el inglés y el ruso no las usan, en vez de "ñ" puse "nh" que la fonética suena similar',
      'La versión de kamtek es la 0.4 y arregla algunos errores de la traducción de Keisirius.',
      'esta versión es Lost Alpha Developer’s cut, la cual se desprende del Lost Alpha original. No confundir con Lost Alpha DC Extended ya  que no son exactamente lo mismo.',
    ],
    isStandalone: false,
    juego: JuegoEnum.SHADOW_OF_CHERNOBYL,
    tipo: TipoEnum.HISTORIA,
  },
  {
    portadaPath: '@soc/historia/12/portada.webp',
    imagenesGaleria: [
      '@soc/historia/12/1.webp',
      '@soc/historia/12/2.webp',
      '@soc/historia/12/3.webp',
      '@soc/historia/12/4.webp',
    ],
    autor: 'OGSR Team',
    titulo: 'Ogse Old Good Stalker EVOLUTION 0.6.9.3',
    traduccion: 'Manu Flores con ayuda de Qokd y Kamtek',
    fecha_lanzamiento: '04/08/2016',
    sinopsis: `Eres rescatado luego de un accidente en los camiones de la muerte, tras 
    despertar has perdido la memoria y tu única pista es tu PDA con la misión de matar a 
    un tal Strelok. La búsqueda por recuperar la memoria y encontrar a Strelok te lleva a 
    recorrer la Zona de exclusión.`,
    descripcion: `Mod global para Stalker Shadow of Chernobyl destinado a recrear una 
    Zona altamente atmosférica con la mayor calidad posible, estabilidad del juego, 
    jugabilidad y lealtad a los cánones del género Sci‐Fi. OGSE deja la misión principal y 
    las misiones secundarias del SOC del juego base prácticamente intacta, pero se basa 
    en ellas para ampliar la experiencia a la que la saga original nos tenía acostumbrados.`,
    caracteristicas: [
      'Nuevos Mapas y algunos modificados.',
      'Nuevas, armas e ítems.',
      'Se añaden nuevas misiones y personajes.',
      'Nuevas mecánicas.',
      'Nuevos mutantes.',
      'Historia expandida.',
      'Mejor estabilidad y rendimiento.',
      'Añade mejoras gráficas.',
    ],
    enlaces: [
      {
        texto: 'Enlace de descarga parte 1',
        url: 'https://www.moddb.com/mods/old-good-stalker-evolution/downloads/ogse-0693-final-20-standalone-part-1',
      },
      {
        texto: 'Enlace de descarga parte 2',
        url: 'https://www.moddb.com/mods/old-good-stalker-evolution/downloads/ogse-0693-final-20-standalone-part-2',
      },
      {
        texto: 'Enlace de descarga parte 3',
        url: 'https://www.moddb.com/mods/old-good-stalker-evolution/downloads/ogse-0693-final-20-standalone-part-3',
      },
      {
        texto: 'Enlace de descarga parte 4',
        url: 'https://www.moddb.com/mods/old-good-stalker-evolution/downloads/ogse-0693-final-20-standalone-part-4',
      },
      {
        texto: 'Enlace de descarga parte 5',
        url: 'https://www.moddb.com/mods/old-good-stalker-evolution/downloads/ogse-0693-final-20-standalone-part-5',
      },
      {
        texto: 'Enlace de descarga parte 6',
        url: 'https://www.moddb.com/mods/old-good-stalker-evolution/downloads/ogse-0693-final-20-standalone-part-6',
      },
      {
        texto: 'Enlace de parche 2.10',
        url: 'https://www.moddb.com/mods/old-good-stalker-evolution/downloads/ogse-0693-final-20-standalone-patch-210r',
      },
      {
        texto: 'Enlace de parche Fix',
        url: 'https://www.moddb.com/mods/old-good-stalker-evolution/downloads/stalker-ogse-0693-patch-2-10-revised-fix2',
      },
      {
        texto: 'Enlace de descarga de traducción',
        url: 'https://www.moddb.com/games/stalker/addons/stalker-old-good-stalker-evolution-0693-en-espaol',
      },
    ],
    aclaraciones: [
      `Instalar en el siguiente orden hasta la traducción (al instalar un 
       parche siempre abrir y cerrar antes y después el juego hacer lo mismo con la traducción 
       para que se creen las carpetas correspondientes).
       Por último la traducción al español (copiar o arrastrar el contenido de la traducción en 
       el directorio del mod y darle en reemplazar si a todo) - Traducción al 99%, faltan las 
       noticias dinámicas del PDA.`,
    ],
    isStandalone: true,
    juego: JuegoEnum.SHADOW_OF_CHERNOBYL,
    tipo: TipoEnum.HISTORIA,
  },
  {
    portadaPath: '@soc/historia/13/portada.webp',
    imagenesGaleria: [
      '@soc/historia/13/1.webp',
      '@soc/historia/13/2.webp',
      '@soc/historia/13/3.webp',
      '@soc/historia/13/4.webp',
    ],
    autor: 'Blackneed  - AMK Team',
    titulo: 'Left To Die Enhaced Edition',
    traduccion: 'Kamtek',
    fecha_lanzamiento: '2018',
    sinopsis: `El joven Sergey viaja desde la ciudad al campo para despejar la mente, luego 
    de un par de semanas, 2 sujetos extraños invaden su campamento y ante la hostilidad, 
    Sergey se defiende utilizando un hacha. El violento episodio lo impulsa a correr hacia la 
    granja más cercana y desde ahí tendrá que sobrevivir recorriendo varios lugares mientras 
    se enfrenta ante una amenaza zombis y los secretos tras este desastre.`,
    descripcion: `Mod Basado en el motor de Stalker pero presentando un apocalipsis zombi 
    en lugar de lo que acostumbramos, también incluye una serie de mejoras estéticas y 
    correcciones únicas directamente desde los foros Rusos. La historia no es lineal pero 
    presenta un secreto que iremos revelando mientras avanzamos. A medida que 
    progresemos, habrá personajes que nos darán misiones impulsándonos a distintas 
    ubicaciones.`,
    caracteristicas: [
      'Nuevos Mapas.',
      'Nuevas armas e ítem pero los mismos son escasos.',
      'Se añaden como enemigos Zombies, animales, militares y supervivientes.',
      'Se refinan mecánicas conocidas como sed, hambre y sueño.',
      'Requisitos por encima de Shadow of Chernobyl.',
    ],
    enlaces: [
      {
        texto: 'Enlace de descarga de la traducción',
        url: 'https://www.moddb.com/games/stalker/downloads/left-to-die-enhaced-edition-espaol',
      },
      {
        texto: 'Enlace del setup',
        url: 'https://drive.google.com/file/d/1FwyE1-fXtL58HWZcQDOB_0P518jYQZ8Z/view',
      },
      {
        texto: 'Enlace de descarga parte 1',
        url: 'https://drive.google.com/file/d/1M5DAE06s5y8J_V1NY-mNzi6X9JPpBUkt/view',
      },
      {
        texto: 'Enlace de descarga parte 2',
        url: 'https://drive.google.com/file/d/1Bg5FTRevWRd2K1qDi6aswgHiVqvVzssC/view',
      },
      {
        texto: 'Enlace alternativo de descarga',
        url: 'https://drive.google.com/drive/folders/1OOBepgjYBZhwlhd8hHeFb8dEpSyy5o2m?fbclid=IwAR0K6B9X11K6jiA2Bt',
      },
    ],
    aclaraciones: [
      `Para instalar deben presionar en el ejecutable (Left To Die.exe) y al abrirse la ventana 
      presionar "Extract”. Ahora tendrán que esperar y una vez que finalice la extracción 
      (Requiere alrededor de 10GB de espacio) deben buscar el ejecutable del Mod y crear 
      un acceso directo.`,
      'Este Mod consume bastantes recursos y no es posible ejecutarlo en iluminación estática.',
    ],
    isStandalone: true,
    juego: JuegoEnum.SHADOW_OF_CHERNOBYL,
    tipo: TipoEnum.HISTORIA,
  },
  {
    portadaPath: '@soc/historia/14/portada.webp',
    imagenesGaleria: [
      '@soc/historia/14/1.webp',
      '@soc/historia/14/2.webp',
      '@soc/historia/14/3.webp',
      '@soc/historia/14/4.webp',
    ],
    autor: 'Zekhan',
    titulo: 'Goldsphere Completion',
    traduccion: 'Google Translate',
    fecha_lanzamiento: '08/09/2018',
    sinopsis: `Un Stalker novato debe saldar varias cuentas por lo que decide intentar 
    ingresar a la Zona burlando el perímetro, pero es capturado por los militares y 
    encarcelado. Ahora deberá pensar un plan de escape y lograr su objetivo en la Zona.`,
    descripcion: `Mod muy famoso basado libremente en el libro Roadside Piknic, el 
    mismo suele corromper las partidas, a pesar de ese defecto, el mod añade mucho 
    contenido interesante por lo cual vale la pena probarlo.`,
    caracteristicas: [
      'Añade un sistema de reputación.',
      'Agrega un elaborado sistema de supervivencia (desde provisiones hasta cocina).',
      'La baja salud afecta las acciones del jugador.',
      'Permite llevar compañeros.',
      'Se pueden reparar autos y obtener partes.',
      'Nuevos artefactos.',
    ],
    enlaces: [
      {
        texto: 'Enlace de descarga',
        url: 'https://disk.yandex.ru/d/8ruKmVoz3LYVns?fbclid=IwAR2nAHuc0VBZfm8MlyVRE2THMifg3ZE1JNhTB_SwxEKS7rnu 2Yq4YX8yjEc',
      },
      {
        texto: 'Enlace de descarga de traducción',
        url: 'http://www.mediafire.com/file/3cjkedfl04k110a/Golden+Ball++Completion+Language+Pack+1.0.zip?fbclid=IwAR2m4VrlM2RL91jOD4A3fJC3MlUNHUwX6Sd_MRbhPD6‐1SynA37VQZVBOnI',
      },
    ],
    aclaraciones: [
      'La traducción se descomprime y se copian y pegan los archivos en gamedata, solo revisa las rutas de instalación.',
    ],
    isStandalone: true,
    juego: JuegoEnum.SHADOW_OF_CHERNOBYL,
    tipo: TipoEnum.HISTORIA,
  },
];

export default MODS;
