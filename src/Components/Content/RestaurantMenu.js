import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../CustomHooks/useRestaruantMenu";
import TopPicksAsset from "../UI/TopPicksCarousel";
import ItemList from "./ItemList"; // Import the new ItemList component
import { useDispatch } from "react-redux";
import { addItem } from "../../../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, menu } = useRestaurantMenu(resId);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="mx-8 px-8">
      {/* Restaurant Name */}
      <h1 className="text-3xl font-bold mb-2">{resInfo?.name}</h1>

      <div className="p-3 shadow-5 my-3 surface-card border-round-xl">
        {/* Restaurant rating */}
        <div className="border-600 surface-overlay border-1 p-3 border-round-xl">
          {menu?.length > 0 && (
            <p className="text-gray-600">
              ({menu[0]?.card?.card?.topRatedFilter?.attributes?.displayText})
            </p>
          )}
          <p className="text-orange-500 font-bold underline">
            {resInfo?.cuisines?.join(", ")}
          </p>
        </div>
      </div>

      {/* Top Picks section */}
      <TopPicksAsset />
      
      <ItemList menu={menu} handleAddItem={handleAddItem} />
    </div>
  );
};

export default RestaurantMenu;
