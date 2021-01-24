import React, { createContext, useState } from "react";

const products = [
  {
    id: "1",
    title: "Herschell Nova Small",
    price: 599.99,
    media: "/images/product1.png",
  },
  {
    id: "2",
    title: "Herschell Hyper Small Unisex",
    price: 669.99,
    media: "/images/product2.png",
  },
  {
    id: "3",
    title: "Herschell Classic",
    price: 599.99,
    media: "/images/product3.png",
  },
  {
    id: "4",
    title: "Kanken Classic Unisex",
    price: 724,
    media: "/images/product4.png",
  },
  {
    id: "5",
    title: "Nike Air Max 99 Black",
    price: 825,
    media: "/images/product5.png",
  },
  {
    id: "6",
    title: "Nike Super Vapor",
    price: 965,
    media: "/images/product6.png",
  },
];

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState({
    productsPrice: 0,
    tax: 0,
    totalPrice: 0,
    cartItems: [],
  });

  const addToCart = (productId) => {
    setCart((oldCart) => {
      const addedProduct = products.find((product) => {
        return product.id == productId;
      });

      const cartItem = oldCart.cartItems.find((cartItem) => {
        return cartItem.product.id == addedProduct.id;
      });

      var cartItems = [];

      if (cartItem) {
        var newCartItems = oldCart.cartItems;

        const cartItemIndex = newCartItems.findIndex(
          (cartItem) => cartItem.product.id == addedProduct.id
        );

        newCartItems[cartItemIndex].quantity += 1;

        cartItems = [...newCartItems];
      } else {
        cartItems = [
          ...oldCart.cartItems,
          {
            quantity: 1,
            product: addedProduct,
          },
        ];
      }

      const productsPrice = (
        parseFloat(oldCart.productsPrice) + parseFloat(addedProduct.price)
      ).toFixed(2);
      const tax = parseFloat((productsPrice * 18) / 100).toFixed(2);
      const totalPrice = (parseFloat(productsPrice) + parseFloat(tax)).toFixed(
        2
      );

      return {
        productsPrice,
        tax,
        totalPrice,
        cartItems,
      };
    });
  };

  const deleteFromCart = (productId) => {
    setCart((oldCart) => {
      const deletedCartItem = oldCart.cartItems.find((cartItem) => {
        return cartItem.product.id == productId;
      });

      const filteredCartItems = oldCart.cartItems.filter((cartItem) => {
        return cartItem.product.id != deletedCartItem.product.id;
      });

      const productsPrice = (
        parseFloat(oldCart.productsPrice) -
        parseFloat(deletedCartItem.product.price * deletedCartItem.quantity)
      ).toFixed(2);
      const tax = parseFloat((productsPrice * 18) / 100).toFixed(2);
      const totalPrice = (parseFloat(productsPrice) + parseFloat(tax)).toFixed(
        2
      );

      return {
        productsPrice,
        tax,
        totalPrice,
        cartItems: [...filteredCartItems],
      };
    });
  };

  return (
    <AppContext.Provider
      value={{
        filteredProducts,
        cart,
        addToCart,
        deleteFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
