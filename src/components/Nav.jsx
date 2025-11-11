import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Dropdown from "./ui/Dropdown";

const links = [
  { path: "/", name: "Home" },
  { path: "/propos", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/sfectonir", name: "Sfectonir" },
];

const services = [
  { path: "/media-services", name: "Media Services" },
  { path: "/web-dev", name: "Development Services" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, closeSheet }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={linkStyles}
          onClick={closeSheet}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}

      {/* Services Dropdown */}
      <div className="mx-auto flex w-full items-center justify-center">
        <div className="group relative cursor-pointer py-2">
          <div className="flex items-center justify-between space-x-5 py-2 text-white bg-primary pr-2 rounded">
            <span className="menu-hover text-base font-medium lg:mx-4">
              Services
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>

      
          <div className="absolute left-0 z-50 w-full bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-1 px-4 text-gray-800 shadow-xl">
            {/* {services.map((elem, i) => (
              <Link
                key={i}
                href={elem.path}
                onClick={closeSheet}
                className="my-2 block border-b border-gray-100 py-1 text-gray-500 hover:text-primary md:mx-2"
              >
                {elem.name}
              </Link>
            ))} */}
              {services.map((option, index) => (
            <div key={index} className="w-full">
              <Link
                href={option.path}
                className={`block px-4 py-2 hover:text-primary`}
                onClick={closeSheet}
              >
                {option.name}
              </Link>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* <Link href="/contact" className={`${linkStyles} xl:mt-0 mt-28`} onClick={closeSheet}>
        {"/contact" === path && (
          <motion.span
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ type: "tween" }}
            layoutId="underline"
            className={`${underlineStyles}`}
          />
        )}
        Contact
      </Link> */}
    </nav>
  );
};

export default Nav;
