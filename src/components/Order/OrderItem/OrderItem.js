// import { render } from '@testing-library/react';
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
      color: 'red',
    }),
    option: (provided, state) => ({
      // ...provided,
      // borderBottom: '1px dotted pink',
      color: state.isSelected ? '#fbaa03' : '#000',
      // padding: 20,
      // width: 300,
    }),
    control: (_, { selectProps: { width } }) => ({
      width: width,
      display: 'flex'
    }),
    singleValue: (provided, state) => {
      //   const opacity = state.isDisabled ? 0.5 : 1;
      //   const transition = 'opacity 300ms';
      return;
      //   return { ...provided, opacity, transition };
    }
  }
  const handleChange = selectedOption => {
    setState({ selectedOption });
  };

  const [state, setState] = useState({ selectedOption: null });
  const { selectedOption } = state;
  const itemname = props.name;

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
      <div onClick={() => { handleAddToList(props.order, selectedOption, itemname) }} className='OrderItem__send'>Dodaj</div>
    </div>
  );
}

const handleAddToList = (order, size, name) => {
  if (size) {
    const output = {
      name: name,
      size: size.value
    }
    order(output);
  }
  else
    alert('Wybierz rozmiar pizzy');
};

export default OrderItem;