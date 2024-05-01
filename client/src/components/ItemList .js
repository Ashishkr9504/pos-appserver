import React from 'react';
import { Card,Button } from 'antd';
import {  useDispatch } from 'react-redux';
const ItemList = ({ item }) => {
  const dispatch=useDispatch();
  const handleAddTOCart=()=>{
      dispatch({
        type:'ADD_TO_CART',
        payload:{...item,quantity:1}
      });
  }
  const { Meta } = Card;

  return (
    <div>
      <Card
      hoverable
      style={{ width: 220,marginBottom:15}}
      cover={<img alt={item.name} src={item.image} style={{height: 200}} />}
    >

      <Meta title={item.name}/>
      <div className='item-button'>
        <Button onClick={handleAddTOCart}>Add to cart</Button>
      </div>
      <div style={{padding:5}}>
          price:₹{item.price}/-
      </div>
    </Card>

    </div>
    
  );
};

export default ItemList;


