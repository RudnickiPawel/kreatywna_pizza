import '../../../../styles/main.css';

const Dropdown = (props) => {
  const handleDropdownClick = (item) => {
    // console.log(document.querySelectorAll('.' + String(item) + ' .Dropdown__option'));
    const parent = document.querySelectorAll('.' + String(item) + ' .Dropdown__option');
    // console.log('parent: ' + parent);
    const options = [...parent];
    // console.log('options: ' + options);
    options.map(option => option.classList.add("active"));

  };
  return (
    <div onClick={() => handleDropdownClick(props.item)} className='Dropdown'>
      <div className="Dropdown__container">
        <div className='Dropdown__option active'>30 cm</div>
        <div className='Dropdown__option'>40 cm</div>
        <div className='Dropdown__option'>50 cm</div>
        <div className='Dropdown__option'>60 cm</div>
      </div>
    </div>
  );
}

export default Dropdown;
