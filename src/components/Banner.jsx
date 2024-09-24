const Banner = () => {
  return <>
    {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

    <section
      className="grid grid-cols-1 md:grid-cols-2 relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat md:bg-none"
    >
      <div
        className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <span className="font-extrabold text-4xl text-blue-500">Unlock a World of Stories </span>
            <span className="block font-extrabold text-4xl text-rose-500">Find Your Next Favorite Book at</span>
            <span className="block font-extrabold text-5xl text-yellow-500 mt-2">Book Nook</span>

          <div className="mt-8 flex flex-wrap gap-4 place-content-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Buy Book
            </a>
          </div>
        </div>
      </div>

      <div className="hidden md:inline-block">
        <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Store Image" />
      </div>
    </section>
  </>
}

export default Banner;