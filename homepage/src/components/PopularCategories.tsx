import blueArrow from "../assets/icons/blue-arrow.svg";
import haircutIcon from "../assets/icons/haircut.svg";
import makeupIcon from "../assets/icons/makeup.svg";
import shavingIcon from "../assets/icons/shaving.svg";
import coloringIcon from "../assets/icons/coloring.svg";
import stylingIcon from "../assets/icons/styling.svg";
import "./PopularCategories.css";

const CATEGORIES = [
  { icon: haircutIcon, label: "Haircut" },
  { icon: makeupIcon, label: "Make Up" },
  { icon: shavingIcon, label: "Shaving" },
  { icon: coloringIcon, label: "Coloring" },
  { icon: stylingIcon, label: "Styling" },
];

function PopularCategories() {
  return (
    <section className="popular-categories">
      {/* Section header */}
      <div className="popular-categories__header">
        <h2 className="popular-categories__title">Popular Categories</h2>
        <button className="popular-categories__see-all" aria-label="See all categories">
          <span className="popular-categories__see-all-text">See All</span>
          <img src={blueArrow} alt="" aria-hidden="true" className="popular-categories__see-all-arrow" />
        </button>
      </div>

      {/* Icons row */}
      <div className="popular-categories__list">
        {CATEGORIES.map(({ icon, label }) => (
          <button
            key={label}
            className="popular-categories__item"
            aria-label={label}
          >
            <span className="popular-categories__icon-wrapper">
              <img src={icon} alt="" aria-hidden="true" className="popular-categories__icon" />
            </span>
            <span className="popular-categories__label">{label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default PopularCategories;
