export function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow m-4 dark:bg-gumbo-800">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="/" class="hover:underline">
            Estación Cultural Bouwer
          </a>
          .{" "}
          <span className="hidden md:inline-block">
            Todos los derechos reservados.
          </span>
        </span>
        <ul class="hidden lg:flex lg:flex-wrap lg:items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/nosotros" class="hover:underline me-4 lg:me-6">
              Nosotros
            </a>
          </li>
          <li>
            <a href="/contacto" class="hover:underline me-4 md:me-6">
              Contacto
            </a>
          </li>
          <li>
            <a href="#" class="hidden md:block hover:underline">
              estacionculturalbouwer@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
