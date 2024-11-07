import React from "react";
import { Cart_Empty, IMG_CDN_URL } from "../../../asset/constants";
import { Button } from "primereact/button";
import "primeflex/primeflex.css";
import { useSelector } from "react-redux";
import { Card } from "primereact/card";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems,"cart items");
  
  return (
    <div>
      {cartItems.length === 0 && (
        <div className="grid mt-8">
          <div className="col-6 col-offset-5">
            <div>
              <img className="w-4" src={`${Cart_Empty}`} alt="Empty Cart" />
            </div>
            <div>
              <p className="font-bold text-xl mt-5">Your cart is empty</p>
              <p>You can go to the homepage to view more restaurants</p>
              <Button label="Go to Home" icon="pi pi-home" />
            </div>
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <Card className="col-6 mt-4">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item mb-4">
                <img
                  className="w-3 border-round-xl"
                  src={`${IMG_CDN_URL}/${item.card.info.imageId}`}
                />
                {/* Cart item details */}
                <p className="font-semibold mt-2">{item.card.info.name}</p>
                <p>
                  ₹
                  {item.card.info.finalPrice / 100 ||
                    item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </p>
                <p className="text-sm">{item.card.info.description}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default Cart;
