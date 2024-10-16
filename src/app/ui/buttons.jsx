export function Button(props) {
  return (
    <button
      href={props.href}
      className="inline-flex items-center justify-center px-5 py-3 mt-4 text-base font-medium text-center dark:text-gumbo-500 rounded-lg hover:text-gumbo-300 hover:border-gumbo-300 border border-gumbo-500 focus:ring-4 focus:ring-gumbo-800 dark:focus:ring-gumbo-900">
      {props.text}
      <svg
        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </button>
  );
}
