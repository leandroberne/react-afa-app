import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';

const ItemList = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return (
        <div className="container">
            {items.map((item) => {
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
