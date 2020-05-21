import React, { useState, useEffect } from 'react';

const Repetition = (props) => {
  const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();

        setData(data);
        setLoading(false);
      };
      fetchData();
    }, [url]);

    return { data, loading };
  };

  const { data: products, loading } = useFetch(
    'http://localhost:3000/products'
  );

  return (
    <div>
      <h2>Repetition</h2>
      <ul>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          products.map((prod) => (
            <li key={prod.id}>
              {prod.id} - {prod.name} => CAD
              {prod.price}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Repetition;
