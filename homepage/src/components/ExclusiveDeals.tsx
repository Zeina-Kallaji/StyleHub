import blueArrow from "../assets/icons/blue-arrow.svg";
import downArrow from "../assets/icons/down-arrow_svgrepo.com.svg";
import salon1 from "../assets/images/salon1.jpg";
import "./ExclusiveDeals.css";

function ExclusiveDeals() {
  return (
    <section className="exclusive-deals">
      {/* Section header */}
      <div className="exclusive-deals__header">
        <h2 className="exclusive-deals__title">Exclusive Deals</h2>
        <button className="exclusive-deals__see-all" aria-label="See all exclusive deals">
          <span className="exclusive-deals__see-all-text">See All</span>
          <img src={blueArrow} alt="" aria-hidden="true" className="exclusive-deals__see-all-arrow" />
        </button>
      </div>

      {/* Promotion card */}
      <div className="exclusive-deals__card">
        {/* Left: text + button */}
        <div className="exclusive-deals__content">
          <p className="exclusive-deals__promo-text">
            Get Special Discounts Up to 50%
          </p>
          <button className="exclusive-deals__book-btn" aria-label="Book now">
            <span className="exclusive-deals__book-text">Book Now</span>
            <img src={downArrow} alt="" aria-hidden="true" className="exclusive-deals__book-arrow" />
          </button>
        </div>

        {/* Right: salon image */}
        <img
          src={salon1}
          alt="Salon interior"
          className="exclusive-deals__image"
        />
      </div>
    </section>
  );
}

export default ExclusiveDeals;
