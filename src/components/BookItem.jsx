import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const BookItem = ({ item }) => {
    const { bookId, bookName, author, image, category, tags, rating } = item;
    return <>

        <Link
            to={`/books/${bookId.toString()}`}
            state={{ item }}
            className="group relative block overflow-hidden rounded-md">
            <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
            >
                <span className="sr-only">Wishlist</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                </svg>
            </button>

            <img
                src={image}
                alt="Book Image"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />

            <div className="relative border border-gray-300 rounded-b-md bg-white p-6">
                <div className="flex flex-wrap">
                    {tags ? tags.map((tag, index) => (
                        <div key={index} className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs text-center font-medium m-1 rounded-md"> {tag} </div>
                    )) : <></>}
                </div>

                <span className="mt-4 text-lg font-medium text-gray-900 block">{bookName}</span>
                <span className="text-sm text-gray-700">by {author}</span>

                <div className="mt-1.5 text-sm text-gray-700">
                    <span className="font-semibold">Category:</span>
                    <span className="ml-1 px-3 bg-orange-200 font-bold text-gray-500">{category}</span>
                </div>
                <div className="flex place-content-center mt-4">
                    <StarRatings rating={rating} starRatedColor="#eab308" starDimension="20px" />
                </div>
                <button
                    className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 mt-4"
                >
                    Book Details
                </button>
            </div>
        </Link>
    </>
}

export default BookItem