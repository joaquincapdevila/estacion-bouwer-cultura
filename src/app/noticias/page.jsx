import { customers, noticiasjson } from "../lib/placeholder-data";
import { Noticia, NoticiaPrimaria } from "../ui/noticia";

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
        <ul>
          {customers.map((data) => (
            <li key={data.id}>
              <Noticia />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
