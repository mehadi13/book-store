import { useEffect, useState } from "react"
import BookItem from "./BookItem"

const BookList = () => {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        // Fetch the JSON data from the public folder
        fetch('/data.json')
            .then((response) => response.json())
            .then((jsonData) => {
                setBooks(jsonData);
            })
            .catch((error) => {
                console.error("Error fetching the JSON data:", error);
            });
    }, []);
    return <>
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Books Collection</h2>

                    <p className="mx-auto mt-4 max-w-md text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                        dicta incidunt est ipsam, officia dolor fugit natus?
                    </p>
                </header>

                <ul className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
                {books ? books.map((book, index) => (
                        <li key={index}>
                            <BookItem item={book} />
                        </li>
                    )) : <div>Loading....</div>}

                </ul>
            </div>
        </section>
    </>
}

export default BookList