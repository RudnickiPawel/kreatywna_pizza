import '../../../styles/main.css';

const Menu = (props) => {
  return (
    <div className='Menu'>
      <a onClick={e => {props.click(e, 'Order')}} href="/" className="Menu__link Menu__link--order">ZAMÓW</a>
      <div className="Menu__container">
        <a onClick={e => {props.click(e, 'Recommended')}} href="/" className="Menu__link">POLECANE</a>
        <a onClick={e => {props.click(e, 'About')}} href="/" className="Menu__link">O NAS</a>
        <a onClick={e => {props.click(e, 'Career')}} href="/" className="Menu__link">PRACA</a>
      </div>
    </div>
  )
};

export default Menu;