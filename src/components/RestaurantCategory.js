import { useState } from "react";
import { DOWN_ARROW, UP_ARROW } from "../utils/constants";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="h-2 w-[700] bg-gray-200"></div>
      <div className="w-[700] my-5 cursor-pointer ">
        <div className="flex justify-between mx-2" onClick={handleClick}>
          <span className="">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            {showItems ? (
              <img className="w-5 h-5" src={UP_ARROW}></img>
            ) : (
              <img className="w-5 h-5" src={DOWN_ARROW}></img>
            )}
          </span>
        </div>
        <div>{showItems && <ItemsList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
