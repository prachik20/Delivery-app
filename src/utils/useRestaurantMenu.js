import { useEffect, useState } from "react";
import { REST_URL } from "./constants";

const useRestaurantMenu = (id) => {
  const [restMenu, setRestMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_URL + id);

    const json = await data.json();

    setRestMenu(json.data);
  };

  const restInfo = restMenu?.cards.filter(
    (res) =>
      res?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  return restMenu;
};

export default useRestaurantMenu;
