import '../../styles/main.css';
import Hamburger from './Hamburger/Hamburger';
import Menu from './Menu/Menu';

const Header = () => {
  return (
    <div className='Header'>
      <div className="Header__container">
        <div className="Header__logo">
          Kreatywna<span>Pizza</span>
        </div>
        <Menu />
        <Hamburger />
      </div>
    </div>
  )
};

export default Header;