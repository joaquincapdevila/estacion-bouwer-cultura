import { eventos } from "../lib/placeholder-data";

export function Tabla(props) {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Dias
          </th>
          <th scope="col" class="px-6 py-3">
            Hora
          </th>
          <th scope="col" class="px-6 py-3">
            Actividades
          </th>
        </tr>
      </thead>
      <tbody>
        {eventos.dates.map((datos) => (
          <tr
            key={datos.day}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {datos.day}
            </th>
            <td className="px-6 py-4">
              {datos.activities.map((datos) => (
                <tr
                  className="px-6 py-4 border-b dark:bg-gray-800 dark:border-gray-700"
                  key={datos.description}>
                  {datos.time}
                </tr>
              ))}
            </td>
            <td className="px-6 py-4">
              {datos.activities.map((datos) => (
                <tr
                  className="px-6 py-4 border-b dark:bg-gray-800 dark:border-gray-700"
                  key={datos.description}>
                  {datos.description}
                </tr>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
