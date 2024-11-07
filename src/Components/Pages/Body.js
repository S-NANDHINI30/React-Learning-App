import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { ProgressSpinner } from 'primereact/progressspinner';
import RestaurantCards from "../UI/RestaurantCards";
import useNetworkStatus from "../../CustomHooks/useNetworkStatus";
import 'primeflex/primeflex.css';

const RestaurantBody = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useNetworkStatus();
  if (onlineStatus === false) 
    return(<h1 className="font-bold">Looks like you're offline! Please check your internet connection.</h1>);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      console.log(restaurants,"restaurantsss");
        
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (listOfRestaurants.length === 0) {
    return (
      <div className="flex justify-content-center mt-5">
        <ProgressSpinner />
      </div>
    );
  }

  return (
    <div className="p-3">
      <div className="flex justify-content-center col-12 mx-2 my-3">
        <InputText
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Restaurants..."
          className="p-inputtext-sm mr-2"
        />
        <Button
          label="Search"
          icon="pi pi-search"
          
          className="p-button-sm mr-2"
          onClick={() => {
            const searchRestaurants = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(searchRestaurants);
          }}
        />
        <Button
          label="Top Rated Restaurant"
          icon="pi pi-star"
          className="p-button-success p-ml-2"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        />
      </div>
      
      <div className="grid">
        {filteredRestaurants.map((restaurant) => (
          <div className="col-3 " key={restaurant.info.id}> 
            <Link className="no-underline" to={"/app/restaurants/" + restaurant.info.id}>
            <RestaurantCards
                  {...restaurant.info} // Pass all restaurant info to the card component
                />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantBody;
