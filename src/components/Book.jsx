const Book = () => {
    return <>
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-6">
    <img
                src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
                alt=""
                className="w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />
        <div className="grid grid-cols-1 items-center">
            <h2>Name</h2>
            <h3>Author: dd</h3>
            <h3>Scienc fiction</h3>
            <h3>Reviwe</h3>
            <h3>tags</h3>
            <h4>Total Page</h4>
            <h4>YOP</h4>
            <h4>Rating</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
            <button
                        className="block w-full rounded bg-green-400 p-4 text-sm font-medium transition hover:scale-105"
                    >
                        Wish to Read
                    </button>
                    <button
                        className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                    >
                        Add to Cart
                    </button>
            </div>
        </div>
    </div>
    </>
}

export default Book