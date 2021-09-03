
const OrderItem = (props) => {
  const itemname = props.name; //all lower case
  const itemName = itemname.charAt(0).toUpperCase() + itemname.slice(1); //first letter upper case
  return (
    <div className={"OrderItem " + itemname}>
      <div className='OrderItem__Name'>{itemName}</div>
      <div onClick={() => handleItemValueChange(itemname, 1)} className='OrderItem__increment colorOrange'>+</div>
      <input className='OrderItem__value' type='number' placeholder='0' />
      <div onClick={() => handleItemValueChange(itemname, 0)} className='OrderItem__decrement colorOrange'>-</div>
    </div>
  );
}

const handleItemValueChange = (item, operation) => {
  let output = document.querySelectorAll('.' + String(item) + ' .OrderItem__value')[0];
  if (operation)
    output.value = Number(output.value) + 1;
  else if (output.value > 0)
    output.value = Number(output.value) - 1;
  else return;
};

export default OrderItem;