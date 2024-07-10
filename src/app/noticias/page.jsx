import { customers, noticiasjson } from "../lib/placeholder-data";
import { Noticia, NoticiaPrimaria } from "../ui/noticia";

export default function Noticias() {
  return (
    <main className="min-h-screen grid grid-cols-2 max-w-7xl pt-24 m-auto overflow-hidden">
      <section className="max-h-screen">
        <NoticiaPrimaria
          title={noticiasjson.evento}
          categoria={noticiasjson.categoria}
          descripcion={noticiasjson.descripcion}
        />
      </section>
      <section className="max-h-screen overflow-y-auto">
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
