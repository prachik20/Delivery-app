import { useState } from "react";
import { UP_ARROW, DOWN_ARROW } from "../utils/constants";
import NestedItemList from "./NestedItemList";

const NestCategory = ({ nestCat, restDetails }) => {
  const [showItems, setshowItems] = useState();
  const [expandedId, setExpandedId] = useState([]);

  // const handleClick = (item) => {
  //   setshowItems(!showItems);

  // };

  return (
    <div>
      <div className="h-2 w-[700] bg-gray-200"></div>
      <div className="w-[700] my-5 mx-2">{nestCat.title}</div>
      <div className="w-[700]  cursor-pointer ">
        {nestCat.categories.map((item, index) => (
          <div>
            <div
              key={item.title}
              className="flex justify-between mx-2 my-3"
              onClick={() => {
                console.log(item.title);
                setExpandedId(item.title);
                setshowItems(!showItems);
              }}
            >
              <div>{item.title}</div>

              <div>
                {expandedId == item.title && showItems ? (
                  <img className="w-5 h-5" src={UP_ARROW}></img>
                ) : (
                  <img className="w-5 h-5" src={DOWN_ARROW}></img>
                )}
              </div>
            </div>
            <div>
              {expandedId && showItems && (
                <NestedItemList items={item} restDetails={restDetails} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestCategory;
