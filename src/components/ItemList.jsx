import Item from "./Item"

const ItemList = ({items}) => {

    return (
        <>
            {items.map(item => <div key={item.id} className="col-md-4 my-4">
                <Item item={item}/>
            </div>)}
        </>
    )
}

export default ItemList;