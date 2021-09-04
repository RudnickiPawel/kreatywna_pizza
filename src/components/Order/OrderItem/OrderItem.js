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
    // menu: (provided, state) => ({
    // ...provided,
    // width: 300,
    // }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
      // width: 300,
    }),
    // control: () => ({
    //   // width: 300,
    // }),
    // singleValue: (provided, state) => {
    //   const opacity = state.isDisabled ? 0.5 : 1;
    //   const transition = 'opacity 300ms';

    //   return { ...provided, opacity, transition };
    // }
  }

  // const handleSizeChange = (event) => {
  //   setPrepareOrder(event.target.value);
  // }
  const handleChange = selectedOption => {
    setState({ selectedOption });
  };

  const [state, setState] = useState({ selectedOption: null });
  const { selectedOption } = state;
  const itemname = props.name;
  console.log(selectedOption);
  // let output;
  // if(selectedOption !== null )
  //   output = selectedOption.value;

  // render() {
  // }; 
  return (
    <div className={'OrderItem ' + itemname}>
      <div className='OrderItem__name'>{itemname.toUpperCase()}</div>
      <Select
        placeholder='wybierz rozmiar'
        // styles={customStyles}
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
      {/* {output ? <p>{output}</p> : null} */}
      {/* <select value={state} onChange={handleSizeChange}>
        <option value={30}>30cm</option>
        <option value={40}>40cm</option>
        <option value={50}>50cm</option>
        <option value={60}>60cm</option>
      </select> */}
      {/* <div onClick={() => handleItemValueChange(itemname, 1, props.order)} className='OrderItem__increment colorOrange'>+</div> */}
      {/* <input className='OrderItem__value' type='number' placeholder='0' /> */}
      {/* <div onClick={() => handleItemValueChange(itemname, 0, props.order)} className='OrderItem__decrement colorOrange'>-</div> */}
      <div onClick={() => { handleAddToList(props.order, selectedOption, itemname)}} className='OrderItem__send'>Dodaj</div>
    </div>
  );
}

const handleAddToList = (order, size, name) => {
  if(size) {
    const output = {
      name: name,
      size: size.value
    }
    order(output);
  }
  else
    alert('Wybierz rozmiar pizzy');
};

// const handleItemValueChange = (item, operation, stateUpdate) => {
//   let output = document.querySelectorAll('.' + String(item) + ' .OrderItem__value')[0];
//   if (operation) {
//     output.value = Number(output.value) + 1;
//     stateUpdate(item, output.value,);
//   }
//   else if (output.value > 0) {
//     output.value = Number(output.value) - 1;
//     stateUpdate();
//   }
//   else return;
// };

export default OrderItem;