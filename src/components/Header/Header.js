import '../../styles/main.css';
import Hamburger from './Hamburger/Hamburger';
import Menu from './Menu/Menu';

const Header = () => {
  return (
    <div className='Header'>
      <Hamburger />
      <div className="Header__logo">
        KreatywnaPizza  {/*style it later*/}
      </div>
      <Menu />
    </div>
  )
};

export default Header;