import { UP_ARROW, DOWN_ARROW } from "../utils/constants";
import ItemsList from "./ItemsList";

const NestCategory = ({ nestCat, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="h-2 w-[700] bg-gray-200"></div>
      <div className="w-[700] my-5 mx-2">{nestCat.title}</div>
      <div className="w-[700]  cursor-pointer ">
        {nestCat.categories.map((item) => (
          <>
            <div
              className="flex justify-between mx-2 my-3"
              onClick={handleClick}
            >
              <span>{item.title}</span>
              <span>
                {showItems ? (
                  <img className="w-5 h-5" src={UP_ARROW}></img>
                ) : (
                  <img className="w-5 h-5" src={DOWN_ARROW}></img>
                )}
              </span>
            </div>
            {showItems && <ItemsList items={item.itemCards} />}
          </>
        ))}
      </div>
    </div>
  );
};

export default NestCategory;
