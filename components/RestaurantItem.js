/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PropTypes from "prop-types";

const RestaurantItem = ({ id, pictureId, name, description }) => (
  <div className="card">
    <img src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`} alt={name} />
    <div className="details">
      <h2><Link href={`/detail/${id}`}>{name}</Link></h2>
      <p>{description}</p>
    </div>

    <style jsx>{`
      .card {
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      img {
        width: 100%;
        height: auto;
        display: block;
      }

      .details {
        padding: 20px;
      }

      h2 {
        margin-bottom: 10px;
      }

      p {
        margin-bottom: 0;
      }
    `}</style>
  </div>
);

RestaurantItem.propTypes = {
  id: PropTypes.string.isRequired,
  pictureId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RestaurantItem;
