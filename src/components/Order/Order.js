import '../../styles/main.css';
import OrderItem from './OrderItem/OrderItem';
import OrderCustom from './OrderCustom/OrderCustom';
import { useState, useEffect, Fragment } from 'react';

const Order = (props) => {
  const [componentPrices, setComponentPrices] = useState(null);
  const [pizzasComponents, setPizzasComponents] = useState(null);
  const [orders, setOrders] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  let totalPrice = 0.00;
  let showGoToCheckout = false;
  if (orders[0])
    showGoToCheckout = true;
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
    if (!newOrder.components) {//if its not custom order(only custom stores components)
      dummyState.map(order => {
        if (order.name === newOrder.name && order.size === newOrder.size)
          orderRepeated = true;
        return null;
      });
      if (!orderRepeated) { //if no such order in state
        newOrder.count = 1;
        setOrders((prevState) => [...prevState, newOrder]);
      }
      else if (orderRepeated) { //if already such order in state (repeated)
        let orderIndex = dummyState.findIndex((order => order.name === newOrder.name && order.size === newOrder.size)); //find specific order
        if (dummyState[orderIndex].count < 100) { //if amount of orders doesnt exceed the limit
          dummyState[orderIndex].count += 1; //count this one
          dummyState[orderIndex].price = (parseFloat(dummyState[orderIndex].price) + parseFloat(newOrder.price)).toFixed(2);
          setOrders(dummyState);
        }
        else
          alert('Przepraszamy, ale nie przyjmujemy zamówień liczących więcej niz 100 sztuk danej pizzy.');
      }
    }
    else { //CUSTOM PIZZA
      dummyState.map(order => {
        if (order.size === newOrder.size && JSON.stringify(order.components) === JSON.stringify(newOrder.components))
          orderRepeated = true;
        return null;
      });
      if (!orderRepeated) { //if no such order in state
        newOrder.count = 1;
        setOrders((prevState) => [...prevState, newOrder]);
      }
      else if (orderRepeated) { //if already such order in state (repeated)
        let orderIndex = dummyState.findIndex((order => JSON.stringify(order.components) === JSON.stringify(newOrder.components) && order.size === newOrder.size)); //find specific order
        if (dummyState[orderIndex].count < 100) { //if amount of orders doesnt exceed the limit
          dummyState[orderIndex].count += 1; //count this one
          dummyState[orderIndex].price = (parseFloat(dummyState[orderIndex].price) + parseFloat(newOrder.price)).toFixed(2);
          setOrders(dummyState);
        }
        else
          alert('Przepraszamy, ale nie przyjmujemy zamówień liczących więcej niz 100 sztuk danej pizzy.');
      }
    }
  };
  const handleRemoveFromOrder = (order, isCustom) => {
    const dummyState = [...orders];
    let orderIndex;
    let basePrice = order.price / order.count;
    if (!isCustom) {
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
    } else {
      dummyState.map((x) => {
        if (x.components === order.components && x.size === order.size)
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
    }
  };
  const handleToggleModal = (isModalVisible) => {
    setToggleModal(isModalVisible);
  };

  return (
    <div className='Order section'>
      <div className='section__title'>Zamawianie</div>
      <div className='section__paragraph'>Kliknij na przycisk Dodaj, by dodać do listy. <br />Kliknij zamówienie na liście, by je usunąć.</div>
      <div className='Order__list'>
        <div className='section__title'>Wybrano:</div>
        <div className='Order__selected'>
          {
            !(orders === null) ? orders.map(order =>
              <div onClick={() => {
                if (order.components)
                  handleRemoveFromOrder(order, order.components)
                else
                  handleRemoveFromOrder(order)
              }} key={!order.components ? order.name + '__' + order.size : order.components + '__' + order.size} className='Order__line'> {order.name + ' ' + order.size + 'cm, ' + order.count + ' sztuk, cena: ' + order.price + 'zł'}</div>
            ) : null
          }
        </div>
        <div className='Order__price'>Suma: {(Math.round(totalPrice * 100) / 100).toFixed(2)} zł
          {
            showGoToCheckout ?
              <div className='Order__goToForm' onClick={() => {
                const target = document.getElementsByClassName('Order__checkout')[0];
                target.scrollIntoView();
              }}>Zatwierdź listę</div>
              : null
          }
        </div>
      </div>
      {
        pizzasComponents ?
          <Fragment>
            <div className='Order__container'>
              {showGoToCheckout ? <div className='Order__goToCheckout' onClick={() => {
                const target = document.getElementsByClassName('Order__list')[0];
                target.scrollIntoView();
              }}>przejdź do listy</div> : null}
              <OrderItem order={handleOrder} pizzaComponents={pizzasComponents.margherita} componentPrices={componentPrices} name='margherita' />
              <OrderItem order={handleOrder} pizzaComponents={pizzasComponents.pepperoni} componentPrices={componentPrices} name='pepperoni' />
              <OrderItem order={handleOrder} pizzaComponents={pizzasComponents.hawajska} componentPrices={componentPrices} name='hawajska' />
              <OrderItem order={handleOrder} pizzaComponents={pizzasComponents.carbonara} componentPrices={componentPrices} name='carbonara' />
              <OrderItem order={handleOrder} pizzaComponents={pizzasComponents.vesuvio} componentPrices={componentPrices} name='vesuvio' />
              <OrderItem order={handleOrder} pizzaComponents={pizzasComponents.capricciosa} componentPrices={componentPrices} name='capricciosa' />
              <OrderItem order={handleOrder} pizzaComponents={pizzasComponents.vegetariana} componentPrices={componentPrices} name='vegetariana' />
              <OrderCustom order={handleOrder} componentPrices={componentPrices} />
            </div>
            <div className='Order__checkout'>
              <div className="section__title">Dane do wysyłki</div>
              <label>
                Miasto:
                <input type='text' className="Order__checkout-input Order__checkout_city" placeholder='miasto' />
              </label>
              <label>
                Ulica:
                <input type='text' className="Order__checkout-input Order__checkout_street" placeholder='ulica' />
              </label>
              <label>
                Nr budynku:
                <input type='text' className="Order__checkout-input Order__checkout_houseNr" placeholder='numer domu' />
              </label>
              <label>
                Nr mieszkania:
                <input type='text' className="Order__checkout-input Order__checkout_flatNr" placeholder='numer mieszkania' />
              </label>
              <label>
                Nr telefonu:
                <input type='tel' className="Order__checkout-input Order__checkout_phone" placeholder='numer telefonu' />
              </label>
              <div className="Order__send" onClick={() => {
                let anyInputEmpty = false;
                let inputsValues = document.getElementsByClassName('Order__checkout-input'); //htmlCollection
                inputsValues = [].slice.call(inputsValues); //turning into Array
                inputsValues = inputsValues.map(input => {
                  if (input.value === '')
                    anyInputEmpty = true;
                })
                if(anyInputEmpty)
                  alert('Ups! Coś poszło nie tak! Upewnij się, że dane zostały wprowadzone prawidłowo.');
                else
                  alert('Zamówienie zostało wysłane!');
                //normalnie w tym momencie robiona by była walidacja danych przez serwer, płatność i potem przechowanie danych w bazie danych na serwerze; ja jednak nie będę implementował tych funkcjonalności dla tego projektu; 
              }}>Wyślij</div>
            </div>
          </Fragment>
          : 'Wczytywanie...'
      }
    </div >
  );
}

export default Order;
