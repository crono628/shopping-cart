import React from 'react';

const Item = ({
  name,
  src,
  description,
  price,
  quantity,
  addToCart: handleAddToCart,
  onClick: handleIncrement,
  onClick: handleDecrement,
}) => {
  return (
    <>
      <img src={src} />
      <div>{name}</div>
      <div>{description}</div>
      <div>{price}</div>
      <div className="cart-buttons">
        <button onClick={handleDecrement}>-</button>
        <input quantity={quantity} />
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleAddToCart}>Add To Cart</button>
      </div>
    </>
  );
};

export default Item;
