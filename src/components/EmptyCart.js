import { Link } from "react-router-dom";
import { EMPTY_CART } from "../utils/constants";

const EmptyCart = () => {
  return (
    <div>
      <div className="text-center">
        <img className=" h-60 w-60 mx-auto" src={EMPTY_CART} />
      </div>
      <div className=" text-center text-gray-700">
        <div className="pt-4 text-xl font-bold"> Your cart is empty</div>
        <div className="pt-2 text-sm">
          You can go to home page to view more restaurants
        </div>
        <Link to="/home">
          <div className="pt-4">
            <button className="font-semibold h-10 w-64 bg-[#ff5200] text-white">
              SEE RESTAURANTS NEAR YOU
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
