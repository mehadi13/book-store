import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="md:flex md:items-center md:gap-4">
            <img className="h-8" src={logo} alt="Logo" />
            <span className="font-extrabold text-yellow-500">Book Nook</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-yellow-600"
                    to="/"
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-yellow-600"
                    to="/about"
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-yellow-600"
                    to="/blog"
                  >
                    {" "}
                    Blog{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-yellow-600"
                    to="/faq"
                  >
                    {" "}
                    FAQ{" "}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-yellow-500 hover:bg-yellow-700 px-5 py-2.5 text-sm text-white font-medium shadow"
                to="/books"
              >
                Buy Book
              </Link>

              <div className="hidden sm:flex">
                <Link
                  className="rounded-md bg-gray-200 hover:bg-gray-400 px-5 py-2.5 text-sm font-medium text-yellow-600 hover:text-white"
                  to="/sign-in"
                >
                  Sign In
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation (visible when menu is open) */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav aria-label="Global">
              <ul className="flex flex-col items-center gap-6 text-sm mt-4">
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-yellow-600"
                    to="/"
                    onClick={toggleMenu} // Close menu on link click
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-yellow-600"
                    to="/about"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-yellow-600"
                    to="/blog"
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-yellow-600"
                    to="/faq"
                    onClick={toggleMenu}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
