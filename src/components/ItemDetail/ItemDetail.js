import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({data}) => {
    return (
        <div className="ItemDetail">
            <div>
                <img src={data.image} alt="Imagen de Producto" />
            </div>
            <div>
                <h2>{data.title}</h2>
                <h3>$ {data.price}</h3>
                <p>{data.description}</p>
                <button className="btn btn-primary">Comprar</button>
            </div>
        </div>
    );
}

export default ItemDetail;
