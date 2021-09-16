import '../../styles/main.css';
import OrderItem from './OrderItem/OrderItem';
import OrderCustom from './OrderCustom/OrderCustom';
import { useState, useEffect } from 'react';

const Order = (props) => {
  const [componentPrices, setComponentPrices] = useState(null);
  const [pizzasComponents, setPizzasComponents] = useState(null);
  const [orders, setOrders] = useState([]);
  let totalPrice = 0.00;
  orders.map(order => {
    totalPrice += parseFloat(order.price);
    return null;
  });
  useEffect(() => {
    const fetchComponents = () => {
      fetch('https://kreatywnapizza-default-rtdb.europe-west1.firebasedatabase.app/components.json')
        .then(response => {
          return response.json();
        })
        .then(data => {
          setComponentPrices(data);
        });
    };
    const fetchPizzas = () => {
      fetch('https://kreatywnapizza-default-rtdb.europe-west1.firebasedatabase.app/pizzas.json')
        .then(response => {
          return response.json();
        })
        .then(data => {
          setPizzasComponents(data);
        });
    };
    fetchComponents();
    fetchPizzas();
  }, []);
  const handleOrder = (newOrder) => {
    const dummyState = [...orders];
    let orderRepeated = false;
    dummyState.map(order => {
      if (order.name === newOrder.name && order.size === newOrder.size)
        orderRepeated = true;
      return null;
    });
    if (!orderRepeated) { //if no such order in state
      newOrder.count = 1;
      setOrders((prevState) => [...prevState, newOrder]);
    }
    else if (orderRepeated) { //if already such order in state (repeated, non custom)
      let orderIndex = dummyState.findIndex((order => order.name === newOrder.name && order.size === newOrder.size)); //find specific order
      if (dummyState[orderIndex].count < 100) { //if amount of orders doesnt exceed the limit
        dummyState[orderIndex].count += 1; //count this one
        dummyState[orderIndex].price = (parseFloat(dummyState[orderIndex].price) + parseFloat(newOrder.price)).toFixed(2);
        setOrders(dummyState);
      }
      else
        alert('Przepraszamy, ale nie przyjmujemy zamówień liczących więcej niz 100 sztuk danej pizzy.');
    }
  };
  const handleRemoveFromOrder = (order) => {
    const dummyState = [...orders];
    let orderIndex;
    let basePrice = order.price / order.count;
    dummyState.map((x) => {
      if (x.name === order.name && x.size === order.size)
        orderIndex = dummyState.indexOf(x);
      return null;
    });
    if (dummyState[orderIndex].count > 1) {
      dummyState[orderIndex].count -= 1;
      dummyState[orderIndex].price = (basePrice * dummyState[orderIndex].count).toFixed(2);
    }
    else
      dummyState.splice(orderIndex, 1);
    setOrders(dummyState);
  };

  return (
    <div className='Order section'>
      <div className='section__title'>Zamawianie</div>
      <div className="section__paragraph">Kliknij na przycisk Dodaj, by dodać do listy. <br />Kliknij zamówienie na liście, by je usunąć.</div>
      <div className='Order__list'>
        <div className="section__title">Wybrano:</div>
        <div className="Order__selected">
          {
            !(orders === null) ? orders.map(order =>
              <div onClick={() => handleRemoveFromOrder(order)} key={order.name + '__' + order.size} className='Order__line'> {order.name + ' ' + order.size + 'cm, ' + order.count + ' sztuk, cena: ' + order.price + 'zł'}</div>
            ) : null
          }
        </div>
        <div className="Order__price">Suma: {(Math.round(totalPrice * 100) / 100).toFixed(2)} zł</div>
      </div>
      {
        pizzasComponents ?
          <div className='Order__container'>
            <OrderItem order={handleOrder} pizzaComponents={pizzasComponents.margherita} componentPrices={componentPrices} name='margherita' />
            <OrderItem order={handleOrder} pizzaComponents={pizzasComponents.pepperoni} componentPrices={componentPrices} name='pepperoni' />
            <OrderItem order={handleOrder} pizzaComponents={pizzasComponents.hawajska} componentPrices={componentPrices} name='hawajska' />
            <OrderItem order={handleOrder} pizzaComponents={pizzasComponents.carbonara} componentPrices={componentPrices} name='carbonara' />
            <OrderItem order={handleOrder} pizzaComponents={pizzasComponents.vesuvio} componentPrices={componentPrices} name='vesuvio' />
            <OrderItem order={handleOrder} pizzaComponents={pizzasComponents.capricciosa} componentPrices={componentPrices} name='capricciosa' />
            <OrderItem order={handleOrder} pizzaComponents={pizzasComponents.vegetariana} componentPrices={componentPrices} name='vegetariana' />
            <OrderCustom componentPrices={componentPrices}/>
          </div>
          : 'Wczytywanie...'
      }
    </div >
  );
}

export default Order;
