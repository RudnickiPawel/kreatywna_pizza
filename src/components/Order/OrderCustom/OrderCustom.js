import { useState } from 'react';
import Select from 'react-select';

const OrderCustom = (props) => {
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
      '&:hover': {
        color: '#fbaa03'
      },
    }),
    control: (_, { selectProps: { width } }) => ({
      width: width,
      display: 'flex',
      cursor: 'pointer',
      '&:hover': {
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
  const handleSelectChange = selectedOption => {
    setState({ selectedOption });
  };
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
  const handleAmountChange = (componentName, upOrDown) => {
    // const newAmount = document.getElementsByClassName('OrderCustom__amount')[0].innerText;
    // if (upOrDown && newAmount <= 5) {
    //   setComponents((prevState) => ({document.getElementsByClassName('OrderCustom__amount')[0]
    //     ...prevState,
    //     componentName: prevState[componentName] + 1
    //   }));
    // } else if (!newAmount < 0) {
    //   setComponents((prevState) => ({
    //     ...prevState,
    //     componentName: prevState[componentName] - 1
    //   }));
    // } else return null;

    console.log('updating: ' + upOrDown);
    // { value: e.target.value });
  }
  // setObjectState((prevState) => ({
  //   ...prevState,
  //   secondKey: 'value',
  // }));

  const [state, setState] = useState({ selectedOption: null });
  const [components, setComponents] = useState({
    ananas: 0,
    boczek: 0,
    cebula: 0,
    drób: 0,
    kukurydza: 0,
    mozarella: 0,
    oliwki: 0,
    oregano: 0,
    papryka: 0,
    pepperoni: 0,
    pieczarki: 0,
    rukola: 0,
    sosczosnkowy: 0,
    sosketchupowy: 0,
    sosmajonezowy: 0,
    sospomidorowy: 0,
    sosśmietanowy: 0,
    szynka: 0,
    wieprzowina: 0,
    wołowina: 0
  });
  const [animateBtn, setAnimateBtn] = useState(false);
  const { selectedOption } = state;
  // const itemname = props.name;
  const componentPrices = props.componentPrices;
  let componentNames;
  if (componentPrices) {
    // console.log();props.pizzaComponents.replace(/\s/g, '').split(',')
    componentNames = Object.keys(componentPrices);
    componentNames = componentNames.map(comp => { return comp.replace(/\s/g, '') });
    // componentNames = [...componentNames];
  }
  let price = 0;
  return (
    <div className='OrderCustom'>
      <div className='OrderCustom__name'>WŁASNA</div>
      <div className='OrderItem__select'>
        <Select
          width='100%'
          placeholder='rozmiar'
          styles={customStyles}
          value={selectedOption}
          onChange={handleSelectChange}
          options={options}
        />
      </div>
      <div onClick={() => { handleAddToList(setAnimateBtn, props.order, selectedOption, props.name, price) }} onAnimationEnd={() => { setAnimateBtn(false) }} className={animateBtn ? 'OrderItem__send button-animated' : 'OrderItem__send'}>Dodaj</div>
      <div className='OrderCustom__components'>
        {componentNames ? componentNames.map((componentName, index) => {
          return <div key={index} className='OrderCustom__component'>
            <img className='OrderCustom__componentImage' src={require('../../../assets/' + componentName + '.jpg').default} alt='' />
            <div className='OrderCustom__componentName'>{componentName}</div>
            <div className='OrderCustom__icon OrderCustom__icon--minus' onClick={() => setComponents((prevState) => ({
              ...prevState,
              componentName: prevState[componentName]-1
            }))}></div>
            <p className="OrderCustom__amount">{components[componentName]}</p>
            <div className='OrderCustom__icon OrderCustom__icon--plus' onClick={() => setComponents((prevState) => ({
              ...prevState,
              componentName: prevState[componentName]+1
            }))}></div>
          </div>
        }) : null}
      </div>
    </div>
  );
}

export default OrderCustom;