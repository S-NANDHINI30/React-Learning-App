import { IMG_CDN_URL } from "../../../asset/constants";
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
        <div className="card my-3">
            <img
            className="w-full h-11rem border-round-xl"
                src={`${IMG_CDN_URL}${cloudinaryImageId}`}
                alt={name}
            />
            <h2 className="font-bold my-2">{name}</h2>
            <span>
                    <i className="fa-solid fa-star"></i>
                    {avgRating}
                </span>
            <p className="my-1">{cuisines}</p>
            <p className="my-1">{areaName}</p>
            <span>      
                <p className="my-1">{lastMileTravelString}</p>
                <p className="my-1">{costForTwo}</p>
            </span>
        </div>
    );
};

export default RestaurantCards;
