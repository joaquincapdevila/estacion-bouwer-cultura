"use client";
import Image from "next/image";
import { noticiasjson } from "../lib/placeholder-data";
import { useState } from "react";
import jornadaArtistica4 from "../../../public/jornada-artistica4.jpg";

export function ListNoticias(props) {
  return (
    <ul className="flex flex-col-reverse">
      {noticiasjson.map((data) => (
        <li key={data.id}>
          <Noticia
            categoria={data.categoria}
            title={data.evento}
            descripcion={data.descripcion}
          />
        </li>
      ))}
    </ul>
  );
}
export function NoticiaPrimaria({ noticia }) {
  return (
    <article
      className="p-4 md:p-8"
      id="about"
      role="tabpanel"
      aria-labelledby="about-tab">
      <Image
        className="h-60 rounded-lg object-cover pb-2"
        src={jornadaArtistica4}
        alt="image description"
        width={600}
        height={300}
      />
      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
        {noticia.categoria}
      </span>
      <h2 className="mb-3 text-2xl font-extrabold tracking-tight border-b-2 border-transparent hover:text-gumbo-950 hover:border-gumbo-600">
        {noticia.evento}
      </h2>
      <p className="mb-3">{noticia.descripcion}</p>
      <a
        href="#"
        className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
        Leer más
        <svg
          className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
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

export function Noticia({ categoria, title, descripcion }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  return (
    <article
      className="p-4 md:p-8 border-b border-gumbo-300"
      id="about"
      role="tabpanel"
      aria-labelledby="about-tab">
      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
        {categoria}
      </span>
      <h2 className="mb-3 text-2xl font-extrabold tracking-tight border-b-2 border-transparent hover:text-gumbo-950 hover:border-gumbo-600">
        {title}
      </h2>
      <p className="mb-3">
        {showFullDescription ? descripcion : `${descripcion.slice(0, 100)}...`}
      </p>
      {descripcion.length > 100 && (
        <a
          href="#"
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
          {showFullDescription ? "Leer menos" : "Leer más"}
          <svg
            className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
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
      )}
    </article>
  );
}
