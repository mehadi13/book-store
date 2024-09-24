import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
const Header = () => {
  return <>
    <header className="bg-white">

      <div className="flex h-16 items-center justify-between">
        <Link to="/" className="md:flex md:items-center md:gap-4">
            <img className="h-8" src={logo} alt="Logo"/>
          <span className="font-extrabold text-yellow-500">Book Nook</span>
        </Link>

        <div className="hidden md:block">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Home </a>
              </li>

              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
              </li>

              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
              </li>

              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> FAQ </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="rounded-md bg-yellow-500 hover:bg-yellow-700 px-5 py-2.5 text-sm hover:text-white font-medium shadow"
              href="#"
            >
              Buy Book
            </a>

            <div className="hidden sm:flex">
              <a
                className="rounded-md bg-gray-200 hover:bg-gray-400 px-5 py-2.5 text-sm font-medium text-yellow-600 hover:text-white"
                href="#"
              >
                Sign In
              </a>
            </div>
          </div>

          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  </>
}

export default Header