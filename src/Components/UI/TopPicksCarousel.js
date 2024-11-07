import { TOP_PICKS_URL } from "../../../asset/constants";
import useRestaurantMenu from "../../CustomHooks/useRestaruantMenu";
import { useParams } from "react-router-dom";
import { Carousel } from "primereact/carousel"; // Import PrimeReact Carousel
import "primereact/resources/themes/saga-blue/theme.css"; // PrimeReact theme
import "primereact/resources/primereact.min.css";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { addItem } from "../../../utils/cartSlice";

const TopPicksAsset = () => {

  const { resId } = useParams();
  const { resInfo, menu } = useRestaurantMenu(resId);
  const topPicks = menu?.find(
    (card) => card?.card?.card?.title === "Top Picks"
  );
  const carouselItems = topPicks?.card?.card?.carousel || [];
  // Modify number of visible items based on item count
  const numVisibleItems = carouselItems.length <= 2 ? carouselItems.length : 3;
  const dispatch =useDispatch();
  const handleAddItem =(item)=>
  {
    //dispatch an action
    dispatch(addItem(item));
  }
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: Math.min(numVisibleItems, 3),
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: Math.min(numVisibleItems, 2),
      numScroll: 1,
    },
    {
      breakpoint: "560px",
      numVisible: Math.min(numVisibleItems, 1),
      numScroll: 1,
    },
  ];

  // const itemTemplate = (item) => {

  //     return (
  //         <div className={`carousel-item flex align-items-center justify-content-center ${carouselItems.length === 1 ? 'single-item' : ''}`}>
  //             <img src={TOP_PICKS_URL + item.creativeId} alt={item.title} className="carousel-img" />

  //         </div>
  //     );
  // };

  // If there's only 1 item, display it without the carousel
  const itemTemplate = (item) => {
    return (
      <div
        className={`carousel-item flex flex-column align-items-center justify-content-center ${
          carouselItems.length === 1 ? "single-item" : ""
        }`}
      >
        <div className="relative">
          <img
            src={TOP_PICKS_URL + item.creativeId}
            alt={item.title}
            className="carousel-img"
          />
          {/* Price display overlay */}
          <div className="absolute bottom-0 left-0 bg-opacity-75 bg-black text-white p-2 w-full flex items-center justify-between">
          <span>₹{Math.round(item.dish.info.price / 100)}</span>
            <Button className="font-bold text-900 bg-white border-white px-2 py-1 ml-auto"
            onClick={()=>handleAddItem(item)}
            
            >
              ADD
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    topPicks && (
      <div className="top-picks-section">
        <h2 className="text-md font-bold mb-4">Top Picks</h2>
        {carouselItems.length > 1 ? (
          <Carousel
            value={carouselItems}
            numVisible={numVisibleItems}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            itemTemplate={itemTemplate}
            circular={carouselItems.length > 1} // Only circular if more than 1 item
            autoplayInterval={carouselItems.length > 1 ? 3000 : null}
          />
        ) : (
          // Display a single image if only 1 item
          <div className="single-item">
            <img
              src={TOP_PICKS_URL + carouselItems[0].creativeId}
              alt={carouselItems[0].title}
              className="carousel-img mb-4"
            />
          </div>
        )}
      </div>
    )
  );
};

export default TopPicksAsset;
