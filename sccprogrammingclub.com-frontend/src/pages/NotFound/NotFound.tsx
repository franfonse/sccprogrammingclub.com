import './NotFound.css';
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
    return (
        <div className="not-found-page">
        <h1>404</h1>
        <p>Oops! The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="home-link">
            ← Back to Home
        </Link>
        </div>
    );
}
