import { useState } from "react";

type NavbarLinkProps = {
  children: React.ReactNode;
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

const NavbarLink = ({ children }: NavbarLinkProps) => {
  return (
    <p className="cursor-pointer text-gray-600 hover:text-gray-950 transition-all duration-300">
      {children}
    </p>
  );
};

const Search = () => {
  const [isSearching, setIsSearching] = useState(false);

  if (!isSearching) {
    return (
      <svg
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

  return <div className="h-6" />;
};

const Navbar = () => {
  return (
    <header className="max-w-6xl flex justify-center border border-blue-500 mx-auto">
      <nav className="w-full flex gap-4 md:gap-8 items-center px-8 py-3 border border-pink-500">
        <img src="/vite.svg" className="h-10 w-10" alt="shopii logo" />
        <div className="flex gap-6">
          {links.map((link) => (
            <NavbarLink>{link.text}</NavbarLink>
          ))}
        </div>

        <div className="ml-auto text-gray-600 flex items-center gap-4">
          {/* Search Icon */}

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
      </nav>
    </header>
  );
};

export default Navbar;
