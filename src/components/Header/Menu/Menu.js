import '../../../styles/main.css';

const Menu = () => {
  return (
    <div className='Menu'>
      <a href="/" className="Menu__link Menu__link--order">ZAMÓW</a>
      <div className="Menu__container">
        <a href="/" className="Menu__link">POLECANE</a>
        <a href="/" className="Menu__link">O NAS</a>
        <a href="/" className="Menu__link">PRACA</a>
      </div>
    </div>
  )
};

export default Menu;