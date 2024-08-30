import { CDN_URL, RATING_STAR } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData;

  return (
    <div
      data-testid="resCards"
      className="w-[200] hover:scale-95 origin-center cursor-pointer ease-in-out"
    >
      <div className="w-[200] h-[145]">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="mx-2 my-4">
        <div className="text-lg font-bold break-words truncate">{name}</div>
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

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <>
//         <label className="absolute text-white p-2 m-2 hover:sticky">
//           {props.resData.info.aggregatedDiscountInfoV3.header +
//             " " +
//             props.resData.info.aggregatedDiscountInfoV3.subHeader}
//         </label>
//         <RestaurantCard {...props} />
//       </>
//     );
//   };
// };

export default RestaurantCard;
