import { Heading } from "./ui/heading";
import Image from "next/image";
import estacion from "../../public/estacion.jpg";
import estacion2 from "../../public/estacion2.jpg";
import { CardStuff } from "./ui/card";
import Propuestas from "./propuestas/page";
import Nosotros from "./nosotros/page";
export default function Home() {
  return (
    <div className="flex flex-col gap-8 max-w-5xl items-center justify-between pt-24 m-auto overflow-hidden">
      <section className="flex flex-col sm:flex-row gap-4 py-16 px-4 sm:p-6 md:px-8 m-auto">
        <Heading />
        <Image
          width={500}
          height={600}
          src={estacion2}
          className="h-[300px] sm:h-auto sm:max-w-80 ms-auto  object-cover rounded-lg"
          alt="estacion de bouwer"
        />
      </section>
      <section className="bg-gumbo-500 rounded-3xl">
        <Propuestas />
      </section>
      <section className="bg-gumbo-500 rounded-3xl">
        <Nosotros />
      </section>
    </div>
  );
}
