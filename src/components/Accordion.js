import { useState } from "react";
import { DOWN_ARROW, UP_ARROW } from "../utils/constants";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="accordion">
      <div className="accordion-item">
        <div>{props.heading}</div>
        <div className="accordion-title" onClick={handleClick}>
          <div>{props.title}</div>
          <div>
            {isActive ? (
              <img className="arrow-icon" src={UP_ARROW}></img>
            ) : (
              <img className="arrow-icon" src={DOWN_ARROW}></img>
            )}
          </div>
        </div>
        {isActive && <div className="accordion-content">{props.content}</div>}
      </div>
    </div>
  );
};

export default Accordion;
