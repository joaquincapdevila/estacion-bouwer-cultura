import Image from "next/image";
import { CardStuff } from "../ui/card";

export default function Nosotros() {
  return (
    <main className="min-h-screen flex flex-col max-w-5xl items-center justify-between pt-24 m-auto overflow-hidden">
      <section className="py-16 px-4 sm:p-6 md:px-8 m-auto">
        <h2 className="text-4xl font-extrabold mb-6 ">Nosotros</h2>
        <div className="w-500 h-400 object-cover text-white">
          <p className="py-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-300 from-red-500">
              Estación Cultural Bouwer
            </span>
            <br />
            <span className="font-semibold underline decoration-blue-500">
              Horarios de atención: lunes 9h a 12h.
            </span>
            <br />
            <span className="font-semibold underline decoration-red-500">
              Municipalidad de Bouwer.
            </span>
          </p>
          <div className="">
            <p className="py-2">
              El área de cultura tiene por meta principal generar procesos de
              desarrollo cultural destinados a la preservación, transmisión y
              fomento de muestras artísticas y culturales propias de la
              comunidad.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <p className="col-span-2 sm:col-span-1">
                <span className="font-semibold underline text-transparent bg-clip-text bg-red-400 decoration-indigo-500">
                  Misión:
                </span>{" "}
                Nuestra misión es promover y preservar la riqueza cultural de
                nuestro pueblo. Trabajamos para fomentar la participación de la
                comunidad en actividades culturales, facilitando el acceso a la
                educación artística, la promoción de artistas locales y la
                difusión de nuestras tradiciones y patrimonio.
              </p>
              <p className="col-span-2 sm:col-span-1">
                <span className="font-semibold underline text-transparent bg-clip-text bg-red-400 decoration-green-500">
                  Visión:
                </span>{" "}
                Aspiramos a ser un referente cultural en la región, reconocidos
                por nuestra diversidad, creatividad y compromiso con la
                identidad local. Buscamos fortalecer la cohesión social a través
                del arte y la cultura, contribuyendo al desarrollo integral de
                nuestra comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:p-6 md:px-8 m-auto w-full flex">
        <CardStuff />
      </section>
    </main>
  );
}
