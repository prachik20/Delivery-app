import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";

const NestedItemList = ({ items, restDetails }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem({ item, restDetails: restDetails }));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      {
        <div>
          {items.itemCards.map((item) => {
            const currentCartItem = cartItems.find(
              (cartItem) => cartItem.item.info.id === item.card.info.id
            );

            return (
              <div
                data-testid="restMenu"
                key={item.card.info.id}
                className="py-6 mx-2 border-b-2 flex justify-between"
              >
                <div className="w-9/12 py-2">
                  <span className="font-medium ">{item.card.info.name}</span>
                  <div>
                    ₹{" "}
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </div>
                  <p className="text-sm">{item.card.info.description}</p>
                </div>
                {currentCartItem ? (
                  <div className="w-3/12 py-2">
                    <div className="absolute">
                      <button className="py-2 px-4 bg-white rounded-lg mx-8 mt-28 border border-gray-300">
                        <span
                          className="p-2"
                          onClick={() => handleRemoveItem(item?.card)}
                        >
                          -
                        </span>
                        <span className="px-2">{currentCartItem.count}</span>

                        <span
                          className="p-2"
                          onClick={() => handleAddItem(item?.card)}
                        >
                          +
                        </span>
                      </button>
                    </div>

                    <img
                      src={CDN_URL + item.card.info.imageId}
                      className="w-full object-cover h-[145] rounded-lg"
                    ></img>
                  </div>
                ) : (
                  <div className="w-3/12 py-2">
                    <div className="absolute">
                      <button className="py-2 px-4 bg-white rounded-lg mx-8 mt-28 border border-gray-300">
                        <span className="p-2">-</span>
                        Add
                        <span
                          className="p-2"
                          onClick={() => handleAddItem(item?.card)}
                        >
                          +
                        </span>
                      </button>
                    </div>

                    <img
                      src={CDN_URL + item.card.info.imageId}
                      className="w-full object-cover h-[145] rounded-lg"
                    ></img>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default NestedItemList;
