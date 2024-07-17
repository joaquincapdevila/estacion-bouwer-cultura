import Image from "next/image";
import { eventos } from "../lib/placeholder-data";
import children from "../../../public/children.svg";
import { Tabla } from "./table";

export function Actividad() {
  return (
    <div className="flex flex-col gap-12 py-16 md:min-w-full">
      <h2 className="text-4xl font-extrabold dark:text-white ">Eventos</h2>
      <div className="flex justify-center items-center">
        <div className="">
          <Image src={children} alt="descripcion" width={500} height={500} />
        </div>
      </div>
      <Tabla />
      <blockquote class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800 lg:min-w-[1024px]">
        <p class="text-xl text-wrap italic font-medium leading-relaxed text-gray-900 dark:text-white">
          &quot;{eventos.notes}&quot;
        </p>
      </blockquote>

      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex flex-col justify-center gap-12 py-12">
          {eventos.dates.map((dia) => {
            console.log(dia);
            return (
              <div key={dia.day} className="flex flex-col gap-12">
                <h5 className="text-2xl">{dia.day}</h5>
                <ol class="relative border-s border-gray-200 dark:border-gray-700">
                  {dia.activities.map((datos, index) => (
                    <li key={index} class="mb-10 ms-6">
                      <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg
                          class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </span>
                      <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        {datos.time}
                        {/* <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                          Latest
                        </span> */}
                      </h3>
                      <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        Ha realizar
                      </time>
                      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {datos.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
