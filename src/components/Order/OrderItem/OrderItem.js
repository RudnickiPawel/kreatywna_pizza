import { useState } from 'react';
import Select from 'react-select';
// import ananas from '../../../assets/ananas.jpg';
// import boczek from '../../../assets/boczek.jpg';
// import cebula from '../../../assets/cebula.jpg';
// import drób from '../../../assets/drób.jpg';
// import kukurydza from '../../../assets/kukurydza.jpg';
// import mozarella from '../../../assets/mozarella.jpg';
// import oliwki from '../../../assets/oliwki.jpg';
// import oregano from '../../../assets/oregano.jpg';
// import papryka from '../../../assets/papryka.jpg';
// import pepperoni from '../../../assets/pepperoni.jpg';
// import pieczarki from '../../../assets/pieczarki.jpg';
// import rukola from '../../../assets/rukola.jpg';
// import sosczosnkowy from '../../../assets/sosczosnkowy.jpg';
// import sosketchupowy from '../../../assets/sosketchupowy.jpg';
// import sosmajonezowy from '../../../assets/sosmajonezowy.jpg';
// import sospomidorowy from '../../../assets/sospomidorowy.jpg';
// import sosśmietanowy from '../../../assets/sosśmietanowy.jpg';
// import szynka from '../../../assets/szynka.jpg';
// import wieprzowina from '../../../assets/wieprzowina.jpg';
// import wołowina from '../../../assets/wołowina.jpg';


const OrderItem = (props) => {
  function importAll(r) {         
    return r.keys().map(r);       
  }              
  const images = importAll(require.context('../../../assets', false, /\.(jpg)$/));       
  const imageArray = images.map(function(image) {         
    return <img key={image} src={image} />;       
  });
  // console.log(imageArray);
  const options = [
    { value: 30, label: '30cm' },
    { value: 40, label: '40cm' },
    { value: 50, label: '50cm' },
    { value: 60, label: '60cm' },
  ];

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: '2px dotted rgba(0,0,0,0.1)',
      color: state.isSelected ? '#fbaa03' : '#000',
      backgroundColor: state.isSelected ? 'rgba(0,0,0,0.1)' : 'inherit',
      cursor: 'pointer',
      "&:hover": {
        color: '#fbaa03'
      },
    }),
    control: (_, { selectProps: { width } }) => ({
      width: width,
      display: 'flex',
      cursor: 'pointer',
      "&:hover": {
        backgroundColor: 'rgba(255,255,255,0.2)'
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#fbaa03',
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      color: '#fbaa03',
      justifyContent: 'center',
    })
  }

  const handleChange = selectedOption => {
    setState({ selectedOption });
  };
  const calculatePrice = (pizzaComponents, componentPrices, size) => {
    let price = 10; //base price
    pizzaComponents.forEach(comp => {
      price += componentPrices[comp];
    });
    if (size.value === 40)
      price *= 1.3;
    else if (size.value === 50)
      price *= 1.8;
    else if (size.value === 60)
      price *= 2.5;
    return price.toFixed(2);
  };

  const [state, setState] = useState({ selectedOption: null });
  const [animateBtn, setAnimateBtn] = useState(false);
  const { selectedOption } = state;
  const itemname = props.name;
  let price;
  const pizzaComponents = props.pizzaComponents.replace(/\s/g, '').split(',');
  // console.log()
  console.log(pizzaComponents);
  // console.log(props.pizzaComponents.replace(/\s/g,''));
  // props.pizzaComponents.map(component => console.log(component));
  if (selectedOption)
    price = calculatePrice(props.pizzaComponents, props.componentPrices, selectedOption);
    // const showIt = imageArray[0];
  return (
    <div className={'OrderItem ' + itemname}>
      <div className='OrderItem__name'>{itemname.toUpperCase()}</div>
      <div className="OrderItem__select">
        <Select
          width='100%'
          placeholder='rozmiar'
          styles={customStyles}
          value={selectedOption}
          onChange={handleChange}
          options={options}
        />
      </div>
      <p className="OrderItem__price">{selectedOption ? price + ' zł' : null}</p>
      <div onClick={() => { handleAddToList(setAnimateBtn, props.order, selectedOption, itemname, price) }} onAnimationEnd={() => { setAnimateBtn(false) }} className={animateBtn ? 'OrderItem__send button-animated' : 'OrderItem__send'}>Dodaj</div>
      <div className="OrderItem__components">
        {pizzaComponents.map((component, index) =>
          <div key={index} className="OrderItem__component">
            <img className='OrderItem__image' src={require('../../../assets/' + component + '.jpg').default} alt={component} />
            <div className="OrderItem__componentName">{component}</div>
          </div>
          
        )}
      </div>
    </div>
  );
}

const handleAddToList = (setAnimateBtn, order, size, name, price) => {
  if (size) {
    setAnimateBtn(true);
    const output = {
      name: name,
      size: size.value,
      price: price
    }
    order(output);
  }
  else
    alert('Wybierz rozmiar pizzy');
};

export default OrderItem;