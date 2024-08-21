import { useState } from "react";
import { DOWN_ARROW, UP_ARROW } from "../utils/constants";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);

  // const itemCards = data?.itemCards;

  // const categories = data?.categories;
  // console.log(props.title);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="max-w-[700]">
      <div className="">
        <div className="my-5 mx-4 flex justify-between" onClick={handleClick}>
          <div className="font-bold"> {props.title}</div>

          <div>
            {isActive ? (
              <img className="w-5 h-5" src={UP_ARROW}></img>
            ) : (
              <img className="w-5 h-5=4" src={DOWN_ARROW}></img>
            )}
          </div>
        </div>

        {isActive && props.content}
      </div>
    </div>
  );
};

export default Accordion;
