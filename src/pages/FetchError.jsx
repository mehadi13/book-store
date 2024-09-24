import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom"
export default function FetchError() {
    const error = useRouteError()
    return (
        <div>
            <h1>Error</h1>
            <p>{error.message}</p>
            <Link to="/">Back to Home page</Link>
        </div>
    )
}