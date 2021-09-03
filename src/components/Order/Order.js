import '../../styles/main.css';
import OrderItem from './OrderItem/OrderItem';
import { useState } from 'react';

const Order = (props) => {
  const [orders, setorders] = useState({});
  const handleOrderListChange = (newOrder) => {
    setorders({...orders, newOrder});
    console.log('ordersAfterChange: ' + orders);
  };
  return (
    <div className='Order section'>
      <div className='section__title'>Zamawianie</div>
      <div className='Order__container'>
        <OrderItem order={handleOrderListChange} name='margherita' />
        <OrderItem order={handleOrderListChange} name='pepperoni' />
        <OrderItem order={handleOrderListChange} name='hawajska' />
        <OrderItem order={handleOrderListChange} name='carbonara' />
        <OrderItem order={handleOrderListChange} name='vesuvio' />
        <OrderItem order={handleOrderListChange} name='capricciosa' />
        <OrderItem order={handleOrderListChange} name='vegetariana' />
      </div>
      <div className='Order__list'>
        <div className="section__title">Wybrano:</div>
        
        </div>
    </div>
  );
}

export default Order;
