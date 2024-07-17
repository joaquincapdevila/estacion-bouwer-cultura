import { Suspense } from "react";
import { noticiasjson } from "../lib/placeholder-data";
import { ListNoticias, NoticiaPrimaria } from "../ui/noticia";
import { NoticiaSkeleton } from "../ui/skeletons";

export default function Noticias() {
  return (
    <main className="min-h-screen grid grid-cols-2 gap-12 max-w-7xl pt-24 m-auto overflow-hidden">
      <section className="max-h-screen col-span-2 lg:col-span-1">
        <NoticiaPrimaria
          title={noticiasjson.evento}
          categoria={noticiasjson.categoria}
          descripcion={noticiasjson.descripcion}
        />
      </section>

      <section className="max-h-screen lg:overflow-y-auto col-span-2 lg:col-span-1">
        <NoticiaSkeleton />
        {/* <Suspense fallback={NoticiaSkeleton}>
          <ListNoticias />
        </Suspense> */}
      </section>
    </main>
  );
}
