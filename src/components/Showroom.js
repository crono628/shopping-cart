import React from 'react';
import Item from './Item';
import productData from '../images/productData';
import uniqid from 'uniqid';

const Showroom = () => {
  const allProducts = productData.map((product) => {
    return (
      <div key={uniqid()}>
        <Item
          name={product.name}
          src={product.src}
          description={product.description}
          price={product.price}
        />
      </div>
    );
  });

  return <div className="showroom">{allProducts}</div>;
};

export default Showroom;
