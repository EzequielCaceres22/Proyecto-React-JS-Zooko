import { Link } from "react-router-dom";


const Item = ({item}) => {

    return (
        <>
            <div className="card border border-0">
                <Link to={"/item/" + item.id} className="text-dark">
                <img src={item.imagen} className="card-img-top" alt={item.titulo}/>
                <div className="card-body">
                    <h5 className="tit-item">{item.titulo}</h5>
                    <img className="brand" src={item.marca} alt={item.titulo}/><br/>
                    <b>${item.precio}</b>
                </div>
                </Link>
            </div>
        </>
    )
}

export default Item;