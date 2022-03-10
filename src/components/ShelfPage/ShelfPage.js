import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem';

function ShelfPage() {

  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');



  const dispatch = useDispatch();
  const shelf = useSelector(store => store.shelf.shelfReducer);
  const userId = useSelector(store => store.user.id);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('user id is: ', userId);

    // dispatch({
    //   type: 'SET_NEW_SHELF_ITEM',
    //   payload: {userId, description, image}
    // })

    dispatch({
      type: 'POST_NEW_SHELF_ITEM',
      payload: {userId, description, image}
    })

    // console.log(description);
    // console.log(image);
    // console.log(userId);
  }



  useEffect(() => {
    dispatch({
      type: 'FETCH_SHELF',
    })
  }, [])



  // console.log('shelf is: ', shelf);
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>

     {shelf.map((item, i) => {
        return (
          <ul key={i}>
            <ShelfItem
              key={i}
              item={item}
            />
          </ul>
        );
      })} 

      <form onSubmit={handleSubmit}>
        <input
          placeholder='description'
          value={description}
          onChange={() => setDescription(event.target.value)}
        />
        <input
          placeholder='image'
          value={image}
          onChange={() => setImage(event.target.value)}
        />

        <button type='submit'>Submit</button>
      </form>


    </div>
  );
}

export default ShelfPage;
