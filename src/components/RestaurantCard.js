import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    props.resData?.info;
  return (
    <div className="res-card">
      <img className="card-image" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>

      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime}mins</h4>
    </div>
  );
};

export default RestaurantCard;
