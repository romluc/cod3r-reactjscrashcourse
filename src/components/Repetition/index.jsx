import React from 'react';
import products from '../../data/products';

const Repetition = (props) => {
  function getProducts() {
    return products.map((prod) => (
      <li key={prod.id}>
        {prod.id} - {prod.name} => CAD
        {prod.price}
      </li>
    ));
  }

  return (
    <div>
      <h2>Repetition</h2>
      <ul>{getProducts()}</ul>
    </div>
  );
};

export default Repetition;
