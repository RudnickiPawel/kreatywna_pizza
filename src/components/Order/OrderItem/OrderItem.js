import { useState } from 'react';
import Select from 'react-select';

const OrderItem = (props) => {
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
  let pizzaComponents = props.pizzaComponents.split(',').map(s => s.trim()); //with inner spaces
  // const pizzaComponentsNoWhitespaces = pizzaComponents.map(s => s.replace(/\s/g, '')); //without inner spaces
  let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index);
  const componentDuplicates = findDuplicates(pizzaComponents);
  let componentAlreadyDisplayed = [];
  if (selectedOption)
    price = calculatePrice(pizzaComponents, props.componentPrices, selectedOption);
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
      <p className="OrderItem__price">{selectedOption ? price + ' z??' : null}</p>
      <div onClick={() => { handleAddToList(setAnimateBtn, props.order, selectedOption, itemname, price) }} onAnimationEnd={() => { setAnimateBtn(false) }} className={animateBtn ? 'OrderItem__send button-animated' : 'OrderItem__send'}>Dodaj</div>
      <div className="OrderItem__components">
        {pizzaComponents.map((component, index) => {
          if (!componentDuplicates.includes(component)) //if its not duplicate
            return <div key={index} className="OrderItem__component">
              <img className='OrderItem__image' src={require('../../../assets/' + component.replace(/\s/g, '') + '.jpg').default} alt={component} />
              <div className="OrderItem__componentName">{'1 ' + component}</div>
            </div>
          else if (!componentAlreadyDisplayed.includes(component)) { //if it is duplicate and not displayed yet
            componentAlreadyDisplayed.push(component);
            return <div key={index} className="OrderItem__component">
              <img className='OrderItem__image' src={require('../../../assets/' + component.replace(/\s/g, '') + '.jpg').default} alt={component} />
              <div className="OrderItem__componentName">{componentDuplicates.filter(rep => rep === component).length + 1 + ' ' + component}</div>
            </div>
          }
          return null
        })}
      </div>
    </div>
  );
}

const handleAddToList = (setAnimateBtn, order, size, name, price) => {
  if (size) {
    setAnimateBtn(true);
    const output = {
      name: name.toUpperCase(),
      size: size.value,
      price: price
    }
    order(output);
  }
  else
    alert('Wybierz rozmiar pizzy');
};

export default OrderItem;