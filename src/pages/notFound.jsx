import { Link } from "react-router-dom";
function NotFound() {
    return ( 
        <>
        <div className="page404">
            <div className="main">
                <h1>error</h1>
                <span className="big-text">404</span>
                <div className="text">
                    <p>Sorry, we couldn´t find that page.</p>
                    <Link to="/" reloadDocument>
                    <button className="error-btn">Home page</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
     );
}

export default NotFound;