import { CDN_URL, RATING_STAR } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    props.resData?.info;
  return (
    <div className="w-[200] hover:scale-95 origin-center cursor-pointer ease-in-out">
      <div className="w-[200] h-[145]">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="mx-2 my-4">
        <div className="text-lg font-bold">{name}</div>
        <div className="flex items-center">
          <img className="w-4 h-4 " src={RATING_STAR}></img>
          <span className="mx-2">{avgRating} •</span>
          <span className="res-del-time">{sla.deliveryTime}mins</span>
        </div>
        <div className="text-base font-extralight break-words truncate">
          {cuisines.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
