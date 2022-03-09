import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem';

function ShelfPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_SHELF',
    })
  }, [])

  const shelf = useSelector(store => store.shelf)
  // console.log(item);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {shelf.map((item, i) => (
        <ul key={i}>
          <ShelfItem
            key={i}
            item={item}
          />
        </ul>
      ))}



    </div>
  );
}

export default ShelfPage;
