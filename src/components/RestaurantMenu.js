import { useEffect, useState } from "react";

import { REST_URL, RATING_STAR, CYCLE_ICON } from "../utils/constants";
import Shimmer from "./Shimmer";
import Accordion from "./Accordion";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_URL + id);
    console.log(data);
    const json = await data.json();

    setMenu(json.data);
    console.log(json);
  };

  if (menu === null) {
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
  } = menu?.cards[2].card?.card?.info;

  // const { itemCards, title } =
  //   menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const { cards } = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  const { categories } =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

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
        {/* <Accordion
          title={title}
          content={itemCards.map((item) => (
            <li>{item.card.info.name}</li>
          ))}
        /> */}
        {/* <div>
          <h2>
            {
              menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
                ?.card.title
            }
          </h2>
        </div> */}
        {/* {categories.map((item) => (
          <>
            <Accordion
              title={item.title}
              content={item.itemCards.map((item) => (
                <li>{item.card.info.name}</li>
              ))}
            />
          </>
        ))} */}
        {/* 
        {cards.map((card) => {
          if (card.card.card.categories) {
            const cartCard = card.card.card.categories;
            return cartCard.map((item) => (
              <Accordion
                heading={card.card.title}
                title={item.title}
                content={item.itemCards.map((data) => (
                  <li>{data.card.info.name}</li>
                ))}
              />
            ));
          }
        })} */}

        {cards.map((card) => {
          if (card.card.card.categories) {
            return (
              <>
                <div className="menu-separator"></div>
                <div className="menu-accordion">{card.card.card.title}</div>
                <div>
                  {card.card.card.categories.map((item) => (
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
          if (card.card.card.itemCards) {
            const itemCards = card.card.card.itemCards;
            // console.log(itemCards);
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
                    content={card.card.card.itemCards.map((item) => (
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
