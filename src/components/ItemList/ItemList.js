import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';

const ItemList = ({data}) => {

    return (
        <div className="container">
            {data.map((item) => {
                return (
                    <Item key={item.id} data={item}/>
                )
            })}
            <ItemCount stock={5} />
            <ItemCount stock={10} initial={1} />
            <ItemCount stock={20} initial={2} />
        </div>
    )
}

export default ItemList;
