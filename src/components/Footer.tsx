import Link from "next/link";

const dataFooter = [
  {
    id: 1,
    name: "Sobre nosotros",
    link: "#",
  },
  {
    id: 2,
    name: "Productos",
    link: "#",
  },
  {
    id: 4,
    name: "Mi cuenta",
    link: "#",
  },
  {
    id: 3,
    name: "Política de privacidad",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p>
            <span className="font-bold mx-2">JorgeDev</span>
            E-commerce
          </p>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {dataFooter.map((item) => (
              <li key={item.id} className="mr-4">
                <Link
                  href={item.link}
                  className="hover:underline hover:text-blue-600 dark:hover:text-blue-500 me-4 md:me-6"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx:auto dark:border-gray-700" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
          &copy; 2024
          <Link href="#" className="mx-2">
            JorgeDev
          </Link>
          Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
