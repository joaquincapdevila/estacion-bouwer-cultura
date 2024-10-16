import Image from "next/image";
import estacion from "../../../public/estacion.jpg";
export default function Propuestas() {
  return (
    <div className="min-h-screen flex flex-col max-w-5xl items-center justify-between pt-24 m-auto overflow-hidden">
      <section className="py-16 px-4 sm:p-6 md:px-8 m-auto flex flex-col">
        <h2 className="text-4xl font-extrabold mb-6">Propuestas</h2>
        <div className="py-4 text-lg">
          <h5 className="mb-2 text-xl font-semibold">
            Principales funciones del área:
          </h5>
          <ul className="space-y-1 list-disc list-inside mb-2">
            <li>
              Propiciar espacios de encuentro, articulación de procesos sociales
              y culturales que posibiliten la inclusión de la población.
            </li>
            <li>
              Promover la educación a través del acceso a las artes, la historia
              y la diversidad cultural.
            </li>
            <li>
              Garantizar la implementación de programas culturales para
              enriquecer la experiencia educativa y fomentar el aprendizaje.
            </li>
            <li>
              Garantizar los derechos culturales permitiendo el acceso al arte,
              actividades de formación y capacitación en las diferentes áreas
              artísticas y culturales.
            </li>
            <li>
              Brindar apoyo a la creación artística local y fomentar el
              intercambio cultural.
            </li>
          </ul>
          <p>
            Encargada Área de Cultura: Daniela Arce- Valeria Arce. <br />
            Contacto:{" "}
            <span className="font-semibold underline decoration-blue-500">
              estacionculturalbouwer@gmail.com
            </span>{" "}
            <br />
            Teléfono:
          </p>
        </div>
        <div className="py-6">
          <Image
            width={500}
            height={400}
            src={estacion}
            className="w-full h-60 object-cover rounded-lg sm:h-[400px]"
            alt="estacion de bouwer"
          />
        </div>
      </section>
    </div>
  );
}
