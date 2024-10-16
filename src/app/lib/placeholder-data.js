import nosotros from "../../../public/nosotros.svg";
import inicio from "../../../public/inicio.svg";
import propuestas from "../../../public/propuestas.svg";
import Noticias from "../../../public/noticias.svg";
import actividades from "../../../public/actividades.svg";

const stuff = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Mariana Daniela Arce",
    cargo: "Directora Área de Cultura",
    email: "daniela@gmail.com",
    image_url: "/invierno20.jpg",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Valeria Arce",
    cargo: "Encargada Área de Cultura",
    email: "vale@gmail.com",
    image_url: "/invierno20.jpg",
  },
];

const customers = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    name: "Hector Simpson",
    email: "hector@simpson.com",
    image_url: "/customers/hector-simpson.png",
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    name: "Steven Tey",
    email: "steven@tey.com",
    image_url: "/customers/steven-tey.png",
  },
  {
    id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
    name: "Steph Dietz",
    email: "steph@dietz.com",
    image_url: "/customers/steph-dietz.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    name: "Emil Kowalski",
    email: "emil@kowalski.com",
    image_url: "/customers/emil-kowalski.png",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
  },
];

const menu = [
  {
    nombre: "Inicio",
    href: "/",
    span: "",
    src: inicio,
  },
  {
    nombre: "Propuestas",
    href: "/propuestas",
    span: "",
    src: propuestas,
  },
  {
    nombre: "Nosotros",
    href: "/nosotros",
    span: "",
    src: nosotros,
  },
  {
    nombre: "Noticias",
    href: "/noticias",
    span: "",
    src: Noticias,
  },
];

const eventos = {
  event: "Vacaciones de Invierno en Bouwer",
  dates: [
    {
      day: "Jueves 11 de julio",
      activities: [
        {
          time: "15:00 hs",
          description: "Taller de Collage",
        },
        {
          time: "16:30 hs",
          description: "Construcción de Máscaras",
        },
        {
          time: "17:00 hs",
          description: "Cine en el salon",
        },
      ],
    },
    {
      day: "Viernes 12 de julio",
      activities: [
        {
          time: "15:00 hs",
          description: "Taller de Modelado",
        },
        {
          time: "16:30 hs",
          description: "Juegos con masa de sal",
        },
        {
          time: "17:00 hs",
          description: "Cine en el salon",
        },
      ],
    },
  ],
  notes: "Traer ropa cómoda y delantal para trabajar",
  location: "Salón Municipal Martín Fierro",
  sponsors: ["Municipalidad de Bouwer", "Área de Cultura"],
};

const noticiasjson = [
  {
    evento: "Jornada artística en la escuela Independencia Argentina",
    fecha: "Jul 19, 2024",
    categoria: "Arte",
    comentarios: 0,
    descripcion:
      "El lunes 1 de julio, el área de Cultura de la Municipalidad de Bouwer organizó una jornada artística con los alumnos de la escuela Independencia Argentina donde se trabajó con la obra de Joan Miró, pintor y escultor español representante del arte abstracto. A través de cuadernillos, dados y el manejo de diversas técnicas, los alumnos abordaron la obra del artista reconocido por trabajar en sus obras con formas simples y geométricas como lunas y estrellas. Nos informa Daniela Arce.",
  },
  {
    evento: "Vacaciones de Invierno en Bouwer",
    fecha: "Jul 19, 2024",
    categoria: "Arte",
    comentarios: 0,
    descripcion:
      "Las actividades del área de Cultura de la Municipalidad de Bouwer brindaron momentos inolvidables a cerca de 100 niños los días jueves 11 y viernes 12 de julio en el Salón Municipal Martín Fierro. Cada jornada comenzaba con la bienvenida de Daniela y Valeria Arce, quienes lideraron un taller artístico y creativo. Los jóvenes artistas crearon sobre cartón y papel con colores y collage el jueves, mientras que el viernes experimentaron con masa de sal. El éxito de estas actividades se debe, en parte, a la colaboración del Grupo Alpha y su coordinadora, que repartieron pururú y jugo durante las proyecciones de películas infantiles, complementando la experiencia artística. Padres y madres también participaron, compartiendo mates y agradeciendo esta iniciativa que ofreció a los niños una mezcla de diversión y aprendizaje en su receso invernal.",
  },
  {
    evento: "Nueva Jornada Artística en la Escuela Independencia Argentina",
    fecha: "Ago 9, 2024",
    categoria: "Arte",
    comentarios: 0,
    descripcion:
      "El lunes 5 de agosto, el Área de Cultura de la Municipalidad de Bouwer llevó a cabo la tercera jornada artística con los alumnos de la Escuela Independencia Argentina. Los estudiantes plasmaron sus vivencias invernales en pizarrones y tizas, además de aprender sobre la teoría del color y el círculo cromático mediante la pintura acrílica. Esta jornada, parte del plan de colaboración con la escuela, fue la tercera vez que Valeria y Daniela Arce lideraron una mañana creativa junto a los alumnos y la directora. Anteriormente, en julio, trabajaron sobre la obra de Joan Miró, y en mayo, prepararon el acto del 25 de mayo. El objetivo de estas jornadas es fomentar el acceso a la cultura y las artes, promoviendo el pensamiento crítico, la sensibilidad estética y la valoración de la diversidad cultural entre los niños de Bouwer. El plan es continuar con una jornada artística mensual hasta fin de año.",
  },
  {
    evento: "Teatro y risas en el Jardín Florentino Bustos",
    fecha: "Ago 24, 2024",
    categoria: "Arte",
    comentarios: 0,
    descripcion:
      "En celebración del Día de las Infancias, el Grupo Paradiso y Teseo Kokonos llevaron a cabo la obra «El país de los colores» en el jardín de infantes Francisco Florentino Bustos. Este evento fue posible gracias a la coordinación de la Universidad Provincial de Córdoba, en conjunto con el área de extensión, el área de Cultura de la Municipalidad de Bouwer, y la participación activa del personal docente del jardín. Los niños y niñas de las salitas de 3, 4 y 5 años disfrutaron de una mañana distinta y enriquecedora dentro de sus rutinas pedagógicas.",
  },
  {
    evento: "Día de las Infancias en la Muni de Bouwer",
    fecha: "Ago 30, 2024",
    categoria: "Arte",
    comentarios: 0,
    descripcion:
      "El sábado 24 de agosto, desde las 15:00 hasta las 18:00 horas, la Municipalidad de Bouwer celebró el Día de las Infancias con una jornada llena de juegos, actividades artísticas y bailes, organizada por las áreas de Deportes y Cultura. El evento contó con la participación del intendente Gustavo Braida, personal de la municipalidad y el presidente del Ente Metropolitano Córdoba, Rodrigo Fernández. Para culminar esta jornada inolvidable, se sortearon tres bicicletas entre los niños presentes, donadas por el Ente Metropolitano.",
  },
];

module.exports = {
  stuff,
  customers,
  menu,
  eventos,
  noticiasjson,
};
