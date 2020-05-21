import React from 'react';

function getProducts() {
  fetch('db.json')
    .then((res) => res.json())
    .then((data) => console.log(data));
}

getProducts();

const Repetition = (props) => {
  return (
    <div>
      <h2>Repetition</h2>
      <ul>
        {/* {getProducts().then((data) => {
          data.map((prod) => (
            <li key={prod.id}>
              {prod.id} - {prod.name} => CAD
              {prod.price}
            </li>
          ));
        })} */}
      </ul>
    </div>
  );
};

export default Repetition;
