import { RATING_STAR, CYCLE_ICON } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import NestCategory from "./NestCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const restMenu = useRestaurantMenu(id);

  if (restMenu === null) {
    return <Shimmer />;
  }
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = restMenu?.cards[2].card?.card?.info;

  const categories =
    restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const nestedCategories =
    restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  return (
    <div className="max-w-[700] max-h-[800] mx-auto">
      <div className="my-8 font-bold text-2xl">{name}</div>
      <div className="my-6 border border-gray-300 rounded-2xl">
        <div className="font-semibold mt-4 mx-3 flex items-center">
          <img className="h-4 w-4" src={RATING_STAR}></img>
          <span className="pl-2">
            {" "}
            {avgRating}
            {" (" + totalRatingsString + ") "}
            <span className="px-1">•</span>
            {costForTwoMessage}
          </span>
        </div>
        <div className="text-sm mx-5 my-1 text-[#FF5200]">
          {cuisines.join(", ")}
        </div>
        <div className="mx-5 my-1 text-sm">
          Outlet <span className="ml-2 text-sm text-gray-500">{areaName}</span>
        </div>
        <hr className="mt-4"></hr>
        <div className="flex items-center text-sm">
          <img className="h-6 w-6 m-3 " src={CYCLE_ICON}></img>
          {sla.slaString}
        </div>
      </div>
      <div className="text-center m-4 font-semibold">MENU</div>

      <div className="menu-container">
        {categories.map((item, index) => (
          <RestaurantCategory
            data={item?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
            restDetails={restMenu?.cards[2].card?.card?.info}
          />
        ))}
        {nestedCategories.map((item, index) => (
          <NestCategory
            nestCat={item?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
