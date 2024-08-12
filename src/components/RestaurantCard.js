import { CDN_URL, RATING_STAR } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    props.resData?.info;
  return (
    <div className="res-card">
      <div className="res-img">
        <img className="card-image" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="res-details">
        <div className="res-name">{name}</div>
        <div className="res-subtext">
          <img className="star-rating" src={RATING_STAR}></img>
          <span className="avg-rating">{avgRating} •</span>
          <span className="res-del-time">{sla.deliveryTime}mins</span>
        </div>
        <div className="res-cuisines">{cuisines.join(", ")}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
