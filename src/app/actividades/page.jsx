import { GigantImgGrey } from "../ui/imagenes";
import friendship from "../../../public/friendship.svg";
import { Noticia } from "../ui/noticia";
import { TimeLineInvierno } from "../ui/timeline";
import Image from "next/image";

export default function Actividades() {
  return (
    <main className="flex flex-col max-w-5xl items-center justify-between pt-24 m-auto overflow-hidden">
      <section className="py-16 px-4 sm:p-6 md:px-8 m-auto flex flex-col">
        <h2 className="text-4xl font-extrabold dark:text-white ">
          Actividades
        </h2>
        <Image
          class="h-auto w-full rounded-lg"
          src={friendship}
          height={781}
          width={1142}
          alt="image description"
        />
        <TimeLineInvierno />
      </section>
    </main>
  );
}
