import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';



function ShelfItem({ item }) {

    const dispatch = useDispatch();
    // const userId = useSelector(store => store.user.id);
    // const itemId = item.id;
    const description = item.description;
    const image = item.image_url;

    const [updatedDescription, setUpdatedDesciption] = useState('');
    const [updatedUrl, setUpdatedUrl] = useState('');

    const handleDelete = (item) => {
        console.log(item);
        dispatch({
            type: 'DELETE_THING',
            payload: item
        })
    }

    const handleUpdate = () => {

    //    dispatch({
    //         type: 'UPDATE_SHELF_ITEM',
    //         payload: {updatedDescription, updatedUrl},
    //     })
        dispatch({
            type: 'SEND_UPDATED_ITEM',
            payload: {updatedDescription, updatedUrl}
        })

        setUpdatedDesciption('');
        setUpdatedUrl('');
    }


    return (
        <>
            {/* listing ShelfItem */}
            <li>{item.id}</li>
            <li>{description}</li>
            <li>{image}</li>

            {/* update inputs */}
            <input type="text"
                placeholder="Update Description"
                value={updatedDescription}
                onChange={() => setUpdatedDesciption(event.target.value)}
            />
            <input type="text"
                placeholder="Update URL"
                value={updatedUrl}
                onChange={() => setUpdatedUrl(event.target.value)}
            />

            <button onClick={handleUpdate}>Update</button>
            <br />
            <button onClick={() => { handleDelete(item) }}>Delete</button>
        </>

    )

}


export default ShelfItem;