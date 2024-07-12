import Image from "next/image";
import hola from "../../public/street.svg";
import { Actividad } from "./ui/actividad";
import { Heading } from "./ui/heading";
export default function Home() {
  return (
    <main className="flex flex-col max-w-5xl items-center justify-between pt-24 m-auto overflow-hidden">
      <section className="py-16 px-4 sm:p-6 md:px-8 m-auto">
        <Heading />
      </section>
      <section className="py-16 px-4 sm:p-6 md:px-8">
        <Image
          width={500}
          height={200}
          src={hola}
          className="block w-full"
          alt="..."
        />
      </section>
      <section className="py-16 px-4 sm:p-6 md:px-8 m-auto">
        <Actividad />
      </section>
    </main>
  );
}
