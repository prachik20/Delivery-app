import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [resName, setResName] = useState(resList);

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          setResName(resName.filter((res) => res.info.avgRating > 4));
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {resName.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
