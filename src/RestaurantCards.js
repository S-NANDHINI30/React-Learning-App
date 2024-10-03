import { IMG_CDN_URL } from "../asset/constants"; 

const RestaurantCards = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName, 
    lastMileTravelString,
    costForTwo,
    avgRating,
}) => {
    return (
        <div className="card">
            <img
                src={`${IMG_CDN_URL}${cloudinaryImageId}`}
                alt={name}
            />
            <h2 className="font-bold mt-3">{name}</h2>
            <h4>
                    <i className="fa-solid fa-star"></i>
                    {avgRating}
                </h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
            <span>      
                <h4>{lastMileTravelString}</h4>
                <h4>{costForTwo}</h4>
            </span>
        </div>
    );
};

export default RestaurantCards;
