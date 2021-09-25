import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

const ItemList = ({ data }) => {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {data.map((item) => {
          return (
            <div className='col-md-3' key={item.id}>
              <Link className='link' to={`/item/${item.id}`}>
                <Item data={item} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
