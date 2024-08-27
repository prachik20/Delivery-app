import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleAddItem = (item) => {
    dispatch(addItem({ item, restDetails: restDetails }));
  };

  const cartItems = useSelector((store) => store.cart.items);

  const restDetails = cartItems.length > 0 ? cartItems[0].restDetails : null;

  const itemTotal = cartItems.reduce((acc, item) => {
    const price =
      item?.item?.info?.price / 100 ||
      item?.item?.info?.defaultPrice / 100 ||
      0;
    return acc + price * item.count;
  }, 0);

  const deliveryFee = 100;
  const platformFee = 8;
  const gst = Math.round(0.08 * itemTotal);
  const totalAmount = itemTotal + deliveryFee + platformFee + gst;

  return restDetails ? (
    <>
      {" "}
      <div className="h-screen bg-gray-100 ">
        <div className="text-center text-2xl font-bold p-4">Checkout</div>
        <div className="max-w-[400] h-auto mx-auto bg-white">
          <div className="p-6 shadow-sm flex ">
            <span>
              <img
                className="h-12 w-12 object-cover"
                src={CDN_URL + restDetails?.cloudinaryImageId}
              />
            </span>
            <div className="">
              <span className=" px-3 font-bold flex">{restDetails?.name}</span>
              <span className="px-3 text-sm">{restDetails?.areaName}</span>
            </div>
          </div>
          <div className="p-6 w-[400] h-[200]  overflow-y-auto ">
            {cartItems.map((item) => (
              <div className="py-2 flex justify-between border-b-2">
                <div className="font-medium w-[200]">{item.item.info.name}</div>
                <div className="flex items-center">
                  <div className="text-green-800 border border-solid px-2 py-1">
                    <button onClick={() => handleRemoveItem(item?.item)}>
                      -
                    </button>
                    <span className="px-3">{item?.count}</span>

                    <button onClick={() => handleAddItem(item?.item)}>+</button>
                  </div>
                  <div className="px-2 inline-block">
                    ₹
                    {item.item.info.defaultPrice
                      ? (item.item.info.defaultPrice / 100) * item.count
                      : (item.item.info.price / 100) * item.count}
                  </div>
                </div>
              </div>
            ))}
            <div className="py-4">
              <div>Bill Details</div>
              <div className="flex justify-between items-center">
                <span className="py-2 text-sm">Items Total</span>
                <span className="pr-3 text-sm"> ₹{itemTotal}</span>
              </div>
              <div className="flex justify-between items-center border-b-2 pb-3">
                <span className="text-sm">Delivery Fee</span>
                <span className="pr-3 text-sm"> ₹{deliveryFee}</span>
              </div>
              <div className="flex justify-between items-center pt-3">
                <span className="text-sm ">Platform Fee</span>
                <span className="pr-3 text-sm"> ₹{platformFee}</span>
              </div>
              <div className="flex justify-between items-center pt-3 ">
                <span className="text-sm ">GST and Restaurant Charges</span>
                <span className="pr-3 text-sm "> ₹{gst}</span>
              </div>
            </div>
          </div>
          <div className="py-4 px-6 shadow-lg border-t-2 flex justify-between">
            <span>Total</span>
            <span className="pr-6">₹{totalAmount}</span>
          </div>
        </div>
      </div>
    </>
  ) : (
    <EmptyCart />
  );
};

export default Cart;
