import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">This page is not available yet.</p>
      <button
        className="not-found__back-btn"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
}

export default NotFound;
