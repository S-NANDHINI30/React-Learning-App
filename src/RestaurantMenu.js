import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaruantMenu";// Import the custom hook

const RestaurantMenu = () => {
    const { resId } = useParams();
    const { resInfo, menu } = useRestaurantMenu(resId); // Use the custom hook
    const [activeIndex, setActiveIndex] = useState(null); // State for accordion

    // Toggle function for accordion
    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="Menu p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-2">{resInfo?.name}</h1>
            <p className="text-gray-700">{resInfo?.cuisines?.join(", ")}</p>
            
            {/* Extracting the rating from the first card */}
            {menu.length > 0 && (
                <div className="rating mb-4">
                    <p className="text-gray-600">
                        ({menu[0]?.card?.card?.topRatedFilter?.attributes?.displayText})
                    </p>
                </div>
            )}

            {/* Loop through all cards and display them with accordion behavior */}
            <div>
                {menu.map((card, index) => {
                    const cardData = card?.card?.card;
                    if (cardData?.title) { // Render only if a title exists
                        return (
                            <div key={index} className="mb-4">
                                {/* Accordion Header */}
                                <div 
                                    onClick={() => toggleAccordion(index)}
                                    className={`cursor-pointer p-4 bg-white rounded-md shadow hover:bg-gray-200 flex justify-between items-center ${
                                        activeIndex === index ? "bg-blue-100" : "bg-white"
                                    }`}
                                >
                                    <h2 className="text-lg font-semibold">{cardData.title}</h2>
                                    <span className={`transition-transform ${activeIndex === index ? "rotate-180" : "rotate-0"}`}>
                                        ▼ 
                                    </span>
                                </div>

                                {/* Accordion Content */}
                                {activeIndex === index && (
                                    <div className="p-4 bg-white border border-t-0 border-gray-300 rounded-b-md">
                                        {cardData?.itemCards?.length > 0 ? (
                                            cardData.itemCards.map((item, itemIndex) => (
                                                <div key={itemIndex} className="menu-item mb-4">
                                                    <p className="font-semibold text-indigo-700">{item.card.info.name}</p>
                                                    <p className="text-gray-600">₹{item.card.info.finalPrice / 100 || item.card.info.price / 100 || item.card.info.defaultPrice / 100 || "N/A"}</p>
                                                    <p className="text-sm text-gray-500">{item.card.info.description}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-gray-500">No items available.</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default RestaurantMenu;
