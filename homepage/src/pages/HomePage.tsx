import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ExclusiveDeals from "../components/ExclusiveDeals";
import PopularCategories from "../components/PopularCategories";
import HighestRatedSalons from "../components/HighestRatedSalons";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <SearchBar />
      <ExclusiveDeals />
      <PopularCategories />
      <HighestRatedSalons />
      {/* Future sections will be added here component by component */}
    </div>
  );
}

export default HomePage;
