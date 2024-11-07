import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState([]);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetchData(); 
    }, [resId]); // Added dependency on resId to fetch whenever the resId changes.

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
                resId
        );
        const json = await data.json();
        const restaurantDetails = json?.data?.cards[2]?.card?.card?.info;
       // console.log(restaurantDetails,"restaurant details");
        
        const menus = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        console.log(menus,"menu");
        
        setResInfo(restaurantDetails);
        setMenu(menus);
    };

    return { resInfo, menu };
};

export default useRestaurantMenu;
