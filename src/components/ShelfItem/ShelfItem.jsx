import { useSelector, useDispatch } from 'react-redux';




function ShelfItem({item}) {

    const dispatch = useDispatch();
    const userId = useSelector(store => store.user.id);
    const itemId = item.id;
    const description = item.description;
    const image = item.image_url;


    const handleDelete = (item) => {
        console.log(item);
        dispatch({
            type: 'DELETE_THING',
            payload: item
        })
    }



    return(
        <>
        <li>{item.id}</li>
        <li>{description}</li>
        <li>{image}</li>
        <button onClick={() => {handleDelete(item)} }>Delete</button>
        </>
        
    )

}


export default ShelfItem;