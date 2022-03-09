




function ShelfItem({item}) {

    const description = item.description;
    const image = item.image_url;

    return(
        <>
        <li>{description}</li>
        <li>{image}</li>
        </>
        
    )

}


export default ShelfItem;