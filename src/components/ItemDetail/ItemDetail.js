import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ data }) => {
    return (
        <>
            <h1>Item Detail</h1>
            <div className="ItemDetail">
                <div className="ItemDetail-image">
                    <img src={data.image} alt="Imagen de Producto" />
                </div>
                <div className="ItemDetail-content">
                    <h2>{data.title}</h2>
                    <h3>$ {data.price}</h3>
                    <p>{data.description}</p>
                    <ItemCount stock={10} initial={1} />
                </div>
            </div>
        </>
    );
}

export default ItemDetail;
