import Image from "next/image";
import estacion1 from "../../../public/estacion2.jpg";
import jornadaArtistica from "../../../public/jornada-artistica.jpg";
import jornadaArtistica1 from "../../../public/jornada-artistica1.jpg";
import jornadaArtistica2 from "../../../public/jornada-artistica2.jpg";
import jornadaArtistica3 from "../../../public/jornada-artistica3.jpg";
import jornadaArtistica4 from "../../../public/jornada-artistica4.jpg";

export function NoticiaPrimaria(props) {
  return (
    <article
      class="p-4 md:p-8"
      id="about"
      role="tabpanel"
      aria-labelledby="about-tab">
      <Image
        class="h-60 rounded-lg object-cover pb-2"
        src={jornadaArtistica4}
        alt="image description"
        width={600}
        height={300}
      />
      <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
        {props.categoria}{" "}
      </span>
      <h2 class="mb-3 text-2xl font-extrabold tracking-tight border-b-2 border-transparent hover:text-red-600 hover:border-red-300 dark:hover:text-red-300">
        {props.title}
      </h2>
      <p class="mb-3 text-gray-500 dark:text-gray-400">{props.descripcion}</p>
      <a
        href="#"
        class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
        Learn more
        <svg
          class=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </a>
    </article>
  );
}

export function Noticia(props) {
  return (
    <article
      class="p-4 md:p-8 border-b border-red-300"
      id="about"
      role="tabpanel"
      aria-labelledby="about-tab">
      <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
        {props.categoria}
      </span>
      <h2 class="mb-3 text-2xl font-extrabold tracking-tight border-b-2 border-transparent hover:text-red-600 hover:border-red-300 dark:hover:text-red-300">
        {props.title}
      </h2>
      <p class="mb-3 text-gray-500 dark:text-gray-400">{props.decripcion}</p>
      <a
        href="#"
        class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
        Learn more
        <svg
          class=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </a>
    </article>
  );
}
