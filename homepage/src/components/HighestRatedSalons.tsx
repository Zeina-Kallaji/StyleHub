import blueArrow from "../assets/icons/blue-arrow.svg";
import blackArrow from "../assets/icons/black-arrow.svg";
import starIcon from "../assets/icons/Star.svg";
import favIcon from "../assets/icons/fav.svg";
import salon2 from "../assets/images/salon2.jpg";
import "./HighestRatedSalons.css";

const SALONS = [
  { id: 1, name: "Timeless Cuts", rating: 3.5, image: salon2 },
  { id: 2, name: "Timeless Cuts", rating: 3.5, image: salon2 },
];

function HighestRatedSalons() {
  return (
    <section className="highest-rated">
      {/* Section header */}
      <div className="highest-rated__header">
        <h2 className="highest-rated__title">Highest Rated Salons</h2>
        <button className="highest-rated__see-all" aria-label="See all salons">
          <span className="highest-rated__see-all-text">See All</span>
          <img src={blueArrow} alt="" aria-hidden="true" className="highest-rated__see-all-arrow" />
        </button>
      </div>

      {/* Cards row */}
      <div className="highest-rated__list">
        {SALONS.map((salon) => (
          <div key={salon.id} className="highest-rated__card">
            {/* Image container with heart overlay */}
            <div className="highest-rated__image-wrapper">
              <img
                src={salon.image}
                alt={salon.name}
                className="highest-rated__image"
              />
              <button className="highest-rated__fav-btn" aria-label="Add to favorites">
                <img src={favIcon} alt="" aria-hidden="true" />
              </button>
            </div>

            {/* Card content: name, rating, arrow */}
            <div className="highest-rated__content">
              <div className="highest-rated__info">
                <p className="highest-rated__name">{salon.name}</p>
                <div className="highest-rated__rating">
                  <img src={starIcon} alt="" aria-hidden="true" className="highest-rated__star" />
                  <span className="highest-rated__rating-value">{salon.rating}</span>
                </div>
              </div>
              <button className="highest-rated__arrow-btn" aria-label={`View ${salon.name}`}>
                <img src={blackArrow} alt="" aria-hidden="true" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HighestRatedSalons;
