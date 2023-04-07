import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>404</h2>
            <p>Sorry, page not be found.</p>
            <Link to='/'>Go to homepage...</Link>
        </div>
    );
}
 
export default NotFound;