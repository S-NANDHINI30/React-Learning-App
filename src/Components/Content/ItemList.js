import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { TOP_PICKS_URL } from "../../../asset/constants";

const ItemList = ({ menu, handleAddItem }) => {
  return (
    <Accordion className="no-border">
      {menu?.map((card, index) => {
        const cardData = card?.card?.card;
        if (cardData?.title && cardData?.title !== "Top Picks") {
          return (
            <AccordionTab
              key={index}
              header={<span className="border-top-title">{cardData.title}</span>}
            >
              {/* Accordion Content */}
              <div className="rounded-b-md">
                {cardData?.itemCards?.length > 0 ? (
                  cardData.itemCards.map((item, itemIndex) => (
                    <div key={itemIndex} className="menu-item mb-4">
                      <p className="font-semibold text-indigo-700">
                        {item.card.info.name}
                      </p>
                      <p className="text-gray-600">
                        ₹
                        {item.card.info.finalPrice / 100 ||
                          item.card.info.price / 100 ||
                          item.card.info.defaultPrice / 100 ||
                          "N/A"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.card.info.description}
                      </p>
                      <img
                        className="w-2"
                        src={TOP_PICKS_URL + item.card.info.imageId}
                      />
                      <div>
                        <Button
                          className="font-bold bg-indigo-900 border-none px-2 py-1 mt-1"
                          onClick={() => handleAddItem(item)}
                        >
                          ADD
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No items available.</p>
                )}
              </div>
            </AccordionTab>
          );
        }
        return null;
      })}
    </Accordion>
  );
};

export default ItemList;
