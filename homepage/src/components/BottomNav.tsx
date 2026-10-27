import { useLocation, useNavigate } from "react-router-dom";
import homeIcon from "../assets/icons/home.svg";
import bookingIcon from "../assets/icons/booking.svg";
import favIcon from "../assets/icons/fav.svg";
import profileIcon from "../assets/icons/profile.svg";
import "./BottomNav.css";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: homeIcon, path: "/" },
  { id: "booking", label: "Booking", icon: bookingIcon, path: "/booking" },
  { id: "favorite", label: "Favorite", icon: favIcon, path: "/favorite" },
  { id: "profile", label: "Profile", icon: profileIcon, path: "/profile" },
];

function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map(({ id, label, icon, path }) => {
        const isActive = location.pathname === path;
        return (
          <button
            key={id}
            className={`bottom-nav__item ${isActive ? "bottom-nav__item--active" : ""}`}
            onClick={() => navigate(path)}
            aria-label={label}
            aria-current={isActive ? "page" : undefined}
          >
            <img
              src={icon}
              alt=""
              aria-hidden="true"
              className="bottom-nav__icon"
            />
            <span className="bottom-nav__label">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export default BottomNav;
