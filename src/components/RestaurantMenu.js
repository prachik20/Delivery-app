import { useEffect, useState } from "react";
import { REST_URL, RATING_STAR, CYCLE_ICON } from "../utils/constants";
import Shimmer from "./Shimmer";
import Accordion from "./Accordion";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();

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

  const { cards } = restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  return (
    <div className="rest-menu">
      <div className="rest-name">{name}</div>
      <div className="rest-subtext">
        <div className="rest-cost">
          <img className="rest-star" src={RATING_STAR}></img>
          <span className="rest-rating">
            {" "}
            {avgRating}
            {" (" + totalRatingsString + ") "}
            <span className="circle-separator">•</span>
            {costForTwoMessage}
          </span>
        </div>
        <div className="rest-cuisines">{cuisines.join(", ")}</div>
        <div className="rest-address">
          Outlet <span className="rest-areaname">{areaName}</span>
        </div>
        <hr className="line-separator"></hr>
        <div className="del-time">
          <img className="cycle-icon" src={CYCLE_ICON}></img>
          {sla.slaString}
        </div>
      </div>
      <div className="menu">MENU</div>

      <div className="menu-container">
        {cards.map((card) => {
          const categories = card?.card?.card?.categories;
          const itemCards = card.card.card.itemCards;
          if (categories) {
            return (
              <>
                <div className="menu-separator"></div>
                <div className="menu-accordion">{card.card.card.title}</div>
                <div>
                  {categories.map((item) => (
                    <Accordion
                      title={item.title}
                      content={item.itemCards.map((data) => (
                        <li>{data.card.info.name}</li>
                      ))}
                    />
                  ))}
                </div>
              </>
            );
          }
          if (itemCards) {
            return (
              <>
                <div className="menu-separator"></div>
                <div>
                  <Accordion
                    title={
                      <div className="title-accordion">
                        {card.card.card.title}
                      </div>
                    }
                    content={itemCards.map((item) => (
                      <li>{item.card.info.name}</li>
                    ))}
                  />
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
