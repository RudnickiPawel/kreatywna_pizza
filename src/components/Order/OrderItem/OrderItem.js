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