import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerContainer from "./ShimmerContainer";
import { SEARCH_LOGO, SWIGGY_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [toggleBtn, setToggleBtn] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h2>
        Looks like your internet connection is lost! Please try again later
      </h2>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <ShimmerContainer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <span
          className="search-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          <img className="search-logo" src={SEARCH_LOGO}></img>
        </span>
      </div>
      <div className="filter">
        <h3>Restaurants with online food delivery</h3>
        <button
          className="filter-btn"
          onClick={() => {
            if (toggleBtn) {
              setFilteredRestaurants(
                listOfRestaurants.filter(
                  (res) => res.info.sla.deliveryTime <= 20
                )
              );
              setToggleBtn(!toggleBtn);
            } else {
              setFilteredRestaurants(listOfRestaurants);
              setToggleBtn(!toggleBtn);
            }
          }}
        >
          Fast Delivery
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            if (toggleBtn) {
              setFilteredRestaurants(
                listOfRestaurants.filter((res) => res.info.avgRating > 4)
              );
              setToggleBtn(!toggleBtn);
            } else {
              setFilteredRestaurants(listOfRestaurants);
              setToggleBtn(!toggleBtn);
            }
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            if (toggleBtn) {
              setFilteredRestaurants(
                listOfRestaurants.filter(
                  (res) => res.info.costForTwo.substring(1, 4) < 300
                )
              );
              setToggleBtn(!toggleBtn);
            } else {
              setFilteredRestaurants(listOfRestaurants);
              setToggleBtn(!toggleBtn);
            }
          }}
        >
          Less than RS.300
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            if (toggleBtn) {
              setFilteredRestaurants(
                listOfRestaurants.filter(
                  (res) =>
                    res.info.costForTwo.substring(1, 4) > 300 &&
                    res.info.costForTwo.substring(1, 4) < 600
                )
              );
              setToggleBtn(!toggleBtn);
            } else {
              setFilteredRestaurants(listOfRestaurants);
              setToggleBtn(!toggleBtn);
            }
          }}
        >
          RS.300-Rs. 600
        </button>
      </div>
      <div className="res-container">
        <div className="restaurants-grid">
          {filteredRestaurants.map((restaurant) => (
            <Link to={"/restaurantmenu/" + restaurant.info.id}>
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
