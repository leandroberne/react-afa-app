import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

const ItemList = ({data}) => {

    return (
        <div className="container">
            {data.map((item) => {
                return (
                    <Link className='link' to={`/item/${item.id}`} key={item.id}>
                        <Item data={item}/>
                    </Link>
                )
            })}
        </div>
    );
}

export default ItemList;
