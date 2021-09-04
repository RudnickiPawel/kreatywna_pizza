import '../../styles/main.css';
import OrderItem from './OrderItem/OrderItem';
import { useState } from 'react';

const Order = (props) => {
  const [order, setOrder] = useState([]);
  const handleNewOrder = (newOrder) => {
    setOrder([...order, newOrder]);
    // console.log('ordersAfterChange: ' + order);
    handleShowNewOrder(newOrder);
  };
  const handleShowNewOrder = (newOrder) => {
    const name = newOrder.name;
    const size = newOrder.size;
    const line = name + ' ' + size + ' 1';
    // newOrder tak wyglada:
    // {
    //   name: name,
    //   size: size.value
    // }
    // sprawdz czy juz taki jest
    //   jak jest to + 1
    //   jak nie ma to zrob
    //     fetch cenę z bazy i też pokaż(czy raczej fetch wszystkie ceny na początku?)

    // if (document.querySelectorAll())
    let newOrderLine = document.createElement('p');
    // newOrderLine.id = 'content';
    newOrderLine.className = name + '__' + size;
    newOrderLine.innerText = line;

    document.getElementsByClassName('Order__selected')[0].appendChild(newOrderLine);
  };

  return (
    <div className='Order section'>
      <div className='section__title'>Zamawianie</div>
      <div className="section__paragraph">Kliknij, by dodać do listy. Kliknij zamówienie na liście, by je usunąć.</div>
      <div className='Order__list'>
        <div className="section__title">Wybrano:</div>
        <div className="Order__selected">
          {/* {console.log([...order])} */}
          {/* {[...orders].map(order => order)} */}
        </div>
      </div>
      <div className='Order__container'>
        <OrderItem order={handleNewOrder} name='margherita' />
        <OrderItem order={handleNewOrder} name='pepperoni' />
        <OrderItem order={handleNewOrder} name='hawajska' />
        <OrderItem order={handleNewOrder} name='carbonara' />
        <OrderItem order={handleNewOrder} name='vesuvio' />
        <OrderItem order={handleNewOrder} name='capricciosa' />
        <OrderItem order={handleNewOrder} name='vegetariana' />
      </div>

    </div>
  );
}

export default Order;
