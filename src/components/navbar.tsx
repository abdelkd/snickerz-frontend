import { cn } from "@/lib/utils";
import { HTMLAttributes, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";

type NavbarLinkProps = {
  children: React.ReactNode;
  href: string;
};

type NavLink = {
  text: string;
  href: string;
};

const links: NavLink[] = [
  {
    text: "Collections",
    href: "/collections",
  },
  {
    text: "Men",
    href: "/men",
  },
  {
    text: "Women",
    href: "/women",
  },
];

const NavbarLink = ({ href, children }: NavbarLinkProps) => {
  return (
    <Link
      to={href}
      className="cursor-pointer text-gray-600 hover:text-gray-950 transition-all duration-300"
    >
      {children}
    </Link>
  );
};

const Search = () => {
  const [isSearching, setIsSearching] = useState(false);

  if (!isSearching) {
    return (
      <svg
        onKeyUp={() => {}}
        onClick={() => setIsSearching(true)}
        aria-labelledby="search-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 hover:text-gray-950 transition-all duration-300"
      >
        <title id="search-icon">magnifying glass</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    );
  }

  return (
    <div className="relative flex flex-col">
      <Input className="rounded-full h-7 focus-visible:ring-transparent pr-7" />
      <CrossIcon
        className="absolute top-1 right-2 h-5 w-5"
        onClick={() => setIsSearching(false)}
      />
    </div>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <div className="absolute top-0 right-0 w-3/4 h-dvh bg-white px-3 py-2 md:hidden">
        <div className="flex justify-end px-2 py-2">
          <svg
            onKeyUp={() => {}}
            onClick={() => setIsOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
            aria-labelledby="close-menu"
          >
            <title id="close-menu">close menu</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="w-full flex pt-8">
          <div className="py-5 px-3 text-2xl flex flex-col gap-6">
            {links.map((link) => (
              <Link key={link.href} to={link.href} className="">
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <svg
      onKeyUp={() => {}}
      onClick={() => setIsOpen(true)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 ml-2 md:hidden"
      aria-labelledby="open-menu"
    >
      <title id="open-menu">Open Menu</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5"
      />
    </svg>
  );
};

const Navbar = () => {
  return (
    <header className="max-w-6xl flex justify-center mx-auto px-6 py-3">
      <nav className="w-full flex gap-4 md:gap-8 items-center">
        <div>
          <p className="libre-franklin text-lg font-extrabold tracking-widest">
            SNICKERS
          </p>
        </div>

        <div className="gap-6 hidden md:flex">
          {links.map((link) => (
            <NavbarLink key={link.href} href={link.href}>
              {link.text}
            </NavbarLink>
          ))}
        </div>

        <div className="ml-auto text-gray-600 flex items-center gap-4">
          {/* Search Icon */}
          <Search />

          {/* Shopping Cart */}
          <svg
            aria-labelledby="shopping-cart"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:text-gray-950 transition-all duration-300"
          >
            <title id="shopping-cart">Shopping cart icon</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
};

const CrossIcon = ({
  className,
  ...props
}: HTMLAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      aria-labelledby="close"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn("w-6 h-6", className)}
      {...props}
    >
      <title id="close">Close</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};

export default Navbar;
