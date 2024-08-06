import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
    props.resData?.info;
  return (
    <div className="res-card">
      <img className="card-image" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4 className="cuisine">{cuisines.join(", ")}</h4>
      <div className="card-foot">
        <h4>{avgRating}</h4>
        <h4 className="del-time">{deliveryTime}mins</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;