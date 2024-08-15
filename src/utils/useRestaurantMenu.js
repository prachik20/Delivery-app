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

  return restMenu;
};

export default useRestaurantMenu;
