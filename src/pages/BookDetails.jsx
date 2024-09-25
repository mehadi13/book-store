import { useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Alert from "../components/Alert";
import { useState } from "react";

export default function BookDetails() {
    const location = useLocation();
    const { item: book } = location.state || {};

    if (!book) {
        return <div>Book Details not found</div>;
    }

    const { bookId, bookName, author, image, category, tags, rating } = book;

    // alert
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');

    const triggerAlert = (title, message) => {
        setMessage(message);
        setTitle(title);
        setShowAlert(true); // Show the alert
    };

    const closeAlert = () => {
        setShowAlert(false); // Hide the alert
    };


    return (
        <>
            {showAlert && <Alert onClose={closeAlert} title={title} message={message} />}
            <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-6">
                <img
                    src={image}
                    alt="Book Image"
                    className="h-96 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-96"
                />
                <div className="grid grid-cols-1 items-center">
                    <div>
                        <span className="text-lg font-medium text-gray-900 block">{bookName}</span>
                        <span className="text-sm text-gray-700">by {author}</span>

                        <div className="mt-3 text-sm text-gray-700">
                            <span className="font-semibold">Category:</span>
                            <span className="ml-1 px-3 bg-orange-200 font-bold text-gray-500">{category}</span>
                        </div>

                        <div className="mt-6 flex flex-wrap">
                            {tags &&
                                tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs text-center font-medium mr-1 rounded-md"
                                    >
                                        {tag}
                                    </div>
                                ))}
                        </div>

                        <div className="flex mt-6">
                            <StarRatings rating={rating} starRatedColor="#eab308" starDimension="20px" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
                        <button
                            className="block w-full rounded bg-green-400 p-4 text-sm font-medium transition hover:scale-105"
                            onClick={() => triggerAlert('Added to Wishlist', `${bookName} - (id:${bookId}) has been successfully added to the Wishlist.`)}>
                            Wish to Read
                        </button>
                        <button
                            className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                            onClick={() => triggerAlert('Added to Cart', `${bookName} - (id:${bookId}) has been successfully added to the Cart.`)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};