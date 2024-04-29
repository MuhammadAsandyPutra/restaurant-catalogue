import RestaurantItem from "./RestaurantItem";
import PropTypes from "prop-types";

const RestaurantList = ({ restaurants }) => (
  <div className="restaurant-list">
    {restaurants.map((restaurant) => (
      <RestaurantItem key={restaurant.id} {...restaurant} />
    ))}
    <style jsx>{`
      .restaurant-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;
      }
    `}</style>
  </div>
);

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      pictureId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RestaurantList;
