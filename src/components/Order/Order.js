import '../../styles/main.css';
import OrderItem from './OrderItem/OrderItem';
import { useState, useEffect } from 'react';

const Order = (props) => {
  // let responseJSON, error;
  const [componentPrices, setComponentPrices] = useState(null);
  const [pizzasComponents, setPizzasComponents] = useState(null);
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
  const [order, setOrder] = useState([]);
  const handleNewOrder = (newOrder) => {
    const {name, size} = newOrder;
    const price = new Number(newOrder.price);
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
      const line = name + ' ' + size + 'cm, ' + newOrder.count + ' sztuk, cena: ' + price.toFixed(2) + ' zł';
      let newOrderLine = document.createElement('p');
      newOrderLine.className = newOrderClassName;
      newOrderLine.innerText = line;
      document.getElementsByClassName('Order__selected')[0].appendChild(newOrderLine);
    }
    else if (orderedSimilar) { //if this specific pizza name and size is already in state(not custom pizza)
      let objIndex = dummyState.findIndex((obj => obj.name === name && obj.size === size)); //find specific order
      if (dummyState[objIndex].count < 50) { //if amount of orders doesnt exceed the limit
        dummyState[objIndex].count += 1; //count this one
        // console.log(typeof dummyState[objIndex].price);
        dummyState[objIndex].price = (Number(dummyState[objIndex].price) + price);
        // console.log("After update: ", dummyState[objIndex])
        setOrder(dummyState);
        document.getElementsByClassName(newOrderClassName)[0].innerText = name + ' ' + size + 'cm, ' + dummyState[objIndex].count + ' sztuk, cena: ' + (dummyState[objIndex].price).toFixed(2) + ' zł';
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
      {pizzasComponents ?
        <div className='Order__container'>
          <OrderItem order={handleNewOrder} pizzaComponents={pizzasComponents.margherita} componentPrices={componentPrices} name='margherita' />
          <OrderItem order={handleNewOrder} pizzaComponents={pizzasComponents.pepperoni} componentPrices={componentPrices} name='pepperoni' />
          <OrderItem order={handleNewOrder} pizzaComponents={pizzasComponents.hawajska} componentPrices={componentPrices} name='hawajska' />
          <OrderItem order={handleNewOrder} pizzaComponents={pizzasComponents.carbonara} componentPrices={componentPrices} name='carbonara' />
          <OrderItem order={handleNewOrder} pizzaComponents={pizzasComponents.vesuvio} componentPrices={componentPrices} name='vesuvio' />
          <OrderItem order={handleNewOrder} pizzaComponents={pizzasComponents.capricciosa} componentPrices={componentPrices} name='capricciosa' />
          <OrderItem order={handleNewOrder} pizzaComponents={pizzasComponents.vegetariana} componentPrices={componentPrices} name='vegetariana' />
        </div>
        : 'Wczytywanie...'}
    </div>
  );
}

export default Order;
