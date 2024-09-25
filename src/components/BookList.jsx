import BookItem from "./BookItem"
import { useLoaderData } from "react-router-dom";

export default function BookList() {
    const books = useLoaderData()
    return <>
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Books Collection</h2>

                    <p className="mx-auto mt-4 max-w-md text-gray-500">
                    Unlock a World of Stories Find Your Next Favorite Book at <br/><strong>Book Nook</strong>
                    </p>
                </header>

                <ul className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {books ? books.map((book, index) => (
                        <li key={index}>
                            <BookItem item={book} />
                        </li>
                    )) : <div>Loading....</div>}

                </ul>
            </div>
        </section>
        <section>
        </section>
    </>
}

export const bookLoader = async () => {
    const response = await fetch('/data.json');

    if (!response.ok) {
        throw Error("Could not fetch books.")
    }

    return response.json();
}