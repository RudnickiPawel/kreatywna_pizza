import { useState } from 'react';
import Select from 'react-select';
import pineapple from '../../../assets/pineapple.jfif';

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
  // const handleAnimationEnded = (setAnimateBtn) => {
  // ;
  // };
  const [state, setState] = useState({ selectedOption: null });
  const [components, setComponents] = useState({});
  const [animateBtn, setAnimateBtn] = useState(false);
  const { selectedOption } = state;
  // const itemname = props.name;
  const componentPrices = props.componentPrices;
  let componentNames;
  if (componentPrices) {
    // console.log();
    componentNames = Object.keys(componentPrices);
    // componentNames = [...componentNames];
  }
  let price = 0;
  return (
    <div className='OrderCustom'>
      <div className="OrderCustom__name">WŁASNA</div>
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
      <div onClick={() => { handleAddToList(setAnimateBtn, props.order, selectedOption, props.name, price) }} onAnimationEnd={() => { setAnimateBtn(false) }} className={animateBtn ? 'OrderItem__send button-animated' : 'OrderItem__send'}>Dodaj</div>
      {/* <div className="OrderCustom__component"></div> */}
      <div className='OrderCustom__components'>
        {componentNames ? componentNames.map((componentName, index) => <div key={index} className='OrderCustom__component'><img className='OrderCustom__componentImage' src={pineapple} alt='' /><div className='OrderCustom__componentName'>{componentName}</div></div>) : null}
      </div>
    </div>
  );
}

export default OrderCustom;