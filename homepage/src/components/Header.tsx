import { useNavigate } from "react-router-dom";
import logoSvg from "../assets/icons/logo.svg";
import notificationsSvg from "../assets/icons/notifications.svg";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img
        src={logoSvg}
        alt="StyleHub"
        className="header__logo"
        width={169.63}
        height={37}
      />
      <button
        className="header__notifications-btn"
        aria-label="Notifications"
        onClick={() => navigate("/notifications")}
      >
        <img src={notificationsSvg} alt="" aria-hidden="true" />
      </button>
    </header>
  );
}

export default Header;
