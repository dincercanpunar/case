import React, { useContext } from "react";
import currencyFormatter from "currency-formatter";
import * as Icons from "../../icons";
import { AppContext } from "../../../context/AppProvider";

const Cart = () => {
  const { cart, deleteFromCart } = useContext(AppContext);
  const formatter = (price) => {
    return currencyFormatter.format(price, {
      code: "TR",
      symbolOnLeft: true,
      symbol: "₺",
      decimal: ",",
      thousand: ".",
      decimalDigits: 2,
    });
  };
  return (
    <div className="cart-container">
      <div className="header">
        <Icons.Trash className="icon danger" />
        <Icons.Edit className="icon primary" />
        <Icons.FileText className="icon primary" />
        <Icons.File className="icon primary" />
        <Icons.UserPlus className="icon primary" />
        <Icons.MoreHorizontal className="icon" />
      </div>

      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <Icons.ShoppingBag className="icon secondary" />
          <p className="text muted center">
            Satışa başlamak için ürün ekleyin, unutma sürükleyip bırakabilirsin!
          </p>
        </div>
      ) : (
        <div className="cart-items">
          {cart.cartItems.map((item, index) => (
            <div key={index} className="cart-item-container">
              <div className="cart-item">
                <div className="cart-item-left">
                  <div className="cart-item-photo">
                    <div className="badge">
                      <p className="text sm primary">{item.quantity}</p>
                    </div>
                    <img src={item.product.media} alt={item.product.title} />
                  </div>
                  <p className="text bolder ellipsis">{item.product.title}</p>
                </div>
                <div className="cart-item-right">
                  <p className="text muted">₺ {item.product.price}</p>
                </div>
              </div>
              <div
                className="delete-button"
                onClick={() => deleteFromCart(item.product.id)}
              >
                <p className="text white">Sil</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.cartItems.length !== 0 && (
        <div className="cart-bottom">
          <div className="tax-container">
            <p className="text muted">Vergiler</p>
            <p className="text muted">{formatter(cart.tax)}</p>
          </div>
          <div className="payment-container">
            <div className="payment-type">
              <Icons.Copy className="icon primary" />
            </div>
            <div className="payment">
              <p className="text white">Ödeme</p>
              <p className="text white">{formatter(cart.totalPrice)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
