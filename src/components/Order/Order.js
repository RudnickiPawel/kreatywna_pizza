import '../../styles/main.css';
import OrderItem from './OrderItem/OrderItem';
import { useState, useEffect } from 'react';

const Order = (props) => {
  // let responseJSON, error;
  useEffect(() => {
    const fetchData = () => {
      fetch('https://kreatywnapizza-default-rtdb.europe-west1.firebasedatabase.app/components.json')
      .then((response) => {
        // error = response.body;
        console.log(response.json());
        // return response.json();
      })
      // .then((data) => {
        
      // });
      // error = response.status;
    }
    fetchData();
  }, [])
  const [order, setOrder] = useState([]);
  const handleNewOrder = (newOrder) => {
    const name = newOrder.name;
    const size = newOrder.size;
    const dummyState = [...order];
    let orderedSimilar = false;
    const newOrderClassName = name + '__' + size;
    dummyState.map(e => {
      if (e.name === newOrder.name && e.size === newOrder.size)
        orderedSimilar = true;
      return null;
    });
    if (!orderedSimilar) {
      newOrder.count = 1;
      setOrder((prevState) => [...prevState, newOrder]);
      const line = name + ' ' + size + 'cm ' + newOrder.count + 'sztuk';
      let newOrderLine = document.createElement('p');
      newOrderLine.className = newOrderClassName;
      newOrderLine.innerText = line;
      document.getElementsByClassName('Order__selected')[0].appendChild(newOrderLine);
    }
    else if (orderedSimilar) {
      let objIndex = dummyState.findIndex((obj => obj.name === name && obj.size === size));
      if (dummyState[objIndex].count < 50) {
        dummyState[objIndex].count += 1;
        // console.log("After update: ", dummyState[objIndex])
        setOrder(dummyState);
        document.getElementsByClassName(newOrderClassName)[0].innerText = name + ' ' + size + 'cm ' + dummyState[objIndex].count + ' sztuk';
      }
      else
        alert('Przepraszamy, ale nie przyjmujemy zamówień liczących więcej niz 50 sztuk danej pizzy.');
    }
  };

  return (
    <div className='Order section'>
      <div className='section__title'>Zamawianie</div>
      <div className="section__paragraph">Kliknij, by dodać do listy. Kliknij zamówienie na liście, by je usunąć.</div>
      <div className='Order__list'>
        <div className="section__title">Wybrano:</div>
        <div className="Order__selected">
          {/* filled dynamically */}
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
