import React, { useContext } from "react";
import * as Icons from "../../icons";
import { Input } from "../../common";
import { AppContext } from "../../../context/AppProvider";

const Products = () => {
  const { filteredProducts, addToCart } = useContext(AppContext);
  return (
    <div className="products-container">
      <div className="header">
        <Icons.Search className="icon" />
        <Input placeholder="Ürün adı, SKU ya da barkod ile ara..." />
        <Icons.Maximize className="icon" />
      </div>
      <div className="products">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="product"
            onClick={() => addToCart(item.id)}
          >
            <div className="product-image">
              <img src={item.media} alt={item.title} />
            </div>
            <div className="product-details">
              <p className="text bolder ellipsis">
                {item.title}
              </p>
              <p className="text muted">₺ {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
