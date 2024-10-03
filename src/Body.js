import RestaurantCards from "./RestaurantCards"; // import the Restaurant Cards Component
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";

const RestaurantBody = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // to set the filtered restaurants in a separate variable
  const [searchText, setSearchText] = useState("");
  // Whenevere a state variable update, react triggers a reconciliation cycle (re-renders the component)
  //console.log("component rendered!!!");
  // if no dependency array useEffect is called on every render
  // if there's an empty dependency [] useEffect is called once (initial render)
  useEffect(() => {
    fetchData();
  }, []);
  const onlineStatus = useNetworkStatus();
  if (onlineStatus === false) 
    return(<h1 className="font-bold">Looks like you're offline!!! Please check your internet connection</h1>);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (listOfRestaurants.length === 0) {
    return (
      <h1 className="text-center text-xl mt-10">Loading, Please Wait....</h1>
    );
  }
  //React find the difference between 2 virtual dom and updates only the input box (updates only the portions required)
  return (
    <div className="body mt-4 p-4">
      <div className="filter mb-4 flex justify-center">
        <div className="search flex items-center space-x-4">
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search Restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={() => {
              const searchRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(searchRestaurants);
            }}
          >
            Search
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              className="border border-gray-400 p-2"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCards
                key={restaurant.info.id}
                {...restaurant.info} // Passing all the info to the RestaurantCards component
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantBody;
