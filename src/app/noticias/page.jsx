"use client";
import { Suspense, useEffect, useState } from "react";
import { noticiasjson } from "../lib/placeholder-data";
import { ListNoticias, NoticiaPrimaria } from "../ui/noticia";
import { NoticiaSkeleton } from "../ui/skeletons";
import Link from "next/link";

export default function Noticias() {
  const [noticiaMasNueva, setNoticiaMasNueva] = useState(null);

  useEffect(() => {
    if (noticiasjson.length) {
      const masNueva = noticiasjson.reduce((prev, current) =>
        new Date(prev.fecha) > new Date(current.fecha) ? prev : current
      );
      setNoticiaMasNueva(masNueva);
    }
  }, []);

  return (
    <main className="min-h-screen grid grid-cols-2 gap-12 max-w-7xl pt-24 m-auto overflow-hidden">
      <section className="max-h-screen col-span-2 lg:col-span-1 bg-gumbo-200 rounded-lg shadow-lg ">
        {noticiaMasNueva && <NoticiaPrimaria noticia={noticiaMasNueva} />}
      </section>
      <section className="max-h-screen lg:overflow-y-auto col-span-2 lg:col-span-1 bg-gumbo-200 rounded-lg shadow-lg ">
        <Suspense fallback={NoticiaSkeleton}>
          <ListNoticias />
        </Suspense>
      </section>
    </main>
  );
}
