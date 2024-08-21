import { CDN_URL } from "../utils/constants";

const ItemsList = ({ items }) => {
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="py-6 mx-2 border-b-2 flex justify-between"
          >
            <div className="w-9/12 py-2">
              <span className="font-medium">{item.card.info.name}</span>
              <div>
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 py-2">
              <div className="absolute">
                <button className="py-2 px-6 bg-white rounded-lg mx-12 mt-28 border border-gray-300">
                  Add +
                </button>
              </div>

              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full object-cover h-[145] rounded-lg"
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
